from typing import Any

from globus_sdk.response import GlobusHTTPResponse, IterOnIterKeyMixin


class IterableTransferResponse(GlobusHTTPResponse, IterOnIterKeyMixin):
    """
    Response class for non-paged list oriented resources. Allows top level
    fields to be accessed normally via standard item access, and also
    provides a convenient way to iterate over the sub-item list in a specified
    key:

    >>> print("Path:", r["path"])
    >>> # Equivalent to: for item in r["DATA"]
    >>> for item in r:
    >>>     print(item["name"], item["type"])
    """

    def __init__(self, *args: Any, iter_key: str = "DATA", **kwargs: Any) -> None:
        self.iter_key = iter_key
        super().__init__(*args, **kwargs)
