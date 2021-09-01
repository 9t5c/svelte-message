# Svelte Message

A Message Component from Svelte.

<br>

<p align="center">
  <img src="https://img.shields.io/npm/v/svelte-message?color=blue">
  <img src="https://img.shields.io/npm/l/svelte-message">
  <img src="https://img.shields.io/npm/dw/svelte-message">
</p>

<br>

## Install

```
npm install svelte-message
```

```
pnpm add svelte-message
```

```
yarn add svelte-message
```

## Usage

```
<script>
  import { Message, message } from 'svelte-message'
  const single = false
</script>

<Message options={{ single }} />

<button on:click={ () => { message.success("success", 3000) } }>success</button>
```

## Other

If you use [Vite](https://vitejs.dev/), need to add `exclude`:

```
vite.config.js

optimizeDeps: {
  exclude: ['svelte-message'],
},
```

## License

[MIT](https://github.com/lanset/svelte-message/blob/main/LICENSE)
