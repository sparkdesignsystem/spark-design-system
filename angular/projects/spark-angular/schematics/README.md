# Spark Schematics

This is where we configure Angular CLI Schematics for Spark Design System.

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
npm link @sparkdesignsystem/spark-design-system
ng add @sparkdesignsystem/spark-design-system
```

At this point, the schematics should run, install the Spark dependencies, and make the necessary code changes automatically.
