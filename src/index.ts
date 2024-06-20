import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { DbConnect } from "./db";

import flipper from "./routes/flipper";
import marque from "./routes/marque";

const app = new Hono();
await DbConnect();

const port = 3000;
console.log(`Server is running on port ${port}`);

app.route("/api", flipper);
app.route("/api", marque);

app.use("*", (c) => {
  return c.json({ msg: "404 oups" });
});

serve({
  fetch: app.fetch,
  port,
});
