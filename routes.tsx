/** @jsx h */
/** @jsxFrag Fragment */

import { emit, oak } from "./deps.ts";
import { Fragment, h, handleHtml } from "./html.tsx";
import { Counter, HomePage, Page } from "./components.tsx";

const router = new oak.Router();
export default router;

router.get("/", handleHtml((ctx) => <HomePage />));

router.get(
  "/numbers/:value",
  handleHtml((ctx) => <Counter value={parseInt(ctx.params.value)} />),
);

router.get("/numbers/:value/successor", (ctx) => {
  const value = Number(ctx.params.value);

  ctx.response.status = oak.Status.SeeOther;
  ctx.response.headers.set("Location", `/numbers/${value + 1}`);
});
