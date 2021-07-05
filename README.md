<h1 align="center">
  Svelte Message
</h1>

<div align="center">
A Message Component from Svelte.
</div>

<br>
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
  import Message, { message } from 'svelte-message'
</script>

<Message />

<button on:click={ () => { message.success("success", 3000) } }>success</button>
```

## License

[MIT](https://github.com/lanset/svelte-message/blob/main/LICENSE)