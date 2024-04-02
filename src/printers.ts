import {AstPath, Doc, ParserOptions, Printer} from "prettier";
import estree from 'prettier/plugins/estree';
import printString from "./print-string.js";
import isDirective from "./is-directive.js";
import isImportExport from "./is-import-export.js";
import isProperty from "./is-property.js";

const originalEstreePrinter = (estree as any).printers['estree'];

export default {
    estree: {
        ...originalEstreePrinter,
        print(path: AstPath<any>, options: ParserOptions<any>, print: (path: AstPath<any>) => Doc, args?: unknown): Doc {
            const {node} = path;

            switch (node.type) {
                case "StringLiteral": {
                    if (!isImportExport(path) && !isProperty(path)) {
                        return printString(node.extra.raw);
                    }
                }
                case "Literal": {
                    if (typeof node.value === 'string' && !isDirective(path) && !isImportExport(path) && !isProperty(path)) {
                        return printString(node.raw);
                    }
                }
                default: {
                    return originalEstreePrinter.print(path, options, print, args);
                }
            }
        },
    },
} satisfies { [astFormat: string]: Printer };