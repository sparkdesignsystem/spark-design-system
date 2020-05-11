import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';

import {
  addPackageJsonDependency,
  NodeDependency,
  NodeDependencyType,
  removePackageJsonDependency,
} from '@schematics/angular/utility/dependencies';

export function ngAdd(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // Schematics automatically adds to "dependencies" but it should be "devDependencies"
    removePackageJsonDependency(tree, '@sparkdesignsystem/spark-angular');
    addDependencies(tree);

    // Since the Spark schematics depend on the schematic utility functions from the
    // CDK, we need to install the CDK before loading the schematic files that import from the CDK.
    const installTaskId = _context.addTask(new NodePackageInstallTask());

    _context.addTask(new RunSchematicTask('ng-add-setup-project', _options), [installTaskId]);

    return tree;
  };
}

function addDependencies(tree: Tree): Tree {
  const dependencies: NodeDependency[] = [
    { name: '@sparkdesignsystem/spark', overwrite: true, type: NodeDependencyType.Dev, version: '^13.0.0' },
    { name: '@sparkdesignsystem/spark-angular', overwrite: true, type: NodeDependencyType.Dev, version: '^10.0.0' },
  ];

  dependencies.forEach((dependency) => addPackageJsonDependency(tree, dependency));

  return tree;
}
