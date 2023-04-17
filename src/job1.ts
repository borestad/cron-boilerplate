import process from 'node:process'
import $ from 'dax/mod.ts'
import { mapLimit } from 'promise-utils/map.ts'
import chalk from 'https://deno.land/x/chalk_deno@v4.1.1-deno/source/index.js'

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

// const space = ' '
const bar = chalk?.reset?.inverse(' ')

// process.stdout.write(bar)
console.log(bar)
console.log(bar)
console.log(bar)
console.log(bar)
