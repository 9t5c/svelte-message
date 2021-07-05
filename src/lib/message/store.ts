import { writable } from 'svelte/store'

const createMessage = () => {
  const { subscribe, update } = writable([])

  const create = (msg: string, type = 'normal', duration: number = 3000) => {
    update(n => [...n, {id: new Date(), type, msg, duration}])

    setTimeout(() => {
      reduceMessage()
    }, duration)
  }

  const reduceMessage = () => {
    update(n => [...n.slice(1)])
  }

  const normal = (msg: string, duration?: number) => {
    create(msg, 'normal', duration)
  }
  const success = (msg: string, duration?: number) => {
    create(msg, 'success', duration)
  }
  const warning = (msg: string, duration?: number) => {
    create(msg, 'warning', duration)
  }
  const error = (msg: string, duration?: number) => {
    create(msg, 'error', duration)
  }

  return {
    subscribe,
    normal,
    success,
    warning,
    error,
  }
}

export const message = createMessage()
