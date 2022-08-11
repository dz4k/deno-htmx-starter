
# Deno+htmx starter

A test of writing server-heavy, HTML-oriented applications using:

 - Deno
 - Oak
 - NanoJSX (as a template engine)

htmx brings the interactivity of SPAs to classical, links-and-forms apps &mdash;
radically expanding frontend possibilities and improving user experience while 
keeping the simple programming model of a server that accepts requests and
returns HTML.

It's really simpler than it sounds, but if you're coming from a client-heavy
background (as many web developers are), you might need to adjust to the old
way of building websites with templates, cookie auth, etc. before digging into
htmx. 

Or just dive head first! We have many features:

 - state management (HTML)
 - time travel debugging (the browser's back and forward buttons)
 - view = <var>f</var>(state) (response = <var>server</var>(request))

Get started:

  ~~~
  deno run -Ar https://raw.githubusercontent.com/dz4k/deno-htmx-starter/dev/boiler.ts my-project-directory
  ~~~

Run:

  ~~~
  deno task start
  ~~~