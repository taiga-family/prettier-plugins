import { it } from 'node:test';

import { format } from 'prettier';

import Plugin from '../src/index.js';
import getFixtures from './utils/get-fixtures.js';
import matchSnapshot from './utils/match-snapshot.js';

for await (const { name, content } of getFixtures()) {
    void it(`fixture ${name}`, async () => {
        await matchSnapshot(
            `fixture.${name}`,
            await format(content, {
                filepath: name,
                plugins: [Plugin],
            }),
        );
    });
}
