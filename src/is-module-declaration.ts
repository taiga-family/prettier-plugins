import type { AstPath } from 'prettier';

export default function (path: AstPath): boolean {
    return path.parent?.type === 'TSModuleDeclaration';
}
