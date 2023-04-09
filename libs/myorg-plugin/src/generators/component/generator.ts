import { componentGenerator } from '@nrwl/angular/generators';
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readNxJson,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { ComponentGeneratorSchema } from './schema';

interface NormalizedSchema extends ComponentGeneratorSchema {
  path: string;
  project: string;
  skipImport: boolean;
  projectSourceRoot: string;
  standalone: boolean;
}

function normalizeOptions(
  tree: Tree,
  options: ComponentGeneratorSchema
): NormalizedSchema {
  const project = options.project ?? readNxJson(tree)?.defaultProject ?? '';

  const { projectType, root, sourceRoot } = readProjectConfiguration(
    tree,
    project
  );

  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');

  const path =
    options.path ??
    joinPathFragments(
      projectSourceRoot,
      projectType === 'application' ? 'app' : 'lib'
    );

  return {
    ...options,
    path,
    project,
    skipImport: true,
    projectSourceRoot,
    standalone: true,
  };
}

async function addFiles(tree: Tree, options: NormalizedSchema) {
  const componentNames = names(options.name);

  await componentGenerator(tree, {
    ...options,
    skipTests: true,
    style: 'none',
  });

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments(options.path, componentNames.fileName),
    {
      ...options,
      ...componentNames,
      tmpl: '',
    }
  );
}

export default async function (tree: Tree, options: ComponentGeneratorSchema) {
  const { ...normalizedOptions } = normalizeOptions(tree, options);

  await addFiles(tree, normalizedOptions);

  await formatFiles(tree);
}
