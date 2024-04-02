<img src="./images/banner.webp" alt="prettier-plugin-backticks" />

# prettier-plugin-backticks

`prettier-plugin-backticks` — это плагин для Prettier, многопрофильного форматировщика кода, который автоматически
заменяет кавычки в ваших файлах JavaScript или TypeScript на обратные кавычки. Этот плагин идеально подходит для
разработчиков, которые предпочитают использовать обратные кавычки вместо одинарных или двойных кавычек для строк в своем
коде, обеспечивая единообразный стиль по всему проекту.

## Особенности

- Преобразует все одинарные и двойные кавычки в обратные кавычки в файлах JavaScript и TypeScript.

## Установка

Вы можете установить `prettier-plugin-backticks` через npm или yarn. Сначала убедитесь, что у вас установлен Prettier
в вашем проекте. Если нет, установите Prettier:

```bash
npm install --save-dev prettier
# или
yarn add --dev prettier
```

Затем установите `prettier-plugin-backticks`:

```bash
npm install -D prettier-plugin-backticks
# или
yarn add --dev prettier-plugin-backticks
```

Затем добавьте плагин в ваш файл `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-backticks"]
}
```

## Использование

После установки `prettier-plugin-backticks` вы можете запустить Prettier, как обычно. Например, чтобы отформатировать
все файлы в вашем проекте, выполните:

```bash
npx prettier --write .
# или
yarn prettier --write .
```