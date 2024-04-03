import type { AstPath } from 'prettier';

export default function (path: AstPath): boolean {
    return path.getParentNode(1)?.type === 'TSImportType';
}
