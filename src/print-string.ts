export default function (raw: string): string {
    if (/^`.*`$/.test(raw)) {
        return;
    }

    return `\`${raw.slice(1, -1).replaceAll(/(^|)`/g, '\\`')}\``;
}