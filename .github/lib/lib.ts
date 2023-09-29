import { $, createConsola } from 'deps.ts'

/**
 * bkt - caching utility
 */
export async function bkt({
  to = '.',
  ttl = '3600s',
  timeout = '60s',
  cmd = ''
}) {
  if (to.trim().length) {
    cmd = `mkdir -p ${to}; cd ${to}; ${cmd}`
  }

  return await $ `timeout ${timeout} bkt --discard-failures --ttl=${ttl} -- sh -c ${cmd}`
    .noThrow().captureCombined().printCommand()
}

export const vanillaLogger = function (...args: any) {
  // eslint-disable-next-line no-console
  console.log(...args)
}

const fancyLogger = createConsola({
  fancy: true
})

export const log = Object.assign(vanillaLogger, fancyLogger)
