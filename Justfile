# https://just.systems/man/en/
root := `git rev-parse --show-toplevel`

default: job1 job2

job1:
    FORCE_COLOR=1 {{root}}/.cron/jobs/example1.job.ts

job2:
    FORCE_COLOR=1 {{root}}/.cron/jobs/example2.job.ts

