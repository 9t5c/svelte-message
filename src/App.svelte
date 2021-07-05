<script lang="ts">
  import Message, { message } from '~/lib/message'
</script>

<Message />

<button
  on:click={() => {
    message.normal('Normal')
  }}>normal</button
>

<button
  on:click={() => {
    message.success('success')
  }}>success</button
>

<button
  on:click={() => {
    message.warning('warning')
  }}>warning</button
>

<button
  on:click={() => {
    message.error('error')
  }}>error</button
>
