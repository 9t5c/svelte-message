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

<div class="sve-message {options.toast ? 'sve-message-toast-model' : ''}">
  {#each $message as m, index (m.id)}
    <div
      transition:fly={{ y: options.toast ? 0 : -6, x: 0 }}
      animate:flip
      class="sve-message-item {options.toast ? 'sve-message-item-toast-model' : ''}"
    >
      {#if m.type !== 'normal'}
        <img
          class={options.toast && m.type !== 'normal' ? 'sve-icon-toast-model' : 'sve-icon'}
          src={icon[m.type]}
          alt=""
        />
      {/if}
      <span>{m.msg}</span>
    </div>
  {/each}
</div>

<style>
  .sve-message {
    position: fixed;
    top: 16px;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }

  .sve-message-toast-model {
    height: 100vh;
    justify-content: center;
  }

  .sve-message-item {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 0 0 0.6px #00000026, 0 1.5px 1px #0000001a;
    background-color: #fff;
    padding: 4px;
    margin-bottom: 12px;
  }

  .sve-message-item-toast-model {
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px 0;
    margin-bottom: 0;
  }

  .sve-icon {
    margin-right: 8px;
    width: 12px;
    height: 12px;
  }

  .sve-icon-toast-model {
    width: 40px;
    height: 40px;
    margin-right: 0;
  }
</style>
