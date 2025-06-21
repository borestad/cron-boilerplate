#!/usr/bin/env -S bun

import { $ } from 'bun'

await $`cat < package.json | cat | grep author`
