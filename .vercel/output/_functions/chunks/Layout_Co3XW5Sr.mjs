import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, h as renderHead, i as renderSlot } from './astro/server_C0JNFnrn.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://writeapologyletter.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/soto/projects/apologiesletter/node_modules/.pnpm/astro@4.16.6_typescript@5.6.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "/articles", text: "Articles" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-white "> <div class="w-full max-w-screen-lg mx-auto px-4 py-6 flex justify-between items-center"> <a href="/" class="text-xl font-bold text-gray-800 flex items-center"> <span class="mr-2 text-4xl" role="img" aria-label="Apology letter">💌</span>
ApologyLetters
</a> <nav> <ul class="flex space-x-6"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="text-gray-600 hover:text-gray-800 transition-colors duration-300"> ${item.text} </a> </li>`)} </ul> </nav> </div> </header>`;
}, "C:/Users/soto/projects/apologiesletter/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 mt-8"> <div class="w-full max-w-screen-lg mx-auto px-4 py-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="mb-4 md:mb-0"> <a href="/" class="text-xl font-bold text-gray-800 flex items-center"> <span class="mr-2 text-2xl" role="img" aria-label="Apology letter">💌</span>
ApologyLetters
</a> </div> <nav class="mb-4 md:mb-0"> <ul class="flex space-x-4"> <li><a href="/about" class="text-gray-600 hover:text-gray-800">About</a></li> <li><a href="/privacy" class="text-gray-600 hover:text-gray-800">Privacy</a></li> <li><a href="/terms" class="text-gray-600 hover:text-gray-800">Terms</a></li> <li><a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a></li> </ul> </nav> </div> <div class="mt-4 text-center text-gray-500 text-sm">
© ${currentYear} ApologyLetters. All rights reserved.
</div> </div> </footer>`;
}, "C:/Users/soto/projects/apologiesletter/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://writeapologyletter.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Apology Letters",
    description = "Create heartfelt apology letters with our easy-to-use generator. Mend relationships and express sincere regret effectively. Free templates and expert tips."
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="light"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="flex flex-col min-h-screen overflow-x-hidden"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow w-full max-w-screen-lg mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/soto/projects/apologiesletter/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
