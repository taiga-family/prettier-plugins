import type { AstPath } from 'prettier';

const objectPropertyTypes = new Set(['ObjectProperty', 'Property']);

export default function (path: AstPath): boolean {
    return (
        objectPropertyTypes.has(path.parent?.type) &&
        path.parent.key === path.node
    );
}
