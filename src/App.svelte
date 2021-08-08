<script lang="ts">
  import { Message, message } from '~/lib/message'

  let single = false
</script>

<Message options={{ single }} />

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
