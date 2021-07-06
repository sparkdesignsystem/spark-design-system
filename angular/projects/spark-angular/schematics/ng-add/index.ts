import {
  addModuleImportToRootModule,
  getAppModulePath,
  getProjectFromWorkspace,
  getProjectIndexFiles,
  getProjectMainFile,
  getProjectStyleFile,
  hasNgModuleImport,
} from '@angular/cdk/schematics';
import {
  chain,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getWorkspace } from '@schematics/angular/utility/config';
import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType,
  removePackageJsonDependency,
} from '@schematics/angular/utility/dependencies';

import { Schema } from './schema';
import { addHtmlClass } from './html-manipulation';

/**
 * Constants
 */
const sparkAngularModuleName = 'SparkAngularModule';
const sparkAngularModuleImport = '@sparkdesignsystem/spark-angular';
const sparkAngularJavaScriptClass = 'sprk-u-JavaScript';
const browserAnimationsModuleName = 'BrowserAnimationsModule';
const browserAnimationsModuleImport = '@angular/platform-browser/animations';
const noopAnimationsModuleName = 'NoopAnimationsModule';

/**
 * Add the spark-angular
 * dependencies to package.json.
 */
const addSparkDependencies = (_options: Schema): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    // Schematics automatically adds to "dependencies" but it should be "devDependencies"
    removePackageJsonDependency(tree, '@sparkdesignsystem/spark-angular');

    const dependencies: NodeDependency[] = [
      {
        name: '@sparkdesignsystem/spark-angular',
        overwrite: true,
        type: NodeDependencyType.Dev,
        version: '^11.0.0',
      },
    ];

    dependencies.forEach((dependency) =>
      addPackageJsonDependency(tree, dependency),
    );

    context.addTask(new NodePackageInstallTask());

    return tree;
  };
};

/**
 * Add the SparkAngularModule to
 * the root module of the specified project.
 */
const addSparkModule = (options: Schema): Rule => {
  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    // @ts-ignore
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(
      tree,
      sparkAngularModuleName,
      sparkAngularModuleImport,
      project,
    );

    return tree;
  };
};

/**
 * Add the BrowserAnimationsModule
 * to the root module of the specified project.
 */
const addAnimationsModule = (options: Schema): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    // @ts-ignore
    const project = getProjectFromWorkspace(workspace, options.project);
    const appModulePath = getAppModulePath(tree, getProjectMainFile(project));

    // In case the project explicitly uses the NoopAnimationsModule, we should print a warning
    // message that makes the user aware of the fact that we won't automatically set up
    // animations. If we would add the BrowserAnimationsModule while the NoopAnimationsModule
    // is already configured, we would cause unexpected behavior and runtime exceptions.
    if (hasNgModuleImport(tree, appModulePath, noopAnimationsModuleName)) {
      context.logger.error(
        `Could not set up "${browserAnimationsModuleName}" ` +
          `because "${noopAnimationsModuleName}" is already imported.`,
      );
      context.logger.info(`Please manually set up browser animations.`);
      return;
    }

    addModuleImportToRootModule(
      tree,
      browserAnimationsModuleName,
      browserAnimationsModuleImport,
      project,
    );

    return tree;
  };
};

/**
 * Add the Spark stylesheet to the
 * project style file.
 */
const addSparkStyles = (options: Schema): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    // @ts-ignore
    const project = getProjectFromWorkspace(workspace, options.project);
    const styleFilePath = getProjectStyleFile(project);
    const logger = context.logger;

    if (!styleFilePath) {
      logger.error(`Could not find the default style file for this project.`);
      logger.info(`Please manually import the Spark stylesheet in your Sass.`);
      return;
    }

    const buffer = tree.read(styleFilePath);

    if (!buffer) {
      logger.error(
        `Could not read the default style file within the project (${styleFilePath})`,
      );
      logger.info(`Please manually import the Spark stylesheet in your Sass.`);
      return;
    }

    const htmlContent = buffer.toString();

    const insertion = `
@import "node_modules/@sparkdesignsystem/spark-styles/spark.scss"
`;

    if (htmlContent.includes(insertion)) {
      return;
    }

    const recorder = tree.beginUpdate(styleFilePath);

    recorder.insertLeft(htmlContent.length, insertion);
    tree.commitUpdate(recorder);

    return tree;
  };
};

/**
 * Add the Spark class to the project HTML tag.
 */
const addSparkClass = (options: Schema): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    // @ts-ignore
    const project = getProjectFromWorkspace(workspace, options.project);
    const projectIndexFiles = getProjectIndexFiles(project);
    const logger = context.logger;

    if (!projectIndexFiles.length) {
      logger.error(`Could not find the index file for this project.`);
      logger.info(
        `Please manually add the "${sparkAngularJavaScriptClass}" class to your HTML tag.`,
      );
      return;
    }

    projectIndexFiles.forEach((indexFilePath) => {
      addHtmlClass(tree, indexFilePath, sparkAngularJavaScriptClass);
    });

    return tree;
  };
};

/**
 * Scaffolds the basics of a Spark Angular application, this includes:
 *  - Adds the spark-angular dependency to package.json
 *  - Adds the SparkAngularModule to the root module of the specified project
 *  - Adds the BrowserAnimationsModule to the root module of the specified project
 *  - Adds the Spark stylesheet to the project style file
 *  - Adds the Spark class to the project html tag
 */
export function ngAdd(options: Schema): Rule {
  return chain([
    addSparkDependencies(options),
    addSparkModule(options),
    addAnimationsModule(options),
    addSparkStyles(options),
    addSparkClass(options),
  ]);
}
