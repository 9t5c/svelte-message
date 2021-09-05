<script lang="ts">
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { message, setSingle, setToast } from './store'
  import successIcon from './icon/success.svg'
  import warningIcon from './icon/warning.svg'
  import errorIcon from './icon/error.svg'

  interface MessageOptions {
    single?: boolean
    toast?: boolean
  }

  export let options: MessageOptions = {
    single: false,
    toast: false,
  }

  if (options.single) {
    setSingle(true)
  }
  if (options.toast) {
    setSingle(true)
    setToast(true)
  }

  const icon = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
  }
</script>

<div
  class="fixed top-4 left-0 right-0 z-9999 flex flex-col items-center pointer-events-none {options.toast
    ? 'h-screen justify-center'
    : ''}"
>
  {#each $message as m, index (m.id)}
    <div
      transition:fly={{ y: options.toast ? 0 : -6, x: 0 }}
      animate:flip
      class="{options.toast
        ? 'bg-black bg-opacity-70 text-white w-30 flex-col py-2'
        : 'bg-white text-black px-2 py-1'} my-2 flex items-center justify-center rounded shadow"
    >
      {#if m.type !== 'normal'}
        <img
          class={options.toast && m.type !== 'normal' ? 'w-10 h-10' : 'mr-2 w-4 h-4'}
          src={icon[m.type]}
          alt=""
        />
      {/if}
      <span class="text">{m.msg}</span>
    </div>
  {/each}
</div>
