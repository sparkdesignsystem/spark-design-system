[![Build Status](https://travis-ci.org/sparkdesignsystem/spark-design-system.svg?branch=staging)](https://travis-ci.org/sparkdesignsystem/spark-design-system)

# Spark Design System

Welcome to the Spark Design System, a product of [Quicken Loans](https://github.com/quickenloans).

Spark Design System is where we collect our best solutions for how to design and build unified digital experiences for the Rocket brands.

* [Spark](https://www.npmjs.com/package/@sparkdesignsystem/spark) contains the basic patterns and components that make up
  the visual and interaction design of the Quicken Loans family of
  Fintech products. If your application is expected to look and behave
  like a Quicken Loans application, this package is the starting point.
  When the Spark Sass and JS setup files are imported into an application you will receive code for all of Spark.

## Getting Started

**Spark assumes your project is using [Sass](https://sass-lang.com/) for styling and
also that your project has a JavaScript build step that will transpile ES6+ and polyfill appropriately for browser support.**

### Spark

* Install the npm package.

  `npm install --save-dev @sparkdesignsystem/spark`

* Import the Sass setup file in your Sass build.

  `@import "node_modules/@sparkdesignsystem/spark-styles/spark.scss";`

  This will bring all Spark Sass patterns into your build. The Spark classes
  are namespaced so they don't affect any existing CSS.

* Import the JS setup file in your JS build.

  `import spark from "node_modules/@sparkdesignsystem/spark/spark";`

  This will bring all Spark JS into your build.

## Contribution Guide

### Code Organization

Spark is managed as a monorepo. All of the Spark source code lives in a
single repo, but is released as separate packages.

This repo consists of the design system packages, wrapped in an instance
of [Gatsby](https://www.gatsbyjs.org). Spark uses Gatsby for our main documentation site and
[Storybook](https://storybook.js.org) for our component previews and developer documentation.

In the root there are three directories, `react`, `angular` and `html`. These house the files
that are published to npm.

### Dev Environment

If you want to run a copy of Gatsby locally:

1. Navigate to the root directory of the project.
2. Run `npm install`.
3. Run `npm start`.
4. Open your browser to `http://localhost:8000/`.

If you want to run a copy of Gatsby and Storybook locally:

1. Navigate to the root directory of the project.
2. Run `npm run installall`.
3. Run `npm start` to start Gatsby then open your browser to `http://localhost:8000/`.
4. Run `(cd react/ ; npm run storybook)` to start Storybook for React.
5. Run `(cd angular/ ; npm run storybook)` to start Storybook for Angular.
6. Run `(cd html/ ; npm run storybook)` to start Storybook for HTML.

### Unit Tests

Spark uses the [Jest](https://jestjs.io) test
framework for unit tests. To run unit tests in Spark:

1. Navigate to the framework directory of your choice from the root `cd react`, `cd angular`, or `cd html`.
2. Run `npm install` if you have not already.
3. Run `npm test`.
4. See test output in terminal to determine number of passing or failed tests.

### Code Style Standards

Spark follows specific coding styles for HTML, CSS and
JavaScript to ensure maintainability and scalability.

#### HTML

* Two spaces for indentation.
* For better code readability the attributes of elements should each be on their own line
  when the number of attributes makes that element exceed a line length of 80 characters.

#### CSS

* Two spaces for indentation.
* CSS is written in [Sass](https://sass-lang.com/) and preprocessed into CSS.
* Class Naming Conventions can be found [here](https://sparkdesignsystem.com/docs/class-naming-convention).
* [Stylelint](https://github.com/stylelint/stylelint) is used to lint
  Sass files and all of Spark Sass coding conventions can be found
  in the [Stylelint configuration file ](https://github.com/sparkdesignsystem/spark-design-system/blob/main/.stylelintrc).

#### JS

* Two spaces for indentation.
* Spark JS will use new features from ESNext and assumes applications using Spark
  have a JavaScript compiler setup.
* Spark uses [ESLint](https://eslint.org/) for JS linting.
* ESLint is setup to use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  and Spark JS coding conventions come from there.
* We follow JS recommendations from the [Quicken Loans JS Concord Group](https://github.com/QuickenLoans/js-concord/blob/master/rfc/cgr-0001-style-and-lint.md).
* Data attributes on DOM elements is the chosen method for DOM selection.

#### React and Angular
* For `additionalClasses` properties use the naming convention `elementAdditionalClasses` for other elements that we offer additional classes support on besides the main element.

### Change Workflow

`Coming Soon`

## Credit

[Gatsby](https://www.gatsbyjs.org)
[StorybookJS](https://storybook.js.org)