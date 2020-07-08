/*
 * Package Import
 */
import { serve } from "https://deno.land/std/http/server.ts";

/*
 * Local Import
 */

/*
 * Init
 */
const port: number = 3000;

/*
 * Server
 */
const server = serve({ port });
console.log(`http://localhost:${port}/`);

/*
 * Routes
 */
for await (const req of server) {
  // Index
  if (req.url === "/") {
    req.respond({
      status: 200,
      body: await Deno.open("./public/index.html"),
    });
  }
}
