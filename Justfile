root := `git rev-parse --show-toplevel`

default:
    FORCE_COLOR=1 {{root}}/.cron/jobs/example1.ts

