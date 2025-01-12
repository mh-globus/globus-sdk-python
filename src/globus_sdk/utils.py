import collections
import collections.abc
import hashlib
import os
import sys
from base64 import b64encode
from enum import Enum
from typing import (
    TYPE_CHECKING,
    Any,
    Callable,
    Generator,
    Generic,
    Iterable,
    Optional,
    Type,
    TypeVar,
    cast,
)

C = TypeVar("C", bound=Callable[..., Any])
T = TypeVar("T")
R = TypeVar("R")

if TYPE_CHECKING:
    # pylint: disable=unsubscriptable-object
    PayloadWrapperBase = collections.UserDict[str, Any]
else:
    PayloadWrapperBase = collections.UserDict


def sha256_string(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def b64str(s: str) -> str:
    return b64encode(s.encode("utf-8")).decode("utf-8")


def slash_join(a: str, b: Optional[str]) -> str:
    """
    Join a and b with a single slash, regardless of whether they already
    contain a trailing/leading slash or neither.
    """
    if not b:  # "" or None, don't append a slash
        return a
    if a.endswith("/"):
        if b.startswith("/"):
            return a[:-1] + b
        return a + b
    if b.startswith("/"):
        return a + b
    return a + "/" + b


def doc_api_method(
    external_message: str,
    external_link: str,
    *,
    external_base_url: str = "https://docs.globus.org/api",
    # we could override the format string if wanted (after the normal header)
    external_format_str: str = (
        "See `{message} <{base_url}/{link}>`_ in the API documentation for details."
    ),
) -> Callable[[C], C]:
    def decorate(func: C) -> C:
        func.__doc__ = f"""{func.__doc__}

        **External Documentation**

        """ + external_format_str.format(
            message=external_message, base_url=external_base_url, link=external_link
        )
        return func

    return decorate


def safe_strseq_iter(value: Iterable[Any]) -> Generator[str, None, None]:
    """
    Given an Iterable (typically of strings), produce an iterator over it of strings.
    This is a passthrough with two caveats:
    - if the value is a solitary string, yield only that value
    - str value in the iterable which is not a string

    This helps handle cases where a string is passed to a function expecting an iterable
    of strings, as well as cases where an iterable of UUID objects is accepted for a
    list of IDs, or something similar.
    """
    if isinstance(value, str):
        yield value
    else:
        for x in value:
            yield str(x)


def render_enums_for_api(value: Any) -> Any:
    """
    Convert enum values to their underlying value.

    If a value is an iterable type, it will be converted to a list and the values will
    also be converted if they are enum values.
    """
    # special-case: handle str and bytes because these types are technically iterable
    # types (of bytes or str values) which could trip someone up
    if isinstance(value, (str, bytes)):
        return value
    if isinstance(value, collections.abc.Iterable):
        return [render_enums_for_api(x) for x in value]
    return value.value if isinstance(value, Enum) else value


class PayloadWrapper(PayloadWrapperBase):
    """
    A class for defining helper objects which wrap some kind of "payload" dict.
    Typical for helper objects which formulate a request payload, e.g. as JSON.

    Payload types inheriting from this class can be passed directly to the client
    ``post()``, ``put()``, and ``patch()`` methods instead of a dict. These methods will
    recognize a ``PayloadWrapper`` and convert it to a dict for serialization with the
    requested encoder (e.g. as a JSON request body).
    """

    # note: this class doesn't actually define any methods, properties, or attributes
    # it's just our own flavor of UserDict, which wraps a 'data' dict
    #
    # use UserDict rather than subclassing dict so that our API is always consistent
    # e.g. `dict.pop` does not invoke `dict.__delitem__`. Overriding `__delitem__` on a
    # dict subclass can lead to inconsistent behavior between usages like these:
    #   x = d["k"]; del d["k"]
    #   x = d.pop("k")
    #
    # UserDict inherits from MutableMapping and only defines the dunder methods, so
    # changing its behavior safely/consistently is simpler


def in_sphinx_build() -> bool:  # pragma: no cover
    # check if `sphinx-build` was used to invoke
    return os.path.basename(sys.argv[0]) in ["sphinx-build", "sphinx-build.exe"]


class _classproperty(Generic[T, R]):
    """
    WARNING: for internal use only.
    Everything in `globus_sdk.utils` is meant to be internal only, but that holds
    for this class **in particular**.

    This is a well-typed Generic Descriptor which can be used to wrap `classmethod`
    decorated functions. Usage should be:

        @utils.classproperty
        def foo(...): ...

    After python3.8 EOL, this should be replaced with

        @classmethod
        @property
        def foo(...): ...

    However, this will also require proper mypy support. See also:
      https://github.com/python/mypy/issues/2563

    For more guidance on how this works, see the python3 descriptor guide:
      https://docs.python.org/3/howto/descriptor.html#properties
    """

    def __init__(self, func: Callable[[Type[T]], R]) -> None:
        self.func = func

    def __get__(self, obj: Any, cls: Type[T]) -> R:
        return self.func(cls)


# if running under sphinx, define this as the stacked classmethod(property(...))
# decoration, so that proper autodoc generation happens
if in_sphinx_build():  # pragma: no cover

    def classproperty(func: Callable[[T], R]) -> _classproperty[T, R]:
        # type ignore this because
        # - it doesn't match the return type
        # - mypy doesn't understand classmethod(property(...)) on older pythons
        return classmethod(property(func))  # type: ignore

else:

    def classproperty(func: Callable[[T], R]) -> _classproperty[T, R]:
        # type cast to convert instance method to class method
        return _classproperty(cast(Callable[[Type[T]], R], func))
