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
  When the Spark-Core Sass and JS setup files are imported into an application you will receive code for all of Spark-Core.

* [Spark-Extras](https://www.npmjs.com/package/@sparkdesignsystem/spark-extras) are components that may not be needed by all
  applications, but are consistent with the style of Spark-Core.
  Spark-Extras Sass and JS are imported into an application on an individual basis. You import the components that you need.



## Getting Started

**Spark assumes your project is using [Sass](https://sass-lang.com/) for styling and
also that your project has a Javascript build step that will transpile ES6+ and polyfill appropriately for browser support.**

### Spark Core

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-core`

* Import the Sass setup file in your Sass build

  `@import "node_modules/@sparkdesignsystem/spark-core/spark-core";`

  This will bring all Spark-Core Sass patterns into your build. The Spark classes
  are namespaced so they don't affect any existing CSS.

* Import the JS setup file in your JS build

  `import sparkCore from "node_modules/@sparkdesignsystem/spark-core/spark-core";`

  This will bring all Spark-Core JS into your build.

### Spark Extras

* Install the npm package

  `npm install --save-dev @sparkdesignsystem/spark-extras`

* Import any of the Spark-Extras Sass patterns that you need

  `@import "node_modules/@sparkdesignsystem/spark-extras/components/<pattern-name>/<pattern-name>";`

* Import any of the Spark-Extras JS patterns that you need

  `import <pattern-name> from "node_modules/@sparkdesignsystem/spark-extras/components/<pattern-name>/<pattern-name>";`
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

### Unit Tests

Spark uses the [Mocha](http://https://mochajs.org/.chaijs.com/) test
framework with the [Chai](http://www.chaijs.com/) assertion library
for unit tests. To run unit tests in Spark:

1. Navigate to the root of the Spark-Core or Spark-Extras repository
2. Run `npm install` if you have not already
3. Run `npm test`
4. See test output in terminal to determine number of passing or failed tests

### Code Style Standards

Spark follows specific coding styles for HTML, CSS and
JavaScript to ensure maintainability and scalability.
To successfully make a commit in this repo the code
must pass the pre-commit hooks that will run
automatically on commit. The pre-commit hooks run
[ESLint](https://eslint.org/), [Stylelint](https://github.com/stylelint/stylelint)
and an additional code formatter, [prettier](https://github.com/prettier/prettier).

#### HTML
* Two spaces for indentation
* For readability purposes, if an element has a multitude of attributes
  that exceed the line length of 80 characters the attributes should each be on a new line,
  ex.
```
  <input
    class="sprk-b-TextInput sprk-u-pll sprk-u-Size-100"
    id="datepicker-normal"
    type="text"
    placeholder="MM/DD/YYYY"
    aria-describedby="datepicker-normal--error-container">
```

#### CSS
* Two spaces for indentation
* CSS is written in [Sass](https://sass-lang.com/) and preprocessed into CSS
* Class Naming Conventions can be found [here](https://sparkdesignsystem.com/docs/class-naming-convention)
* [Stylelint](https://github.com/stylelint/stylelint) is used to lint
  Sass files and all of Spark Sass coding conventions can be found
  in the [Stylelint configuration file ](https://github.com/sparkdesignsystem/spark-design-system/blob/master/.stylelintrc)

#### JS
* Two spaces for indentation
* Spark JS will use new features from ESNext and assumes applications using Spark
  have a JavaScript compiler setup
* Spark uses [ESLint](https://eslint.org/) for JS linting
* ESLint is setup to use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  and Spark JS coding conventions come from there
* We follow JS recommendations from the [Quicken Loans JS Concord Group](https://github.com/QuickenLoans/js-concord/blob/master/rfc/cgr-0001-style-and-lint.md)
* Data attributes on DOM elements is the chosen method for DOM manipulation, ex. `data-sprk-component="item"`

### Change Workflow

`Coming Soon`

## Credit

[Drizzle](https://github.com/cloudfour/drizzle)
[Drizzle Documentation](docs)
