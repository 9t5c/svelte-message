<script lang="ts">
  import { Message, message } from '~/lib/message'

  let single = false
  let toast = true
</script>

<Message options={{ single, toast }} />

<div class="mt-8" />
<button
  class="border w-20 rounded"
  on:click={() => {
    message.normal('Normal', 100000)
  }}>normal</button
>

<button
  class="border w-20 rounded"
  on:click={() => {
    message.success('success', 100000)
  }}>success</button
>

<button
  class="border w-20 rounded"
  on:click={() => {
    message.warning('warning')
  }}>warning</button
>

<button
  class="border w-20 rounded"
  on:click={() => {
    message.error('error')
  }}>error</button
>
