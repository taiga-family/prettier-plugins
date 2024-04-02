import type { AstPath, Doc, ParserOptions, Printer } from 'prettier';
import estree from 'prettier/plugins/estree';

import isAllowedLiteral from './is-allowed-literal.js';
import isDirective from './is-directive.js';
import printString from './print-string.js';

const originalEstreePrinter = (estree as any).printers.estree;

export default {
    estree: {
        ...originalEstreePrinter,
        print(
            path: AstPath,
            options: ParserOptions,
            print: (path: AstPath) => Doc,
            args?: unknown,
        ): Doc {
            const { node } = path;

            switch (node.type) {
                case 'StringLiteral': {
                    if (isAllowedLiteral(path)) {
                        return printString(node.extra.raw);
                    }

                    // fallthrough
                }
                case 'Literal': {
                    if (
                        typeof node.value === 'string' &&
                        !isDirective(path) &&
                        isAllowedLiteral(path)
                    ) {
                        return printString(node.raw);
                    }

                    // fallthrough
                }
                default: {
                    return originalEstreePrinter.print(
                        path,
                        options,
                        print,
                        args,
                    );
                }
            }
        },
    },
} satisfies Record<string, Printer>;
