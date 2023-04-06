dot := '.'

@default:
    @just --choose

job1:
    .github/scripts/pstats zx ./src/job1.mjs
