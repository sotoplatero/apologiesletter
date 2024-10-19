/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C0JNFnrn.mjs';
import { $ as $$Layout } from '../chunks/Layout_Co3XW5Sr.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Dj_dWC6j.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Apology Letter Generator", "description": "Learn more about our mission to help people write heartfelt apologies" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold mb-8 text-center">About Us</h1> <div class="prose prose-lg mx-auto"> <p>
Welcome to the Apology Letter Generator, a platform dedicated to helping people mend relationships and foster understanding through well-crafted apologies.
</p> <h2>Our Mission</h2> <p>
Our mission is to provide a tool that assists individuals in expressing sincere apologies effectively. We believe that a thoughtful apology can be a powerful step towards healing and rebuilding trust in any relationship.
</p> <h2>How It Works</h2> <p>
Our AI-powered generator takes into account the specific situation, relationship, and desired tone to create personalized apology letters. While we provide the framework, we encourage users to add their personal touch to ensure the apology remains authentic and heartfelt.
</p> <h2>Our Values</h2> <ul> <li><strong>Sincerity:</strong> We promote genuine and honest communication.</li> <li><strong>Empathy:</strong> We encourage understanding others' feelings and perspectives.</li> <li><strong>Growth:</strong> We believe in learning from mistakes and using them as opportunities for personal development.</li> <li><strong>Reconciliation:</strong> We aim to help restore and strengthen relationships.</li> </ul> <h2>Get Started</h2> <p>
Ready to craft your apology? Use our generator to create a thoughtful and personalized letter that expresses your sincere regret and desire to make amends.
</p> </div> <div class="mt-12"> ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} </div> </main> ` })}`;
}, "C:/Users/soto/projects/apologiesletter/src/pages/about.astro", void 0);

const $$file = "C:/Users/soto/projects/apologiesletter/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
