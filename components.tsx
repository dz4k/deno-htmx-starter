/** @jsx h */

import { h, VNode } from "./html.tsx";

type PageProps = {
  title?: string;
  headExtras?: VNode;
  children?: VNode;
};

/**
 * A page layout.
 */
export function Page(props: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {props.title && <title>{props.title}</title>}
        <link rel="stylesheet" href="https://the.missing.style" />
        <script src="https://unpkg.com/htmx.org@1.8.0" />
        {props.headExtras}
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}

export function HomePage() {
  return (
    <Page title="Welcome to htmx">
      <main>
        <h1>Welcome to htmx!</h1>
        <Counter value={0} />
      </main>
    </Page>
  );
}

/**
 * This is a counter component that does a server roundtrip. You wouldn't want
 * to actually use htmx to do this, of course, it's only here because it's a
 * common example for JS frameworks.
 *
 * Looking for actually useful examples of htmx usage? Head to
 * https://htmx.org/examples for inspiration.
 */
export function Counter(props: { value: number }) {
  const successorHref = `/numbers/${props.value}/successor`;

  return (
    <div
      class="box f-row align-items:center justify-content:center"
      hx-target="this"
      hx-swap="outerHTML"
    >
      {/* The buttons will inherit the hx-target and hx-swap attributes. */}
      <button hx-get="/numbers/0">Reset</button>
      <output class="h1 block">{props.value}</output>
      <button hx-get={successorHref}>Increment</button>
    </div>
  );
}
