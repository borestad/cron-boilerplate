import $ from 'dax/mod.ts'
// import { red } from '/fmt/colors.ts'

// run a command
await $ `echo 5` // outputs: 5
await $ `echo ---------`

// more complex example outputting 1 to stdout and 2 to stderr
await $ `echo 1 && deno eval 'console.error(2);'`

await $ `echo ---------`

// parallel
await Promise.all([
  $ `sleep 1 ; echo 1`,
  $ `sleep 2 ; echo 2`,
  $ `sleep 3 ; echo 3`,
])
