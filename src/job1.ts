import $ from 'dax/mod.ts'
import { mapLimit } from 'promise-utils/map.ts'

// run a command
await $ `echo 5`
await $ `echo ---------`

const foo = await $ `git rev-parse --show-toplevel`.text()

console.log(foo)

await $ `echo ---------`
await mapLimit([
  '1',
  '2',
  '3',
  '4',
], 2, async (x) => {
  await $ `echo ${x}`
})
