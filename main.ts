import { oak } from "./deps.ts";
import router from "./routes.tsx";

const app = new oak.Application();

app.use(router.allowedMethods(), router.routes());

app.addEventListener(
  "listen",
  (e) => console.log("Listening on https://localhost:" + e.port),
);

app.listen({ port: Number(Deno.env.get("PORT") ?? 8080) });
