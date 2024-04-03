import type { AstPath } from 'prettier';

import isAngularComponentSelector from './is-angular-component-selector.js';
import isDynamicImport from './is-dynamic-import.js';
import isDynamicTypeImport from './is-dynamic-type-import.js';
import isImportExport from './is-import-export.js';
import isProperty from './is-property.js';

export default function (path: AstPath): boolean {
    return (
        !isImportExport(path) &&
        !isProperty(path) &&
        !isDynamicImport(path) &&
        !isDynamicTypeImport(path) &&
        !isAngularComponentSelector(path)
    );
}
