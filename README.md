
- [preact-ssr-node-cf-example](#preact-ssr-node-cf-example)
  - [Why?](#why)
  - [What all can it do?](#what-all-can-it-do)
  - [Where do I start?](#where-do-i-start)
  - [License](#license)


# preact-ssr-node-cf-example

This project shows how to do server-side rendering (SSR) for Preact, supporting both Cloudflare Workers and native Node.js server environments from a single codebase.

## Why?

Well, I wanted to show what a barebone setup for something like this would have. It's not as complicated as devs think, and it's another iteration from one of my DIY projects for building custom solutions over trying to fit everything in a generic framework. 

## What all can it do? 
The initial version consists of the following tech

- Tailwind 
- Node Server `node:http` 
- Wrangler / CF Worker 
- Preact 
- `preact-iso` for routing and SSR 

It currently implementes the following for explaining the concept

- static routes 
- SSR 
- and basic hydration

## Where do I start? 

You can start reading the `start.js` file to figure out how everything ties together and what role `esbuild` plays in the setup. 

Once you are done with that, you can move onto reading one of the `-entry.{tsx,js,jsx}` file to understand how we serve, render, and hydrate the HTML. 

You can read a detailed tutorial about this on [https://reaper.is/writing/20250710-another-one-about-build-setups-part-i](https://reaper.is/writing/20250710-another-one-about-build-setups-part-i)


## License 
[MIT](/LICENSE)

