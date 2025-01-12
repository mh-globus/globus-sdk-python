.. _authorization:

API Authorization
=================

Authorizing calls against Globus can be a complex process.
In particular, if you are using Refresh Tokens and short-lived Access Tokens,
you may need to take particular care managing your Authorization state.

Within the SDK, we solve this problem by using :class:`GlobusAuthorizers
<globus_sdk.authorizers.base.GlobusAuthorizer>`, which are attached to clients.
These are a very simple class of generic objects which define a way of getting
an up-to-date ``Authorization`` header, and trying to handle a 401 (if that
header is expired).

Whenever using the :ref:`Service Clients <services>`, you should be passing in an
authorizer when you create a new client unless otherwise specified.

The type of authorizer you will use depends very much on your application, but
if you want examples you should look at the :ref:`examples section
<examples-authorization>`.
It may help to start with the examples and come back to the full documentation
afterwards.

The Authorizer Interface
------------------------

We define the interface for ``GlobusAuthorizer`` objects in terms of an
Abstract Base Class:

.. autoclass:: globus_sdk.authorizers.GlobusAuthorizer
    :members:
    :member-order: bysource

``GlobusAuthorizer`` objects that fetch new access tokens when their existing
ones expire or a 401 is received implement the RenewingAuthorizer class

.. autoclass:: globus_sdk.authorizers.RenewingAuthorizer
    :members: get_authorization_header, handle_missing_authorization
    :member-order: bysource
    :show-inheritance:

``GlobusAuthorizer`` objects which have a static authorization header are all
implemented using the static authorizer class:

.. autoclass:: globus_sdk.authorizers.StaticGlobusAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:

Authorizer Types
----------------

All of these types of authorizers can be imported from
``globus_sdk.authorizers``.

.. autoclass:: globus_sdk.NullAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:

.. autoclass:: globus_sdk.BasicAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:

.. autoclass:: globus_sdk.AccessTokenAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:

.. autoclass:: globus_sdk.RefreshTokenAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:

.. autoclass:: globus_sdk.ClientCredentialsAuthorizer
    :members:
    :member-order: bysource
    :show-inheritance:
