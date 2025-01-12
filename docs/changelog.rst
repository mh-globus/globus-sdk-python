.. _changelog:

CHANGELOG
=========

.. _changelog_version3:

See :ref:`versioning` for our versioning policy.

The :ref:`upgrading <upgrading>` doc is a good reference if you are upgrading
to a major new version of the SDK.

.. scriv-insert-here

v3.2.1 (2021-12-13)
-------------------

* Update to avoid deprecation warnings on python 3.10 (:pr:`499`)

v3.2.0 (2021-12-02)
-------------------

* Add ``iter_items`` as a method on ``TransferData`` and ``DeleteData`` (:pr:`488`)

* Add the `resource_server` property to client classes and objects. For example,
  `TransferClient.resource_server` and `GroupsClient().resource_server` are now usable
  to get the resource server string for the relevant services. `resource_server` is
  documented as part of `globus_sdk.BaseClient` and may be `None`. (:pr:`489`)

* Fix type annotations on client methods with paginated variants (:pr:`491`)

* ClientCredentialsAuthorizer now accepts ``Union[str, Iterable[str]]``
  as the type for scopes (:pr:`498`)

* The implementation of several properties of ``GlobusHTTPResponse`` has
  changed (:pr:`497`)

  * Responses have a new property, ``headers``, a case-insensitive
    dict of headers from the response

  * Responses now implement ``http_status`` and ``content_type`` as
    properties without setters

v3.1.0 (2021-10-13)
-------------------

* Add ``filter`` as a supported parameter to ``TransferClient.task_list`` (:pr:`484`)
* The ``filter`` parameter to ``TransferClient.task_list`` and
  ``TransferClient.operation_ls`` can now be passed as a ``Dict[str, str | List[str]]``.
  Documentation on the ``TransferClient`` explains how this will be formatted,
  and is linked from the param docs for ``filter`` on each method (:pr:`484`)
* Adjust package metadata for `cryptography` dependency, specifying
  `cryptography>=3.3.1` and no upper bound. This is meant to help mitigate
  issues in which an older `cryptography` version is installed gets used in
  spite of it being incompatible with `pyjwt[crypto]>=2.0` (:pr:`486`)

v3.0.3 (2021-10-11)
-------------------

* Fix several internal decorators which were destroying type information about
  decorated functions. Type signatures of many methods are therefore corrected (:pr:`485`)

v3.0.2 (2021-09-29)
-------------------

* Update the minimum dependency versions to lower bounds which are verified to
  work with the testsuite (:pr:`482`)
* Produce more debug logging when SDK logs are enabled (:pr:`480`)

v3.0.1 (2021-09-15)
-------------------

* ``ScopeBuilder`` objects now define the type of ``__getattr__`` for ``mypy`` to
  know that dynamic attributes are strings (:pr:`472`)
* Fix remaining ``type: ignore`` usages in globus-sdk (:pr:`473`)
* Fix malformed PEP508 ``python_version`` bound in dev dependencies (:pr:`474`)

v3.0.0 (2021-09-14)
-------------------

* Add ``filter_is_error`` parameter to advanced task list (:pr:`467`)
* Add a ``LocalGlobusConnectPersonal.get_owner_info()`` for looking up local
  user information from gridmap (:pr:`466`)
* Add support for GCS collection create and update. This includes new data
  helpers, ``MappedCollectionDcoument`` and ``GuestCollectionDocument`` (:pr:`468`)
* Remove support for ``bytes`` values for fields consuming UUIDs (:pr:`471`)
* Add support for specifying ``config_dir`` to ``LocalGlobusConnectPersonal`` (:pr:`470`)

v3.0.0b4 (2021-09-01)
---------------------

* Minor fix to wheel builds: do not declare wheels as universal (:pr:`444`)
* Add a new ``GCSClient`` class for interacting with GCS Manager APIs
  (:pr:`447`)
* Rename ``GCSScopeBuilder`` to ``GCSCollectionScopeBuilder`` and add
  ``GCSEndpointScopeBuilder``. The ``GCSClient`` includes helpers for
  instantiating these scope builders (:pr:`448`)
* ``GCSClient`` supports ``get_collection`` and ``delete_collection``.
  ``get_collection`` uses a new ``UnpackingGCSResponse`` response type (:pr:`451`,
  :pr:`464`)
* Remove ``BaseClient.qjoin_path`` (:pr:`452`)
* The ``additional_params`` parameter to ``AuthClient.oauth2_get_authorize_url``
  has been renamed to ``query_params`` for consistency with other methods (:pr:`453`)
