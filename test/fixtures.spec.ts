import {format} from "prettier";
import Plugin from "../src/index.js";
import {it} from "node:test";
import getFixtures from "./utils/get-fixtures.js";
import matchSnapshot from "./utils/match-snapshot.js";

for await (const { name, content } of getFixtures()) {
    it(`fixture ${name}`, async () => {
        console.log(name);
        await matchSnapshot(
            `fixture.${name}`,
            await format(content, {
                filepath: name,
                plugins: [Plugin],
            }),
        );
    });
}
