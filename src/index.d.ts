import { SvelteComponentTyped } from 'svelte'

interface MessageApi {
  normal(msg: string, duration?: number)
  success(msg: string, duration?: number)
  warning(msg: string, duration?: number)
  error(msg: string, duration?: number)
}

class Message extends SvelteComponentTyped {}

export { Message }
export const message: MessageApi
