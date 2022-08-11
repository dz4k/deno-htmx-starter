/** @jsx h */
/** @jsxFrag Fragment */

import { nanojsx, oak } from "./deps.ts";

const { Fragment, h, renderSSR } = nanojsx;
export { Fragment, h };

export type VNode = ReturnType<typeof h>;

type NotPromise = { then?: void };

export function handleHtml<TPath extends string, TState extends oak.State>(
  cb: (ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>) => NotPromise,
): oak.RouterMiddleware<TPath, oak.RouteParams<TPath>, TState> {
  return (ctx) => serveHtml(ctx, () => cb(ctx));
}

export function serveHtml<TPath extends string>(
  ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>,
  cb: () => unknown,
): void {
  ctx.response.type = "text/html";
  ctx.response.body = "<!doctype html>" + renderSSR(() => cb());
}
