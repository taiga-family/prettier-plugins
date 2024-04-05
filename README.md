<img src="./images/banner.webp" alt="prettier-plugin-backticks" />

# prettier-plugin-backticks

`prettier-plugin-backticks` is a plugin for Prettier, the opinionated code formatter, that automatically converts quotes
in your JavaScript or TypeScript files to backticks. This plugin is ideal for developers who prefer using backticks over
single or double quotes for strings in their code, ensuring a consistent style across their project.

## Features

- Converts all single and double quotes to backticks (`) in JavaScript and TypeScript files, with certain exceptions:
  1. The "use strict" expression, which is not replaced to preserve its exact syntactical significance.
  2. Object keys, where the use of single or double quotes is necessary to maintain the names of keys that contain characters not allowed without quotes.
  3. Strings in import statements, in order to not disrupt the syntax of modules.
  4. Strings in module declaration statements, in order to not disrupt the syntax of modules.
  5. (Temporary) Strings in dynamic import statements, due to some development environments incorrectly processing such imports if they are enclosed in backticks.
  6. (Temporary) Strings in selectors for Angular components, because some development environments incorrectly handle such selectors when they are enclosed in backticks.

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

## Compatible plugins

* `@trivago/prettier-plugin-sort-imports`
