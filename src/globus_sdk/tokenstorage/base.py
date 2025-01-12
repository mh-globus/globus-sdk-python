import abc
import contextlib
import os
from typing import Any, Dict, Iterator, Optional

from globus_sdk.services.auth import OAuthTokenResponse


class StorageAdapter(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def store(self, token_response: OAuthTokenResponse) -> None:
        """
        Store an `OAuthTokenResponse` in the underlying storage for this adapter.
        """

    @abc.abstractmethod
    def get_token_data(self, resource_server: str) -> Optional[Dict[str, Any]]:
        """
        Lookup token data for a resource server

        Either returns a dict with the access token, refresh token (optional), and
        expiration time, or returns ``None``, indicating that there was no data for that
        resource server.
        """

    def on_refresh(self, token_response: OAuthTokenResponse) -> None:
        """
        By default, the on_refresh handler for a token storage adapter simply
        stores the token response.
        """
        self.store(token_response)


class FileAdapter(StorageAdapter, metaclass=abc.ABCMeta):
    """
    File adapters are for single-user cases, where we can assume that there's a
    simple file-per-user and users are only ever attempting to read their own
    files.
    """

    filename: str

    def file_exists(self) -> bool:
        """
        Check if the file used by this file storage adapter exists.
        """
        return os.path.exists(self.filename)

    @contextlib.contextmanager
    def user_only_umask(self) -> Iterator[None]:
        """
        a context manager to deny rwx to Group and World, x to User

        this does not create a file, but ensures that if a file is created while in the
        context manager, its permissions will be correct on unix systems
        """
        old_umask = os.umask(0o177)
        try:
            yield
        finally:
            os.umask(old_umask)
