# Serverless TODO

## Functionality of the application

This application will allow creating/removing/updating/fetching TODO items. Each TODO item can optionally have an attachment image. Each user only has access to TODO items that he/she has created.

![udacity-udagram-image-filter](https://img.shields.io/badge/build--1.0.0-udacity--serverless--todo-green)

### Additional features

* `jwks-rsa` library **[JWKS-RSA](https://www.npmjs.com/package/jwks-rsa)** 🔥 was used to retrieve signing keys from a JWKS(JSON Web Key Set) endpoint
* `serverless-express` library **[SERVERLESS-EXPRESS](https://www.npmjs.com/package/@vendia/serverless-express)** ✨ was used  instead of `middy` in order to simplify development process and use node.js express endpoints 