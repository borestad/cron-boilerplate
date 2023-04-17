# cron-boilerplate

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/borestad/cron/ci.yml?style=for-the-badge)


**cron-boilerplate**

Goals:

- Cron Job oriented
- Avoid install via Bash or [Deno](https://deno.land/) with [Dax](https://github.com/dsherret/dax)
- Fastest installation possible
- Multithreaded & parallellism by default
- Optimized: one shot jobs (checkout + cache + install + run) should run ~ 5 seconds.
- Avoids expensive apt-get update. Rely on static upx compressed binaries
- Super productive & fast boilerplate environment
- Stats & useful debugging included
