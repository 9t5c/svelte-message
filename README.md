<h1 align="center">
  Svelte Message
</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/svelte-message?color=blue">
  <img src="https://img.shields.io/npm/l/svelte-message">
  <img src="https://img.shields.io/npm/dw/svelte-message">
</p>

<div align="center">
A Message Component from Svelte.
</div>

<br>
<br>

## Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

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
