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

export class Message extends SvelteComponentTyped<{ options: MessageOptions }> {}
export const message: MessageApi
