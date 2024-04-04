import type { Plugin } from 'prettier';

import pluginKey from '../constants/plugin-key.js';

export default function (plugin: Plugin): boolean {
    return pluginKey in plugin;
}
