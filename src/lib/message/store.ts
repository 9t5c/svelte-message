import { writable } from 'svelte/store'

let single = false
export const setSingle = (val: boolean) => {
  single = val
}

const createMessage = () => {
  const { subscribe, update, set } = writable([])
  let timer

  const create = (msg: string, type = 'normal', duration: number = 3000) => {
    if (single) {
      timer && clearTimeout(timer)
      set([])
      set([{ id: Date.now(), type, msg }])
    } else {
      update((n) => [...n, { id: Date.now(), type, msg }])
    }

    timer = setTimeout(() => {
      reduceMessage()
    }, duration)
  }

  const reduceMessage = () => {
    update((n) => [...n.slice(1)])
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
