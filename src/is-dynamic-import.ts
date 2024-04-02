import type { AstPath } from 'prettier';

// TODO https://youtrack.jetbrains.com/issue/WEB-58832/Dynamic-import-with-backticks-throws-Cannot-find-declaration-to-go-to
export default function (path: AstPath): boolean {
    return path.parent?.type === 'ImportExpression';
}
