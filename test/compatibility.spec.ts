import { equal } from 'node:assert';
import { it } from 'node:test';

import { format } from 'prettier';

import Plugin from '../src/index.js';

await it('compatibility with @trivago/prettier-plugin-sort-imports', async () => {
    const originCode = `import { B, A } from './b';

import { D, C } from './a';

const a = 'test';
`;
    const expectedCode = `import { D, C } from "./a";
import { B, A } from "./b";

const a = \`test\`;
`;

    equal(
        await format(originCode, {
            filepath: 'test.ts',
            plugins: ['@trivago/prettier-plugin-sort-imports', Plugin],
        }),
        expectedCode,
    );

    equal(
        await format(originCode, {
            filepath: 'test.ts',
            plugins: [Plugin, '@trivago/prettier-plugin-sort-imports'],
        }),
        expectedCode,
    );
});
