import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DWqCwaAo.mjs';
import { manifest } from './manifest_QHZoy08u.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/generate-apology.astro.mjs');
const _page4 = () => import('./pages/articles/_---page_.astro.mjs');
const _page5 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/generator.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/generate-apology.ts", _page3],
    ["src/pages/articles/[...page].astro", _page4],
    ["src/pages/articles/[...slug].astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/generator.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "bbc86c1b-b416-43e7-ae6c-10f397f7c73a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
