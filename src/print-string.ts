export default function (raw: string): string {
    if (/^`.*`$/.test(raw)) {
        return;
    }

    const [quote] = raw;
    const quoteEscapedRegExp = new RegExp(`(^|[^\\\\])\\\\${quote}`, 'g');

    return `\`${raw.slice(1, -1).replaceAll('`', '\\`').replaceAll(quoteEscapedRegExp, `$1${quote}`)}\``;
}
