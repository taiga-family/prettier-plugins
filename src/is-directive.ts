import type { AstPath } from 'prettier';

export default function (path: AstPath): boolean {
    if (path.key !== 'expression') {
        return;
    }

    const { parent } = path;

    return parent.type === 'ExpressionStatement' && parent.directive;
}
