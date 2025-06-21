#!/usr/bin/env -S bun

import { $ } from 'bun'
import { log } from '../util'

await $`echo hello`

log.log('world')
