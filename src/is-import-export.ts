import type { AstPath } from 'prettier';

const ignoredParents = new Set([
    'ImportDeclaration',
    'ImportAttribute',
    'ExportAllDeclaration',
    'ExportNamedDeclaration',
]);

export default function (path: AstPath): boolean {
    return ignoredParents.has(path.parent?.type);
}
