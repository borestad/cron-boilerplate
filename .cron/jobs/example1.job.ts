#!/usr/bin/env -S deno run -A

import { bkt, gitRoot, hr, log } from 'util.ts'
import { $ } from 'deps.ts'

await $`echo hello world`
const param = '+%Y-%m-%d-%H%M%S'

const res = await bkt({
  cmd: `date ${param}`,
})

hr('Hello')
log(res.stdout)

log.info(gitRoot)

log.info('Using log 3.0.0')
log.start('Building project...')
log.warn('A new version of log is available: 3.0.1')
log.success('Project built!')
log.error(new Error('This is an example error. Everything is fine!'))
log.box('I am a simple box')
