import { add } from './main.ts'

Deno.bench(() => {
  add(1, 2)
})

Deno.bench(() => {
  add(2 ** 32, 2 ** 32)
})
