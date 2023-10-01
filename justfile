default:
    pstats memo --ttl=60s -- FORCE_COLOR=1 .github/bin/cron


preinstall-binaries:
  #!/usr/bin/env bash
  jq .preinstallBinaries package.json | jq -r .[] | xargs curl -O