* Enforce keyword-only arguments for most SDK-provied APIs (:pr:`453`)
* Fix annotations for ``server_id`` on ``TransferClient`` methods (:pr:`455`)
* Add ``delete_destination_extra`` param to ``TransferData`` (:pr:`456`)
* Ensure all ``TransferClient`` method parameters are documented (:pr:`449`,
  :pr:`454`, :pr:`457`, :pr:`458`, :pr:`459`, :pr:`461`, :pr:`462`)
* ``TransferClient.endpoint_manager_task_list`` now takes filters as named
  keyword arguments, not only in ``query_params`` (:pr:`460`)
* Fix ``visibility`` typo in ``GroupsClient`` (:pr:`463`)
* All type annotations for ``Sequence`` which could be relaxed to ``Iterable``
  have been updated (:pr:`465`)

v3.0.0b3 (2021-08-13)
---------------------

* Flesh out the ``GroupsClient`` and add helpers for interacting with the
  Globus Groups service, including enumerated constants, payload builders, and
  a high-level client for doing non-batch operations called the
  ``GroupsManager`` (:pr:`435`, :pr:`443`)
* globus-sdk now provides much more complete type annotations coverage,
  allowing type checkers like ``mypy`` to catch a much wider range of usage
  errors (:pr:`442`)

v3.0.0b2 (2021-07-16)
---------------------

* Add scope constants and scope construction helpers. See new documentation on
  :ref:`scopes and ScopeBuilders <scopes>` for details (:pr:`437`, :pr:`440`)
* Improve the rendering of API exceptions in stack traces to include the
  method, URI, and authorization scheme (if recognized) (:pr:`439`)
* Payload helper objects (``TransferData``, ``DeleteData``, and ``SearchQuery``)
  now inherit from a custom object, not ``dict``, but they are still dict-like in
  behavior (:pr:`438`)
* API Errors now have an attached ``info`` object with parsed error data where
  applicable. See the :ref:`ErrorInfo documentation <error_info>` for details
  (:pr:`441`)

v3.0.0b1 (2021-07-02)
---------------------

* Add support for ``TransferClient.get_shared_endpoint_list`` (:pr:`434`)
* Passthrough parameters to SDK methods for query params and body params are no
  longer accepted as extra keyword arguments. Instead, they must be passed
  explicitly in a ``query_params``, ``body_params``, or ``additional_fields``
  dictionary, depending on the context (:pr:`433`)
* The interface for retry parameters has been simplified. ``RetryPolicy``
  objects have been merged into the transport object, and retry parameters like
  ``max_retries`` may now be supplied directly as ``transport_params``
  (:pr:`430`)

v3.0.0a4 (2021-06-28)
---------------------

* Fix several paginators which were broken in ``3.0.0a3`` (:pr:`431`)
* Add ``BaseClient`` to the top-level exports of ``globus_sdk``, so it can now
  be accessed under the name ``globus_sdk.BaseClient``
* Autodocumentation of paginated methods (:pr:`432`)

v3.0.0a3 (2021-06-25)
---------------------

* Pagination has changed significantly. (:pr:`418`)

** Methods which support pagination like ``TransferClient.endpoint_search`` no
   longer return an iterable ``PaginatedResource`` type. Instead, these client
   methods return ``GlobusHTTPResponse`` objects with a single page of results.

** Paginated variants of these methods are available by renaming a call from
   ``client.<method>`` to ``client.paginated.<method>``. So, for example, a
   ``TransferClient`` now supports ``client.paginated.endpoint_search()``.
   The arguments to this function are the same as the original method.

** ``client.paginated.<method>`` calls return ``Paginator`` objects, which
   support two types of iteration: by ``pages()`` and by ``items()``. To
   replicate the same behavior as SDK v1.x and v2.x ``PaginatedResource``
   types, use ``items()``, as in
   ``client.paginated.endpoint_search("query").items()``

v3.0.0a2 (2021-06-10)
---------------------

* Refactor response classes (:pr:`425`)
* A new subpackage is available for public use,
  ``globus_sdk.tokenstorage`` (:pr:`405`)
* Add client for Globus Groups API, ``globus_sdk.GroupsClient``. Includes a
  dedicated error class, ``globus_sdk.GroupsAPIError``

v3.0.0a1 (2021-06-04)
---------------------

* Update documentation site style and layout (:pr:`423`)
* The interface for ``GlobusAuthorizer`` now defines
  ``get_authorization_header`` instead of ``set_authorization_header``, and
  additional keyword arguments are not allowed (:pr:`422`)
* New Transport layer handles HTTP details, variable payload
  encodings, and automatic request retries (:pr:`417`)
* Instead of ``json_body=...`` and ``text_body=...``, use ``data=...``
  combined with ``encoding="json"``, ``encoding="form"``, or
  ``encoding="text"`` to format payload data. ``encoding="json"`` is the
  default when ``data`` is a dict.
