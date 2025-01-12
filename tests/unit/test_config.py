import os
from unittest import mock

import pytest

import globus_sdk.config


def test_get_service_url():
    """
    Confirms get_service_url returns expected results
    Tests environments, services, and missing values
    """
    assert (
        globus_sdk.config.get_service_url("auth", environment="production")
        == "https://auth.globus.org/"
    )
    assert (
        globus_sdk.config.get_service_url("transfer", environment="production")
        == "https://transfer.api.globus.org/"
    )
    assert (
        globus_sdk.config.get_service_url("auth", environment="preview")
        == "https://auth.preview.globus.org/"
    )
    assert (
        globus_sdk.config.get_service_url("search", environment="preview")
        == "https://search.api.preview.globus.org/"
    )

    with pytest.raises(ValueError):
        globus_sdk.config.get_service_url("auth", environment="nonexistent")


@pytest.mark.parametrize(
    "value, expected_result",
    [(x, True) for x in [str(True), "1", "YES", "true", "t", "True", "ON"]]
    + [(x, False) for x in [str(False), "0", "NO", "false", "f", "False", "OFF"]]
    + [(x, ValueError) for x in ["invalid", "1.0", "0.0"]],  # type: ignore
)
def test_get_ssl_verify(value, expected_result):
    """
    Confirms bool cast returns correct bools from sets of string values
    """
    with mock.patch.dict(os.environ):
        os.environ["GLOBUS_SDK_VERIFY_SSL"] = value
        if isinstance(expected_result, bool):
            assert globus_sdk.config.get_ssl_verify() == expected_result
        else:
            with pytest.raises(expected_result):
                globus_sdk.config.get_ssl_verify()


def test_get_ssl_verify_with_explicit_value():
    with mock.patch.dict(os.environ):
        os.environ["GLOBUS_SDK_VERIFY_SSL"] = "false"
        assert globus_sdk.config.get_ssl_verify(True) is True
        assert globus_sdk.config.get_ssl_verify(False) is False
        os.environ["GLOBUS_SDK_VERIFY_SSL"] = "on"
        assert globus_sdk.config.get_ssl_verify(True) is True
        assert globus_sdk.config.get_ssl_verify(False) is False


@pytest.mark.parametrize(
    "value, expected_result",
    [(x, 1.0) for x in ["1.0", "1", " 1", "1.0  "]]
    + [(x, 0.0) for x in ["0", "0.0"]]
    + [("", 60.0)]
    + [("-1", None)]  # type: ignore
    + [(x, ValueError) for x in ["invalid", "no", "1.1.", "t", "f"]],  # type: ignore
)
def test_get_http_timeout(value, expected_result):
    """
    Confirms bool cast returns correct bools from sets of string values
    """
    with mock.patch.dict(os.environ):
        os.environ["GLOBUS_SDK_HTTP_TIMEOUT"] = value
        if expected_result is None or isinstance(expected_result, float):
            assert globus_sdk.config.get_http_timeout() == expected_result
        else:
            with pytest.raises(expected_result):
                globus_sdk.config.get_http_timeout()


def test_get_http_timeout_with_explicit_value():
    with mock.patch.dict(os.environ):
        os.environ["GLOBUS_SDK_HTTP_TIMEOUT"] = "120"
        assert globus_sdk.config.get_http_timeout(10) == 10.0
        assert globus_sdk.config.get_http_timeout(0) == 0.0
        del os.environ["GLOBUS_SDK_HTTP_TIMEOUT"]
        assert globus_sdk.config.get_http_timeout(60) == 60.0


def test_get_environment_name():
    with mock.patch.dict(os.environ):
        # set an environment value, ensure that it's returned
        os.environ["GLOBUS_SDK_ENVIRONMENT"] = "beta"
        assert globus_sdk.config.get_environment_name() == "beta"

        # clear that value, "production" should be returned
        del os.environ["GLOBUS_SDK_ENVIRONMENT"]
        assert globus_sdk.config.get_environment_name() == "production"

        # ensure that passing a value returns that value
        assert globus_sdk.config.get_environment_name("beta") == "beta"


def test_env_config_registration():
    with mock.patch.dict(globus_sdk.config.EnvConfig._registry):
        # should be None, we don't have an environment named 'moon'
        assert globus_sdk.config.EnvConfig.get_by_name("moon") is None

        # now, create the moon
        class MoonEnvConfig(globus_sdk.config.EnvConfig):
            envname = "moon"
            domain = "apollo.globus.org"

        # a lookup by "moon" should now get this config object
        assert globus_sdk.config.EnvConfig.get_by_name("moon") is MoonEnvConfig


def test_service_url_overrides():
    with mock.patch.dict(globus_sdk.config.EnvConfig._registry):

        class MarsEnvConfig(globus_sdk.config.EnvConfig):
            envname = "mars"
            domain = "mars.globus.org"
            auth_url = "https://perseverance.mars.globus.org/"

        # this one was customized
        assert (
            MarsEnvConfig.get_service_url("auth")
            == "https://perseverance.mars.globus.org/"
        )
        # but this one was not
        assert (
            MarsEnvConfig.get_service_url("search")
            == "https://search.api.mars.globus.org/"
        )


def test_service_url_from_env_var():
    with mock.patch.dict(os.environ):
        os.environ["GLOBUS_SDK_SERVICE_URL_TRANSFER"] = "https://transfer.example.org/"
        # environment setting gets ignored at this point -- only the override applies
        assert (
            globus_sdk.config.get_service_url("transfer", environment="preview")
            == "https://transfer.example.org/"
        )
        assert (
            globus_sdk.config.get_service_url("transfer", environment="production")
            == "https://transfer.example.org/"
        )
        # also try with a made up service
        os.environ[
            "GLOBUS_SDK_SERVICE_URL_ION_CANNON"
        ] = "https://ion-cannon.example.org/"
        assert (
            globus_sdk.config.get_service_url("ion_cannon", environment="production")
            == "https://ion-cannon.example.org/"
        )

        for env in ["sandbox", "test", "integration"]:
            os.environ["GLOBUS_SDK_ENVIRONMENT"] = env
            assert (
                globus_sdk.config.get_service_url("auth")
                == f"https://auth.{env}.globuscs.info/"
            )
            assert (
                globus_sdk.config.get_webapp_url()
                == f"https://app.{env}.globuscs.info/"
            )
