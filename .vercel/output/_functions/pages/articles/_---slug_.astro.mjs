/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_C0JNFnrn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DfoJH9Sl.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Co3XW5Sr.mjs';
import { $ as $$UnsplashImage } from '../../chunks/UnsplashImage_DIRDYcU2.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_Dj_dWC6j.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://writeapologyletter.com");
async function getStaticPaths() {
  const articleEntries = await getCollection("articles");
  return articleEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const articles = await getCollection("articles");
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime()
  );
  const currentIndex = sortedArticles.findIndex((article) => article.slug === entry.slug);
  const prevArticle = sortedArticles[currentIndex + 1];
  const nextArticle = sortedArticles[currentIndex - 1];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-lg mx-auto"> ${entry.data.date && renderTemplate`<time${addAttribute(entry.data?.date.toISOString(), "datetime")} class="text-gray-500"> ${entry.data.date.toLocaleDateString()} </time>`} <h1>${entry.data.title}</h1> ${renderComponent($$result2, "UnsplashImage", $$UnsplashImage, { "article": entry })} ${renderComponent($$result2, "Content", Content, {})} </article>  <div class="flex justify-between my-8"> ${prevArticle && renderTemplate`<a${addAttribute(`/articles/${prevArticle.slug}`, "href")} class="text-blue-500 hover:underline">
← ${prevArticle.data.title} </a>`} ${nextArticle && renderTemplate`<a${addAttribute(`/articles/${nextArticle.slug}`, "href")} class="text-blue-500 hover:underline ml-auto"> ${nextArticle.data.title} →
</a>`} </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })} `;
}, "C:/Users/soto/projects/apologiesletter/src/pages/articles/[...slug].astro", void 0);

const $$file = "C:/Users/soto/projects/apologiesletter/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
