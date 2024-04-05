import type { AstPath } from 'prettier';

export default function ({ parent }: AstPath): boolean {
    return (
        // TODO https://youtrack.jetbrains.com/issue/WEB-58832/Dynamic-import-with-backticks-throws-Cannot-find-declaration-to-go-to
        parent?.type === 'ImportExpression' ||
        (parent?.type === 'CallExpression' &&
            parent?.callee.type === 'Identifier' &&
            parent?.callee.name === 'require')
    );
}
