root := `git rev-parse --show-toplevel`

default:
  just job1
  just job2

job1:
    FORCE_COLOR=1 {{root}}/.cron/jobs/example1.job.ts

job2:
    FORCE_COLOR=1 {{root}}/.cron/jobs/example2.job.ts

