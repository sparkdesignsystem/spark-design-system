# WARNING

### Spark is currently in `alpha`. It is subject to changes of all sizes at any time and not suitable for production use. Please reach out to the [Spark team](mailto:sparkdesignsystem@quickenloans.com) for guidance.

# Spark Design System

Welcome to the Spark Design System, a product of [Quicken Loans](https://github.com/quickenloans).

Spark Design System is a collection of patterns used to create the user
interface of Quicken Loans and Fintech products.

Spark's patterns are separated into two groups:

* Spark-core

  Core consists of all basic patterns, the adoption of which will make the interface
  of your application feel like a Quicken Loans, Fintech family of companies
  app. Patterns in core have been identified as necessary to most if
  not all applications.

* Spark-extras

  Extras patterns are things that are not needed on all applications, but when they
  are needed, its desirable to be consistant.

## Getting Started

**Spark assumes your project is using [Sass](https://sass-lang.com/) for styling and
also that your project has a Javascript build step that will transpile and polyfill appropriately
for browser support.**

### Spark Core

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-core`

* Import the setup file in your sass build

  `@import node_modules/@sparkdesignsystem/spark';`

  This will bring all spark-core patterns into your build. The spark classes
  are namespaced and should not affect any existing css.

### Spark Extras

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-extras`

* Import any of the spark extras patterns that you need

  `@import node_modules/@sparkdesignsystem/spark-extras/<pattern-name>/<pattern-name>';`

  The available patterns as of the current release are:

  * description-table
  * highlight-board

## Contribution Guide

### Code Organization

Spark is managed as a monorepo. All of the Spark source code lives in a
single repo, but is released as separate packages using
[Lerna](https://github.com/lerna/lerna).

This repo consists of the design system packages, wrapped in an instance
of [Drizzle](https://github.com/cloudfour/drizzle), a tool built
by [cloudfour](https://github.com/cloudfour), for displaying pattern
libraries. Spark uses Drizzle for documentation and plain html code examples.

In the packages folder are spark-core and spark-extras. These are the files
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
