# 01.basics.api.styles

This project demonstrates 2 major Vue Component API styles. 

Folder `src/components/00.api.options` contains components defined in OPTIONS API style.
OPTIONS API is a legacy of Vue 2, it is still popular within older projects but not recommended for new ones.

Folder `src/components/02.api.composition.setup-stript.typescript` contains components defined in COMPOSITION API style with `script setup` macros and Typescript support.

COMPOSITION API enables deep Typescript support and is much more flexible as it comes to organizing component inner logic.
It is also RECOMMENDED way of defining components in Vue 3 (current major version of Vue framework).

Folder `src/components/01.api.composition.setup-function` demonstrates how to use COMPOSITION api without `script setup` macros (particulary when running vue directly inside the browser).

You can read more about vue API styles here:
- https://vuejs.org/guide/introduction.html#api-styles
- https://vuejs.org/guide/extras/composition-api-faq.html
- https://vuejs.org/guide/typescript/composition-api.html
- https://dev.to/sucodelarangela/vue3-options-api-vs-composition-api-en-1fbo

(docs tip: in the left top corner you can switch docs api style between options and composition API)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.