* By default, requests are retried automatically on potentially transient
  error codes (e.g. ``http_status=500``) and network errors with exponential
  backoff
* ``globus_sdk.BaseClient`` and its subclasses define ``retry_policy``
  and ``transport_class`` class attributes which can be used to customize the
  retry behavior used
* ``globus-sdk`` now provides PEP561 typing data (:pr:`420`)
* The JWT dependency has been updated to ``pyjwt>=2,<3`` (:pr:`416`)
* The config files in ``~/.globus.cfg`` and ``/etc/globus.cfg`` are no longer
  used. Configuration can now be done via environment variables (:pr:`409`)
* ``BaseClient.app_name`` is a property with a custom setter, replacing
  ``set_app_name`` (:pr:`415`)
* ``OAuthTokenResponse.decode_id_token`` can now be provided a JWK and openid
  configuration as parameters. ``AuthClient`` implements methods for fetching
  these data, so that they can be fetched and stored outside of this call.
  There is no automatic caching of these data. (:pr:`403`)
* Remove ``allowed_authorizer_types`` restriction from ``BaseClient`` (:pr:`407`)
* Remove ``auth_client=...`` parameter to
  ``OAuthTokenResponse.decode_id_token`` (:pr:`400`)

.. _changelog_version2:

v2.0.1 (2021-02-02)
-------------------

* Remove support for python2 (:pr:`396`, :pr:`397`, :pr:`398`)

.. note:: globus-sdk version 2.0.0 was yanked due to a release issue.
          Version 2.0.1 is the first 2.x version.

v1.11.0 (2021-01-29)
--------------------

* Add support for task skipped errors via
  ``TransferClient.task_skipped_errors`` and
  ``TransferClient.endpoint_manager_task_skipped_errors`` (:pr:`393`)
* Internal maintenance (:pr:`389`, :pr:`390`, :pr:`391`, :pr:`392`)

v1.10.0 (2020-12-18)
--------------------

* Add support for pyinstaller installation of globus-sdk (:pr:`387`)

v1.9.1 (2020-08-27)
-------------------

* Fix ``GlobusHTTPResponse`` to handle responses with no ``Content-Type`` header (:pr:`375`)

v1.9.0 (2020-03-05)
-------------------

* Add ``globus_sdk.IdentityMap``, a mapping-like object for Auth ID lookups (:pr:`367`)
* Minor documentation and build improvements (:pr:`369`, :pr:`362`)
* Don't append trailing slashes when no path is given to a low-level client method like ``get()`` (:pr:`364`)
* Add ``external_checksum`` and ``checksum_algorithm`` to ``TransferData.add_item()`` named arguments (:pr:`365`)

v1.8.0 (2019-07-11)
-------------------

* Add a property to paginated results which shows if more results are available (:pr:`346`)
* Update docs to state that Globus SDK uses semver (:pr:`357`)
* Fix ``RefreshTokenAuthorizer`` to handle a new ``refresh_token`` being sent back by Auth (:pr:`359`)
* Fix typo in endpoint_search log message (:pr:`355`)
* Fix Globus Web App activation links in docs (:pr:`356`)

v1.7.1 (2019-02-21)
-------------------

* Allow arbitrary keyword args to ``TransferData.add_item()`` and ``DeleteData.add_item()``, which passthrough to the item bodies (:pr:`339`)
* Minor internal improvements (:pr:`342`, :pr:`343`)

v1.7.0 (2018-12-18)
-------------------

* Add ``get_task`` and ``get_task_list`` to ``SearchClient`` (:pr:`335`, :pr:`336`)
* Internal maintenance and testing improvements (:pr:`331`, :pr:`334`, :pr:`333`)

v1.6.1 (2018-10-30)
-------------------

* Replace egg distribution format with wheels (:pr:`314`)
* Internal maintenance

v1.6.0 (2018-08-29)
-------------------

* Correct handling of environment="production" as an argument to client construction (:pr:`307`)
* RenewingAuthorizer and its subclasses now expose the check_expiration_time method (:pr:`309`)
* Allow parameters to be passed to customize the request body of ConfidentialAppAuthClient.oauth2_get_dependent_tokens (:pr:`308`)
* Use sha256 hashes of tokens (instead of last 5 chars) in debug logging (:pr:`305`)
* Add the patch() method to BaseClient and its subclasses, sending an HTTP PATCH request (:pr:`302`)
* Officially add support for python 3.7 (:pr:`300`)
* Make pickling SDK objects safer (but still not officially supported!) (:pr:`284`)
* Malformed SDK usage may now raise GlobusSDKUsageError instead of ValueError. GlobusSDKUsageError inherits from ValueError (:pr:`281`)
* Numerous documentation improvements (:pr:`279`, :pr:`294`, :pr:`296`, :pr:`297`)

