/** @jsx h */
/** @jsxFrag Fragment */

import { femtojsx, oak } from "./deps.ts";

const { h, Fragment } = femtojsx;
export { femtojsx, Fragment };

export function handleHtml<TPath extends string, TState extends oak.State>(
  cb: (
    ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>,
  ) => femtojsx.VNode | Promise<femtojsx.VNode>,
): oak.RouterMiddleware<TPath, oak.RouteParams<TPath>, TState> {
  return async (ctx) => serveHtml(ctx, await cb(ctx));
}

export function serveHtml<TPath extends string>(
  ctx: oak.RouterContext<TPath, oak.RouteParams<TPath>>,
  cb: femtojsx.VNode,
): void {
  console.log(cb);
  ctx.response.type = "text/html";
  ctx.response.body = "<!doctype html>" + femtojsx.render(cb);
}
