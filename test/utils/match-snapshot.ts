import { AssertionError, deepStrictEqual } from 'node:assert';
import { readFile, writeFile } from 'node:fs/promises';
import { URL } from 'node:url';

const snapshotsDir = new URL('../snapshots/', import.meta.url);

export default async function (name: string, data: string): Promise<void> {
    const snapshotName = `${name}.snap`;
    const snapshotUrl = new URL(snapshotName, snapshotsDir);

    let currentSnapshot: string;

    try {
        currentSnapshot = await readFile(snapshotUrl, { encoding: 'utf-8' });
    } catch {
        await writeFile(snapshotUrl, data);

        throw new AssertionError({
            message: `Snapshot with name ${snapshotName} does not exists. It has been created, run the test again.`,
        });
    }

    deepStrictEqual(data, currentSnapshot);
}
