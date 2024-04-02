import { readdir, readFile, stat } from 'node:fs/promises';
import { URL } from 'node:url';

const fixturesDir = new URL('../fixtures/', import.meta.url);

export default async function* (): AsyncGenerator<{
    name: string;
    content: string;
}> {
    for (const item of await readdir(fixturesDir)) {
        const itemUrl = new URL(item, fixturesDir);

        const itemStat = await stat(itemUrl);

        if (itemStat.isFile()) {
            yield {
                name: item,
                content: await readFile(itemUrl, {
                    encoding: 'utf-8',
                }),
            };
        }
    }
}
