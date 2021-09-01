<script lang="ts">
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { message, setSingle } from './store'
  import successIcon from './icon/success.svg'
  import warningIcon from './icon/warning.svg'
  import errorIcon from './icon/error.svg'

  interface MessageOptions {
    single?: boolean
  }

  export let options: MessageOptions = {
    single: false,
  }

  if (options.single) {
    setSingle(true)
  }

  const icon = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
  }
</script>

<div class="fixed top-4 left-0 right-0 z-9999 flex flex-col items-center pointer-events-none">
  {#each $message as m, index (m.id)}
    <div
      transition:fly={{ y: -6, x: 0 }}
      animate:flip
      class="bg-white text-black my-2 flex items-center justify-center py-1 px-2 rounded shadow {m.type}"
    >
      {#if m.type !== 'normal'}
        <img class="w-4 h-4 mr-2" src={icon[m.type]} alt="" />
      {/if}
      <span class="text">{m.msg}</span>
    </div>
  {/each}
</div>
