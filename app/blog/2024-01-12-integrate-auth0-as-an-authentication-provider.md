---
show: true
date: 2024-01-14
image: cmf8p67pl3gc739vqpa0
title: "Integrate Auth0 as an Authentication provider"
summary: "This guide will cover using Auth0 as the authentication provider for single-page web applications using SurrealDB as the only backend."
---
by Gerard Guillemas, 5 min read

This guide will cover using [Auth0](https://auth0.com/) as the authentication provider for single-page web applications using SurrealDB as the only backend. In this guide you will learn the following:

- How to configure Auth0 to issue tokens that can be used with SurrealDB.
- How to configure SurrealDB to accept tokens issued by Auth0.
- How to define user-level authorization using SurrealDB scopes.
- How to authenticate users with Auth0 in a single-page application.
- How to retrieve and update information from SurrealDB using the authenticated user.

This guide will cover the most general case, in which SurrealDB is the only backend for your application. You can still follow this guide even if you have additional backends, but in that case you may have other options available to request and validate tokens issued by Auth0. Likewise, even if your application is not strictly a  Single-Page Application (SPA), you may still follow and benefit from this guide.

[Click here to read the guide. Happy reading](https://surrealdb.com/docs/surrealdb/how-to/integrate-auth0-as-authentication-provider/)!
