import type { AstPath } from 'prettier';

import isDynamicImport from './is-dynamic-import.js';
import isImportExport from './is-import-export.js';
import isProperty from './is-property.js';

export default function (path: AstPath): boolean {
    return !isImportExport(path) && !isProperty(path) && !isDynamicImport(path);
}
