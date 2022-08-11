/** @jsx h */
/** @jsxFrag Fragment */

import { RouteParams } from "https://deno.land/x/oak@v10.6.0/router.ts";
import { nanojsx, oak } from "./deps.ts";

const { Fragment, h, renderSSR } = nanojsx;
export { Fragment, h };

type NotPromise = { then?: void }

export function handleHtml<TPath extends string, TState extends oak.State>(
  cb: (ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>) => NotPromise,
): oak.RouterMiddleware<TPath, oak.RouteParams<TPath>, TState> {
  return async (ctx) => serveHtml(ctx, () => cb(ctx));
}

export function serveHtml<TPath extends string, TState extends oak.State>(
  ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>,
  cb: () => any,
): void {
  ctx.response.type = "text/html";
  ctx.response.body = "<!doctype html>" + renderSSR(() => cb());
}
