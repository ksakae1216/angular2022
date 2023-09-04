import {
  addProjectConfiguration,
  extractLayoutDirectory,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  readNxJson,
  Tree,
} from '@nx/devkit';
import { ContainerGeneratorSchema } from './schema';
import path = require('path');

interface NormalizedSchema extends ContainerGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  tree: Tree,
  options: ContainerGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const { projectDirectory } = extractLayoutDirectory(
    `${options.directory}/${options.name}`
  );
  const fullProjectDirectory = projectDirectory
    ? `${names(projectDirectory).fileName}/${name}`.replace(/\/+/g, '/')
    : name;

  const projectName = fullProjectDirectory
    .replace(new RegExp('/', 'g'), '-')
    .replace(/-\d+/g, '');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const { defaultProject, npmScope } = readNxJson(tree);

  const project = options.project ?? defaultProject ?? '';

  // 不要なproject.jsonを削除
  tree.delete(`${options.projectRoot}/project.json`);

  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
    prefix: npmScope,
    project,
  };

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (tree: Tree, options: ContainerGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    sourceRoot: `${normalizedOptions.projectRoot}`,
    targets: {
      build: {
        executor: '@myorg/myorg-plugin:build',
      },
    },
    tags: normalizedOptions.parsedTags,
  });
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
