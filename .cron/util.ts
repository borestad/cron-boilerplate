/* eslint-disable no-console */

/**
 *
 * Common utils
 *
 */

import { URL } from 'node:url'
import { $, chalk, createConsola } from 'deps.ts'

/**
 * bkt - caching utility
 */
export async function bkt({
  cwd = '.',
  ttl = '3600s',
  timeout = '60s',
  cmd = '',
}) {
  if (cwd.trim().length)
    cmd = `mkdir -p ${cwd}; cd ${cwd}; ${cmd}`

  return await $`timeout ${timeout} bkt --discard-failures --ttl=${ttl} -- sh -c ${cmd}`
    .noThrow().captureCombined().printCommand()
}

/**
 * Log wrapper
 */
export const log = Object.assign(
  (...args: any) => console.log(...args),
  createConsola({
    fancy: true,
  }),
)

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

/**
 * Path Helpers
 */
export const root = new URL('../', import.meta.url).pathname

/**
 * Color Helpers
 */
export const Code = {
  OK: `${chalk.bgAnsi256(34).black('   OK   ')} `,
  WARN: `${chalk.bgAnsi256(221).black('  WARN  ')} `,
  ERROR: `${chalk.bgAnsi256(160).whiteBright('  FAIL  ')} `,
}

/**
 * Benchmark helper
 */
export function benchmark(unitMs = 1) {
  const start = performance.now()
  return (now = performance.now()) => {
    return ((now - start) / unitMs).toFixed(2)
  }
}

export function wc(path: string): Promise<string> {
  return $`cat ${path} | wc -l`.text()
}
