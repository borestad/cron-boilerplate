#!/usr/bin/env -S deno run -A

import { $ } from 'deps.ts'

await $ `echo hello world`
