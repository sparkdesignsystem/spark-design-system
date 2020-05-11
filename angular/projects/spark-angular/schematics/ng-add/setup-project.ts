import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import {
  addBodyClass,
  addModuleImportToRootModule,
  getAppModulePath,
  getProjectFromWorkspace,
  getProjectIndexFiles,
  getProjectMainFile,
  getProjectStyleFile,
  hasNgModuleImport,
} from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

import { Schema } from './schema';

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
 * Scaffolds the basics of a Spark Angular application, this includes:
 *  - Adds Spark Module to app.module
 *  - Adds Browser Animation to app.module
 *  - Adds styles to styles.ext
 *  - Adds spark JS class to index.html
 */
export default function(options: Schema): Rule {
  return chain([
    addSparkModule(options),
    addAnimationsModule(options),
    addSparkStyles(options),
    addSparkClass(options),
  ]);
}

/**
 * Adds the SparkAngularModule to the root module of the specified project.
 */
function addSparkModule(options: Schema) {
  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(tree, sparkAngularModuleName, sparkAngularModuleImport, project);

    return tree;
  };
}

/**
 * Adds the BrowserAnimationsModule to the root module of the specified project.
 */
function addAnimationsModule(options: Schema) {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
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

    addModuleImportToRootModule(tree, browserAnimationsModuleName, browserAnimationsModuleImport, project);

    return tree;
  };
}

/**
 * Adds the Spark stylesheets to the project style file.
 */
function addSparkStyles(options: Schema) {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace, options.project);
    const styleFilePath = getProjectStyleFile(project);
    const logger = context.logger;

    if (!styleFilePath) {
      logger.error(`Could not find the default style file for this project.`);
      logger.info(`Please manually import the Spark stylesheet in your CSS.`);
      return;
    }

    const buffer = tree.read(styleFilePath);

    if (!buffer) {
      logger.error(`Could not read the default style file within the project (${styleFilePath})`);
      logger.info(`Please manually import the Spark stylesheet in your CSS.`);
      return;
    }

    const htmlContent = buffer.toString();

    const insertion = `
@import "node_modules/@sparkdesignsystem/spark/spark.scss"
`;

    if (htmlContent.includes(insertion)) {
      return;
    }

    const recorder = tree.beginUpdate(styleFilePath);

    recorder.insertLeft(htmlContent.length, insertion);
    tree.commitUpdate(recorder);

    return tree;
  };
}

/**
 * Adds the Spark class to the project body tag.
 */
function addSparkClass(options: Schema) {
  return (tree: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace, options.project);
    const projectIndexFiles = getProjectIndexFiles(project);
    const logger = context.logger;

    if (!projectIndexFiles.length) {
      logger.error(`Could not find the index file for this project.`);
      logger.info(`Please manually add the "${sparkAngularJavaScriptClass}" class to your HTML tag.`);
      return;
    }

    projectIndexFiles.forEach((indexFilePath) => {
      // This should go on <html> but it is easier for now to just use body
      addBodyClass(tree, indexFilePath, sparkAngularJavaScriptClass);
    });

    return tree;
  };
}
