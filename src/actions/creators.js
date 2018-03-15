import { HELLO_WORLD } from './types'

export function triggerHelloWorld(text) {
  return {
    type: HELLO_WORLD,
    text
  }
}
