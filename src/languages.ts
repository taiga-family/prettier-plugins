import {SupportLanguage} from "prettier";

export default [
    {
        name: "JavaScript",
        parsers: ["babel"],
        extensions: [".js", ".jsx", ".mjs", ".cjs"],
        vscodeLanguageIds: ["javascript"],
    },
    {
        name: "TypeScript",
        parsers: ["typescript"],
        extensions: [".ts", ".tsx", ".mts", ".cts"],
        vscodeLanguageIds: ["typescript"],
    },
] satisfies SupportLanguage[];