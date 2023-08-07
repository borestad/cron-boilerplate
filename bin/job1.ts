#!/usr/bin/env -S deno run -A

import process from 'node:process'
import { $, chalk, dax, log, p, uuid } from './deps.ts'

process.env.FORCE_COLOR = 'true'

log(uuid.v1.generate())
log('test')

await $ `echo 5`
await $ `echo ---------`
await $ `git rev-parse --show-toplevel`

const branch = await $ `git rev-parse --abbrev-ref HEAD`.text()
log(branch)

await $ `echo ---------`

await p.mapLimit(
  [
    '11',
    '22',
    '33',
    '44',
  ],
  2,
  async (x, i) => {
    log(i, x)
    await $ `sleep 0.5`
  },
)

const bar = chalk.reset.inverse(' ')

log(bar)

log(chalk.bgBlue.red('hello world '))
log(dax.colors.red(dax.colors.bgBlue('hello world')))
