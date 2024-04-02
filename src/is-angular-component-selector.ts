import type { AstPath } from 'prettier';

// TODO https://youtrack.jetbrains.com/issue/WEB-56900/Angular-doesnt-parse-plain-backticks-in-decorators#focus=Comments-27-6392379.0-0
export default function (path: AstPath): boolean {
    const [
        propertyNode,
        objectExpressionNode,
        callExpressionNode,
        decoratorNode,
        classDeclarationNode,
    ] = path.ancestors;

    if (
        propertyNode?.type !== 'Property' ||
        objectExpressionNode?.type !== 'ObjectExpression' ||
        callExpressionNode?.type !== 'CallExpression' ||
        decoratorNode?.type !== 'Decorator' ||
        classDeclarationNode?.type !== 'ClassDeclaration'
    ) {
        return false;
    }

    {
        const {
            key: { type, name },
        } = propertyNode;

        if (type !== 'Identifier' || name !== 'selector') {
            return false;
        }
    }

    {
        const {
            callee: { type, name },
        } = callExpressionNode;

        if (type !== 'Identifier' || name !== 'Component') {
            return false;
        }
    }

    return true;
}
