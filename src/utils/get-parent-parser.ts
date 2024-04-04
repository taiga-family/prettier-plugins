import type { Parser, ParserOptions } from 'prettier';

import { assertPlugins } from './assert-plugins.js';
import getCurrentPluginIndex from './get-current-plugin-index.js';

export default function ({ parser, plugins }: ParserOptions): Parser {
    assertPlugins(plugins);

    const currentPluginIndex = getCurrentPluginIndex(plugins);

    for (let i = currentPluginIndex - 1; i > 0; i--) {
        const parentParser = plugins[i].parsers?.[parser as string];

        if (parentParser) {
            return parentParser;
        }
    }
}
