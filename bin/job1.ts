import process from 'node:process'
import $ from 'dax/mod.ts'
import { colors } from 'dax/src/deps.ts'
import { mapLimit } from 'promise-utils/map.ts'
import chalk from 'npm:chalk@5'

process.env.FORCE_COLOR = 'true'

// run a command
await $ `echo 5`
await $ `echo ---------`

await $ `git rev-parse --show-toplevel`
const branch = await $ `git rev-parse --abbrev-ref HEAD`.text()
console.log(branch)

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

console.log(chalk.bgBlue.red('hello world'))
console.log(colors.red(colors.bgBlue('hello world')))

// process.stdout.write(bar)
