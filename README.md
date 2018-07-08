# Backend for my professional website

[![Build Status](https://travis-ci.org/markoandersson/marko.andersson-backend.svg?branch=master)](https://travis-ci.org/markoandersson/marko.andersson-backend)

Backend build with Serverless-framework using AWS Lambda to serve api for the [front-end project](https://github.com/markoandersson/marko.andersson-frontend)

## Tech stack

- [Serverless-framework](https://serverless.com/) - For easier AWS Lambda deployment
- [AWS Lambda](https://aws.amazon.com/lambda) - Serverless cloud functions
- [Travis CI](https://travis-ci.org/) - Continuous integration and deployment

## Local development

Install serverless framework

```bash
npm install -g serverless
```

Install NPM dependencies

```bash
npm install
```

Start development server

```bash
serverless offline start
```

## Deploy to production

All commits that are merged to `master`-branch will be automatically deployed to production if all tests pass.
