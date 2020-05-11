# Spark Schematics

This is where we configure Angular CLI Schematics for Spark Design System.

## Utilize Schematics

Schematics are a feature of the Angular CLI. First, you should already have the CLI installed globally:

```shell
npm install -g @angular/cli
```

Then you can install Spark using the schematics:

```shell
ng add @sparkdesignsystem/spark-angular
```

This single command will:

- Install `@sparkdesignsystem/spark-angular` as a dev dependency.
- Install `@sparkdesignsystem/spark` as a dev dependency.
- Import the `SparkAngularModule` into your root module.
- Import the `BrowserAnimationsModule` into your root module.
- Import the Spark stylesheet in your styles file.
- Add the `sprk-u-JavaScript` class in your index file.

## Local Testing

Start by doing a normal build from the `angular` folder:

```shell
cd angular
npm run build
```

Next, do a build from the `spark-angular` folder:

```shell
cd projects/spark-angular
npm run build
```

Next, do an npm link from the dist output:

```shell
cd ../../
npm link dist/spark-angular
```

Finally, go into an Angular project where you want to test the schematics:

```shell
npm link @sparkdesignsystem/spark-angular
ng add @sparkdesignsystem/spark-angular
```

At this point, the schematics should run, install the Spark dependencies, and make the necessary code changes automatically.
