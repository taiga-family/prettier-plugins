import type { AstPath } from 'prettier';

const ignoredParents = new Set([
    'ExportAllDeclaration',
    'ExportNamedDeclaration',
    'ImportAttribute',
    'ImportDeclaration',
]);

export default function (path: AstPath): boolean {
    return ignoredParents.has(path.parent?.type);
}
