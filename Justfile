# https://just.systems/man/en/
gitroot := `git rev-parse --show-toplevel`
export FORCE_COLOR := "1"

default: job1 job2

job1:
    {{gitroot}}/.cron/jobs/example1.job.ts

job2:
    {{gitroot}}/.cron/jobs/example2.job.ts

