#!/usr/bin/env -S deno run -A

import { Code, benchmark, bkt, hr, log, root } from 'util.ts'
import { $ } from 'deps.ts'

const b = benchmark(1000)

await $`echo hello world`
const param = '+%Y-%m-%d-%H%M%S'

const res = await bkt({
  cmd: `date ${param}`,
})

hr('Hello')
log(res.stdout)

log.info(root)

log.info('Using log 3.0.0')
log.start('Building project...')
log.warn('A new version of log is available: 3.0.1')
log.success('Project built!')
log.error(new Error('This is an example error. Everything is fine!'))
log.box('I am a simple box')

log(Code.OK)
log(Code.ERROR)
log(Code.WARN)

log(b())
