import type { ParserOptions, Plugin } from 'prettier';

export function assertPlugins(
    plugins: ParserOptions['plugins'],
): asserts plugins is Plugin[] {
    if (plugins.some((plugin) => typeof plugin === 'string')) {
        throw new Error('Assertion error: plugin must not be a string');
    }
}
