import type { Plugin } from 'prettier';
import babelParsers from 'prettier/parser-babel';
import typescriptParsers from 'prettier/parser-typescript';

import pluginKey from './constants/plugin-key.js';
import printers from './printers.js';
import getParentParser from './utils/get-parent-parser.js';

export default {
    parsers: {
        babel: {
            ...babelParsers.parsers.babel,
            preprocess: (text, options) => {
                const parentParser = getParentParser(options);

                return parentParser?.preprocess(text, options) ?? text;
            },
        },
        typescript: {
            ...typescriptParsers.parsers.typescript,
            preprocess: (text, options) => {
                const parentParser = getParentParser(options);

                return parentParser?.preprocess?.(text, options) ?? text;
            },
        },
    },
    printers,
    [pluginKey]: true,
} satisfies Plugin;
