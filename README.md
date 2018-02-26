# WARNING

### Spark is currently in `alpha`. It is subject to changes of all sizes at any time and not suitable for production use. Please reach out to the [Spark team](mailto:sparkdesignsystem@quickenloans.com) for guidance.

# Spark Design System

Welcome to the Spark Design System, a product of [Quicken Loans](https://github.com/quickenloans).

Spark Design System is a system of patterns and components used to
create the user interface for the Quicken Loans family of Fintech
products.

Spark's patterns are separated into two groups:

* [Spark-Core](https://www.npmjs.com/package/@sparkdesignsystem/spark-core) contains the basic patterns and components that make up
  the visual and interaction design of the Quicken Loans family of
  Fintech products. If your application is expected to look and behave
  like a Quicken Loans application, this package is the starting point.

* [Spark-Extras](https://www.npmjs.com/package/@sparkdesignsystem/spark-extras) are components that may not be needed by all
  applications, but are consistent with the style of Spark-Core.

## Getting Started

**Spark assumes your project is using [Sass](https://sass-lang.com/) for styling and
also that your project has a Javascript build step that will transpile and polyfill appropriately
for browser support.**

### Spark Core

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-core`

* Import the setup file in your Sass build

  `@import "node_modules/@sparkdesignsystem/spark-core";`

  This will bring all Spark-Core patterns into your build. The Spark classes
  are namespaced so they don't affect any existing CSS.

### Spark Extras

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-extras`

* Import any of the Spark-Extras patterns that you need

  `@import "node_modules/@sparkdesignsystem/spark-extras/<pattern-name>/<pattern-name>";`

## Contribution Guide

### Code Organization

Spark is managed as a monorepo. All of the Spark source code lives in a
single repo, but is released as separate packages using
[Lerna](https://github.com/lerna/lerna).

This repo consists of the design system packages, wrapped in an instance
of [Drizzle](https://github.com/cloudfour/drizzle), a tool built
by [cloudfour](https://github.com/cloudfour), for displaying pattern
libraries. Spark uses Drizzle for documentation and plain html code examples.

In the packages folder are Spark-Core and Spark-Extras. These are the files
that are published to npm.

### Dev Environment

If you want to run a copy of Drizzle locally:

1. Run `npm install`
2. Run `gulp --dev`
3. Open your browser to `http://localhost:3000/`

### Code Style

`Coming Soon`

### Change Workflow

`Coming Soon`

## Credit

[Drizzle](https://github.com/cloudfour/drizzle)
[Drizzle Documentation](docs)
