#!/usr/bin/env zx

import { $, echo } from 'zx'

echo('cwd', process.cwd())

const ROOT = await $ `git rev-parse --show-toplevel`

echo('Hello world')
echo('ROOT is', ROOT)
