import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_C0JNFnrn.mjs';

const $$Astro = createAstro("https://writeapologyletter.com");
const $$UnsplashImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UnsplashImage;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="not-prose"> <div class="aspect-video overflow-hidden rounded-lg "> ${article.data.image && renderTemplate`<img${addAttribute(article.data.image, "src")}${addAttribute(article.data.title || "", "alt")} class="w-full object-cover" loading="lazy">`} </div> <figcaption class="text-right text-xs text-gray-400 mt-1">
Photo by ${article.data.photographer ? renderTemplate`<a${addAttribute(article.data.photographerUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline"> ${article.data.photographer} </a>` : "Unknown photographer"} on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Unsplash</a> </figcaption> </figure>`;
}, "C:/Users/soto/projects/apologiesletter/src/components/UnsplashImage.astro", void 0);

export { $$UnsplashImage as $ };
