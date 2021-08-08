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
    single: false
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

<div class="message">
  {#each $message as m, index (m.id)}
    <div transition:fly={{ y: -6, x: 0 }} animate:flip class="message-item {m.type}">
      {#if m.type !== 'normal'}
        <img class="icon" src={icon[m.type]} alt="" />
      {/if}
      <span class="text">{m.msg}</span>
    </div>
  {/each}
</div>

<style>
  .message {
    position: fixed;
    left: 0;
    right: 0;
    top: 10px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }

  .message-item {
    background: #fff;
    color: #000;
    box-shadow: 0 0 0 0.6px rgba(0, 0, 0, 0.15), 0 1.5px 1px rgba(0, 0, 0, 0.1);
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    min-height: 24px;
    border-radius: 2px;
  }

  .icon {
    width: 16px;
    margin-right: 8px;
  }
</style>
