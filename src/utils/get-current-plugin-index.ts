import type { Plugin } from 'prettier';

import isCurrentPlugin from './is-current-plugin.js';

export default function (plugins: Plugin[]): number {
    const currentPlugins = plugins.filter(isCurrentPlugin);

    if (currentPlugins.length > 1) {
        throw new Error(
            'prettier-plugin-backticks initialized multiple times.',
        );
    }

    return plugins.indexOf(currentPlugins[0]);
}
