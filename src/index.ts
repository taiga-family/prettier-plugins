import {Plugin} from 'prettier';
import babelParsers from 'prettier/parser-babel';
import typescriptParsers from 'prettier/parser-typescript';
import printers from "./printers.js";

export default {
    parsers: {
        babel: babelParsers.parsers.babel,
        typescript: typescriptParsers.parsers.typescript,
    },
    printers,
} satisfies Plugin;
