import { $, createConsola } from 'deps.ts'

/**
 * bkt - caching utility
 */
export async function bkt({
  cwd = '.',
  ttl = '3600s',
  timeout = '60s',
  cmd = ''
}) {
  if (cwd.trim().length) {
    cmd = `mkdir -p ${cwd}; cd ${cwd}; ${cmd}`
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

/**
 * Simple line filler helper
 */
export function hr(title = '', opt = { len: 80, pTop: true, pBottom: true }) {
  title = title ? `${title} ` : title
  const rest = opt.len - Number(title.length)

  opt.pTop && log()
  log(title + '─'.repeat(rest))
  opt.pBottom && log()
}
