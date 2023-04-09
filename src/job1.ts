import $ from 'dax/mod.ts'
import { mapLimit } from 'promise-utils/map.ts'

// run a command
await $ `echo 5`
await $ `echo ---------`

await $ `git rev-parse --show-toplevel`

await mapLimit([
  '1',
  '2',
  '3',
  '4',
], 2, async (x) => {
  await $ `echo ${x}`
})
