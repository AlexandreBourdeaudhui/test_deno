# Test Deno

## Installation Deno

* `curl -fsSL https://deno.land/x/install/install.sh | sh`
* If you want install Denom (nodemon)
  * Run `deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts`

## Launch

* `denon start` or `deno run --allow-net --allow-read src/server.ts`
  * `--allow-net` Allow network access. 
  * `--allow-read` Allow file system read access.
  * [Permissions list](https://deno.land/manual/getting_started/permissions#permissions-list)
