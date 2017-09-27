# Spark Design System

Welcome to the Spark Design System, a product of [Quicken Loans](https://github.com/quickenloans).

Spark is used to build the user interfaces for Quicken Loans Fintech products.

## Using Spark
Spark is currently in `alpha`. It is subject to changes of all sizes at any time and not suitable for production use. Please reach out to the [Spark team](mailto:sparkdesignsystem@quickenloans.com) for guidance.

### Feeling dangerous?
Spark consists of 2 main packages which can be installed like so:

* `npm install --save-dev @sparkdesignsystem/spark-core`
  * Spark Core is the main package for the Spark Design System. This package contains the style and components that make up the basic interfaces for Quicken Loans Fintech products.
* `npm install --save-dev @sparkdesignsystem/spark-extras`
  * Spark Extras is a supplementary package that adds additional components that are not part of Spark Core. Many sites will use these components, but they aren't necessary for every Quicken Loans Fintech product.

## Monorepo

Spark is managed as a monorepo. All of the Spark source code lives in a single repo, but is released as separate packages using [Lerna](https://github.com/lerna/lerna).

## Getting Started
More information on contributing to Spark will be available in the future. For now, if you want to get Spark running locally, follow these steps:
1. Run `npm install`
1. Run `gulp --dev`
1. Open your browser to `http://localhost:3000/`

## Credit
Spark Design System uses [Drizzle](https://github.com/cloudfour/drizzle) as an authoring environment. Drizzle is an open source project from [Cloudfour](https://github.com/cloudfour) and is licensed under MIT.

[Drizzle Documentation](docs)