v1.5.0 (2018-02-09)
-------------------

* Add support for retrieving a local Globus Connect Personal endpoint's UUID (:pr:`276`)
* Fix bug in search client parameter handling (:pr:`274`)

v1.4.1 (2017-12-20)
-------------------

* Send ``Content-Type: application/json`` on requests with JSON request bodies (:pr:`266`)
* Support connection timeouts. Default timeout of 60 seconds (:pr:`264`)

v1.4.0 (2017-12-13)
-------------------

* Access token response data by way of scope name (:pr:`261`)
* Make ``cryptography`` a strict requirement, globus-sdk[jwt] is no longer necessary (:pr:`257`, :pr:`260`)
* Simplify OAuthTokenResponse.decode_id_token to not require the client as an argument (:pr:`255`)
* Add (beta) SearchClient class (:pr:`259`)

v1.3.0 (2017-11-20)
-------------------

* Improve error message when installation onto python2.6 is attempted (:pr:`245`)
* Raise errors on client instantiation when ``GLOBUS_SDK_ENVIRONMENT`` appears to be invalid, support ``GLOBUS_SDK_ENVIRONMENT=preview`` (:pr:`247`)

v1.2.2 (2017-11-01)
-------------------

* Allow client classes to accept ``base_url`` as an argument to ``_init__()`` (:pr:`241`)
* Fix packaging to not include testsuite (:pr:`232`)
* Improve docs on ``TransferClient`` helper classes (:pr:`231`, :pr:`233`)

v1.2.1 (2017-09-29)
-------------------

* Use PyJWT instead of python-jose for JWT support (:pr:`227`)

v1.2.0 (2017-08-18)
-------------------

* Add Transfer symlink support (:pr:`218`)
* Better handle UTF-8 inputs (:pr:`208`)
* Fix endpoint manager resume (:pr:`224`)
* Doc Updates & Minor Improvements

v1.1.1 (2017-05-19)
-------------------

* Use correct paging style when making ``endpoint_manager_task_list`` calls (:pr:`210`)

v1.1.0 (2017-05-01)
-------------------

* Add endpoint_manager methods to TransferClient (:pr:`191`, :pr:`199`, :pr:`200`, :pr:`201`, :pr:`203`)
* Change "identities_set" to "identity_set" for token introspection (:pr:`163`)
* Fix docs references to ``oauth2_start_flow_*`` (:pr:`190`)
* Support iterable requested_scopes everywhere (:pr:`185`)
* Add python 3.6 to supported platforms (:pr:`180`)
* Remove "Beta" from docs (:pr:`179`)
* Update dev status classifier to 5, prod (:pr:`178`)
* Numerous improvements to testsuite

v1.0.0 (2017-04-10)
-------------------

* Adds ``AuthAPIError`` with more flexible error payload handling (:pr:`175`)

v0.7.2 (2017-04-05)
-------------------

* Add ``AuthClient.validate_token`` (:pr:`172`)
* Bugfix for ``on_refresh`` users of ``RefreshTokenAuthorizer`` and ``ClientCredentialsAuthorizer`` (:pr:`173`)

v0.7.1 (2017-04-03)
-------------------

* Remove deprecated ``oauth2_start_flow_*`` methods (:pr:`170`)
* Add the ``ClientCredentialsAuthorizer`` (:pr:`164`)
* Add ``jwt`` extra install target. ``pip install "globus_sdk[jwt]"`` installs ``python-jose`` (:pr:`169`)

v0.7.0 (2017-03-30)
-------------------

* Make ``OAuthTokenResponse.decode_id_token()`` respect ``ssl_verify=no`` configuration (:pr:`161`)
* Remove all properties of ``OAuthTokenResponse`` other than ``by_resource_server`` (:pr:`162`)

v0.6.0 (2017-03-21)
-------------------

* Opt out of the Globus Auth behavior where a ``GET`` of an identity username will provision that identity (:pr:`145`)
* Fixup OAuth2 PKCE to be spec-compliant (:pr:`154`)
* Wrap some ``requests`` network-related errors in custom exceptions (:pr:`155`)
* Add ``deadline`` support to ``TransferData`` and ``DeleteData`` (:pr:`159`)

v0.5.1 (2017-02-25)
-------------------

* Add support for the ``prefill_named_grant`` option to the Native App authorization flow (:pr:`143`)
* Unicode string improvements (:pr:`129`)
* Better handle unexpected error payloads (:pr:`135`)
