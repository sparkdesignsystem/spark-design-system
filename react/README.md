[![Build Status](https://travis-ci.org/sparkdesignsystem/spark-design-system.svg?branch=staging)](https://travis-ci.org/sparkdesignsystem/spark-design-system)

# Spark Design System React

Welcome to the Spark Design System React, a product of [Quicken Loans](https://github.com/quickenloans).

Spark Design System is where we collect our best solutions for how to design and build unified digital experiences for the Rocket brands.

* [Spark](https://www.npmjs.com/package/@sparkdesignsystem/spark) contains the basic patterns and components that make up
  the visual and interaction design of the Quicken Loans family of
  Fintech products. If your application is expected to look and behave
  like a Quicken Loans application, this package is the starting point.
  When the Spark Sass and JS setup files are imported into an application you will receive code for all of Spark.

## Getting Started

**Spark assumes your project is using [Sass](https://sass-lang.com/) for styling. If you don't use Sass in your project you should follow the steps [below](#installing-sass).**

### Spark React

* Install the npm package.

  `npm install --save-dev @sparkdesignsystem/spark-react`

* Import the Spark Sass file into the main Sass file (e.g., `App.scss`).


  `@import '../node_modules/@sparkdesignsystem/spark-styles/spark.scss';`

  When you build and run your website, all the Spark CSS will now be bundled into your output. You can verify this by inspecting your site’s DOM and looking for the Spark CSS. There should be a `<style>` tag in the `<head>` of your page that includes Spark’s styles.
  The Spark classes
  are namespaced so they don't affect any existing CSS.

* Now you have Spark react installed and you can import tree-shaked components like Spark Button:

  `import { SprkButton } from '@sparkdesignsystem/spark-react';`

  You can find code for all Spark components at [react.sparkdesignsystem.com](https://react.sparkdesignsystem.com).

### Installing Sass

* Install the Sass npm package.

  `npm install --save-dev node-sass`

* In `App.js` import your main Sass file that you will create.


  `import './App.scss'`

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

1. Run `npm install`.
2. Run `npm start`.
3. Open your browser to `http://localhost:8000/`.

### Unit Tests

Spark uses the [Jest](https://jestjs.io) test
framework for unit tests. To run unit tests in Spark:

1. Navigate to the react directory from the root with `cd react`.
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
