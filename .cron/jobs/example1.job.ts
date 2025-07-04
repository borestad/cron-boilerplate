#!/usr/bin/env -S bun

import { $ } from 'bun'
import { benchmark, bkt, Code, hr, log, root, wcl } from '../util'

const b1 = benchmark()
const b2 = benchmark(1000)

await $`echo hello world`

const param = '+%Y-%m-%d-%H%M%S'

const res = await bkt({
  cmd: `date ${param}`,
})

hr('Hello')
log(res.stdout.toString())

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

log(b1())
log(b2())

process.chdir(root)
log('Lines:', await wcl('.cron/jobs/example1.job.ts'))

// Disable on purpose to test working no-floating-promises
await wcl('.cron/jobs/example1.job.ts')

log.info('Debug Enviroment Variables')
const env = Bun.env
log(
  Object.keys(env)
    .filter((s) => /GITHUB/.test(s))
    .sort()
    .reduce((obj: any, key: any) => {
      obj[key] = env[key]
      return obj
    }, {}),
)
