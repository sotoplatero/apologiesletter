/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_C0JNFnrn.mjs';
import { $ as $$Layout } from '../chunks/Layout_Co3XW5Sr.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Dj_dWC6j.mjs';
import { g as getCollection } from '../chunks/_astro_content_DfoJH9Sl.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gray-900 text-white"> <section class="flex items-center"> <!-- <div class="absolute inset-0 z-0">
      <Image 
        src={heroImage} 
        alt="Background image of a person writing a letter" 
        class="object-cover w-full h-full opacity-50"
      />
    </div> --> <div class="relative z-10 w-full px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center"> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-4xl mx-auto">
Mend Relationships with Heartfelt Apologies
</h1> <p class="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
Create personalized apology letters that express your sincere regret and help rebuild trust.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/generator" class="btn btn-primary btn-lg">
Generate Apology Letter
</a> </div> </div> </section> </div>`;
}, "C:/Users/soto/projects/apologiesletter/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const recentArticles = await getCollection("articles").then((articles) => articles.slice(0, 4));
  const steps = [
    {
      title: "Recipient",
      description: "Select who you're apologizing to from our list of common relationships.",
      icon: "\u{1F465}"
    },
    {
      title: "Situation",
      description: "Briefly explain the context and reason for your apology.",
      icon: "\u270D\uFE0F"
    },
    {
      title: "Tone",
      description: "Pick the appropriate tone for your apology letter.",
      icon: "\u{1F3AD}"
    },
    {
      title: "Generate",
      description: "Our AI creates a personalized apology letter based on your inputs.",
      icon: "\u{1F4DD}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Apology Letter Generator", "description": "Create personalized apology letters and explore our collection of apology articles" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-24"> <section class="mb-32"> <h2 class="text-4xl font-bold mb-16 text-center text-gray-800">How It Works</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${steps.map((step, index) => renderTemplate`<div class="flex flex-col items-center text-center bg-white rounded-lg transition-transform duration-300 hover:scale-105"> <div class="text-6xl mb-6 bg-base-200 text-white rounded-full p-4 w-24 h-24 flex items-center justify-center">${step.icon}</div> <h3 class="text-2xl font-semibold mb-4 text-gray-800">${index + 1}. ${step.title}</h3> <p class="text-gray-600 text-lg">${step.description}</p> </div>`)} </div> </section> <section class="my-32"> <h2 class="text-4xl font-bold mb-16 text-center text-gray-800">Recent Articles</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> ${recentArticles.map((article) => renderTemplate`<article class="bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"> ${article.data.image && renderTemplate`<img${addAttribute(article.data.image, "src")}${addAttribute(article.data.title, "alt")} class="w-full aspect-video object-cover">`} <div class="p-8"> <h3 class="text-2xl font-semibold mb-4 text-gray-800"> <a${addAttribute(`/articles/${article.slug}`, "href")} class="hover:text-primary transition-colors duration-300"> ${article.data.title} </a> </h3> <p class="text-gray-600 text-lg mb-4">${article.data.description}</p> <a${addAttribute(`/articles/${article.slug}`, "href")} class="text-primary hover:underline inline-flex items-center">
Read more
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </article>`)} </div> <div class="text-center mt-16"> <a href="/articles" class="btn btn-primary btn-lg">View All Articles</a> </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} </main> ` })}`;
}, "C:/Users/soto/projects/apologiesletter/src/pages/index.astro", void 0);

const $$file = "C:/Users/soto/projects/apologiesletter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
