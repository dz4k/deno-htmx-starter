/** @jsx h */

import { oak } from "./deps.ts";
import { h, handleHtml } from "./html.tsx";
import { Counter, HomePage } from "./components.tsx";

const router = new oak.Router();
export default router;

router.get("/", handleHtml((_) => <HomePage />));

router.get(
  "/numbers/:value",
  handleHtml((ctx) => <Counter value={parseInt(ctx.params.value)} />),
);

router.get("/numbers/:value/successor", (ctx) => {
  const value = Number(ctx.params.value);

  ctx.response.status = oak.Status.SeeOther;
  ctx.response.headers.set("Location", `/numbers/${value + 1}`);
});
