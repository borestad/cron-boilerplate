/// <reference types="npm:@types/node" />

import process from 'node:process'
import $ from 'dax/mod.ts'
import { mapLimit } from 'promise-utils/map.ts'
import chalk from 'npm:chalk@5'

process.env.FORCE_COLOR = 'true'

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
},
)

const bar = chalk.reset.inverse(' ')
console.log(bar)

const text1 = chalk.bgBlue('hello world')
const text2 = chalk.bgWhite('hello world')
const text3 = chalk.black.bgWhite('hello world')
const text4 = chalk.white.bgWhite('_')

console.log(text1)
console.log(text2)
console.log(text3)
console.log(text4)

// process.stdout.write(bar)
