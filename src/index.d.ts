import { SvelteComponentTyped } from 'svelte'

interface MessageApi {
  normal(msg: string, duration?: number)
  success(msg: string, duration?: number)
  warning(msg: string, duration?: number)
  error(msg: string, duration?: number)
}

interface MessageOptions {
  single?: boolean
}

class Message extends SvelteComponentTyped<MessageOptions> {}

export { Message }
export const message: MessageApi
