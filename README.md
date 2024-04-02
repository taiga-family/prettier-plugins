<img src="./images/banner.webp" alt="prettier-plugin-backticks" />

# prettier-plugin-backticks

`prettier-plugin-backticks` is a plugin for Prettier, the opinionated code formatter, that automatically converts quotes
in your JavaScript or TypeScript files to backticks. This plugin is ideal for developers who prefer using backticks over
single or double quotes for strings in their code, ensuring a consistent style across their project.

## Features

- Converts all single and double quotes to backticks in JavaScript and TypeScript files.

## Installation

You can install `prettier-plugin-backticks` via npm or yarn. First, ensure that you have Prettier installed in your
project. If not, install Prettier:

```bash
npm install --save-dev prettier
# or
yarn add --dev prettier
```

Then, install `prettier-plugin-backticks`:

```bash
npm install -D @taiga-ui/prettier-plugin-backticks
# or
yarn add --dev @taiga-ui/prettier-plugin-backticks
```

Then add the plugin to your `.prettierrc` file:

```json
{
  "plugins": ["@taiga-ui/prettier-plugin-backticks"]
}
```

## Usage

Once you have installed `prettier-plugin-backticks`, you can run Prettier as you normally would. For example, to format
all files in your project, run:

```bash
npx prettier --write .
# or
yarn prettier --write .
```
