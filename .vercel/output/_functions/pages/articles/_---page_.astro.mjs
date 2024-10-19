/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_C0JNFnrn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DfoJH9Sl.mjs';
import { $ as $$UnsplashImage } from '../../chunks/UnsplashImage_DIRDYcU2.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Co3XW5Sr.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://writeapologyletter.com");
async function getStaticPaths({ paginate }) {
  const articles = await getCollection("articles");
  articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return paginate(articles, { pageSize: 10 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Apology Articles", "description": "Browse our collection of apology articles", "data-astro-cid-6cjewh5r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full max-w-screen-md mx-auto " data-astro-cid-6cjewh5r> <h1 class="text-4xl font-bold mb-8 text-center" data-astro-cid-6cjewh5r>Apology Letter Articles</h1> <ul class="space-y-12" data-astro-cid-6cjewh5r> ${page.data.map((article) => renderTemplate`<li class="bg-white overflow-hidden" data-astro-cid-6cjewh5r> <article class="prose prose-lg mx-auto" data-astro-cid-6cjewh5r> ${article.data.image && renderTemplate`${renderComponent($$result2, "UnsplashImage", $$UnsplashImage, { "article": article, "data-astro-cid-6cjewh5r": true })}`} ${article.data?.date && renderTemplate`<time${addAttribute(article.data.date?.toISOString(), "datetime")} class="text-sm text-gray-500" data-astro-cid-6cjewh5r> ${article.data.date?.toLocaleDateString()} </time>`} <h2 class="mt-0 mb-2" data-astro-cid-6cjewh5r> <a${addAttribute(`/articles/${article.slug}`, "href")} class="text-link" data-astro-cid-6cjewh5r> ${article.data.title} </a> </h2> <p class="text-gray-600 mb-4" data-astro-cid-6cjewh5r>${article.data.description}</p> </article> </li>`)} </ul> <nav class="mt-8 flex justify-between" data-astro-cid-6cjewh5r> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-primary" data-astro-cid-6cjewh5r>
&larr; Previous Page
</a>` : renderTemplate`<span data-astro-cid-6cjewh5r></span>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-primary" data-astro-cid-6cjewh5r>
Next Page &rarr;
</a>` : renderTemplate`<span data-astro-cid-6cjewh5r></span>`} </nav> </main> ` })} `;
}, "C:/Users/soto/projects/apologiesletter/src/pages/articles/[...page].astro", void 0);

const $$file = "C:/Users/soto/projects/apologiesletter/src/pages/articles/[...page].astro";
const $$url = "/articles/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
