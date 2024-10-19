/* empty css                                 */
import { a as createComponent, r as renderTemplate, e as defineScriptVars, b as addAttribute, f as createTransitionScope, m as maybeRenderHead, c as createAstro, d as renderComponent } from '../chunks/astro/server_C0JNFnrn.mjs';
import { $ as $$Layout } from '../chunks/Layout_Co3XW5Sr.mjs';
import { a as actions } from '../chunks/_astro_actions_B-kghmPh.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ApologyWizard = createComponent(($$result, $$props, $$slots) => {
  const tones = [
    { value: "formal", label: "Formal" },
    { value: "casual", label: "Casual" },
    { value: "heartfelt", label: "Heartfelt" },
    { value: "professional", label: "Professional" },
    { value: "sincere", label: "Sincere" },
    { value: "remorseful", label: "Remorseful" }
  ];
  const recipients = [
    { value: "mother", label: "Mother" },
    { value: "father", label: "Father" },
    { value: "spouse", label: "Spouse" },
    { value: "friend", label: "Friend" },
    { value: "colleague", label: "Colleague" },
    { value: "romantic", label: "Romantic partner" },
    { value: "boss", label: "Boss" },
    { value: "client", label: "Client" },
    { value: "teacher", label: "Teacher" }
  ];
  const defaultTone = tones[0].value;
  const defaultRecipient = recipients[0].value;
  return renderTemplate(_a || (_a = __template(["", '<div class="card w-full max-w-2xl bg-base-100 shadow-xl mx-auto"> <div class="card-body"> <form', ' method="POST" id="apologyWizard" class="space-y-4"> <div class="step-container min-h-[200px]"> <div class="step" data-step="1"> <h2 class="card-title mb-4">Relationship with the recipient</h2> <select name="relationship" class="select select-bordered w-full" required', "> ", ' </select> </div> <div class="step hidden" data-step="2"> <h2 class="card-title mb-4">Context or situation</h2> <textarea name="context" rows="4" class="textarea textarea-bordered w-full" required placeholder="Provide some context about the situation..."', '></textarea> </div> <div class="step hidden" data-step="3"> <h2 class="card-title mb-4">Desired tone</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> ', ' </div> <input type="hidden" name="tone"', " required", '> </div> </div> <div class="card-actions justify-end mt-6"> <button type="button" id="prevBtn" class="btn btn-ghost">Previous</button> <button type="button" id="nextBtn" class="btn btn-primary">Next</button> </div> </form> </div> </div> <script>(function(){', `
  let currentStep = 1;
  const totalSteps = 3;

  const form = document.getElementById('apologyWizard');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function showStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
    document.querySelector(\`.step[data-step="\${step}"]\`)?.classList.remove('hidden');
    
    prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
    nextBtn.textContent = step === totalSteps ? 'Submit' : 'Next';
  }

  function validateStep(step) {
    const currentStepElement = document.querySelector(\`.step[data-step="\${step}"]\`);
    const inputs = currentStepElement?.querySelectorAll('input:not([type="hidden"]), select, textarea');
    return Array.from(inputs || []).every((input) => input.checkValidity());
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        // Handle form submission
        form.submit();
      }
    } else {
      alert('Please fill out all required fields before proceeding.');
    }
  });

  // Tone button functionality
  const toneButtons = document.querySelectorAll('.tone-btn');
  const toneInput = document.querySelector('input[name="tone"]');

  toneButtons.forEach(button => {
    button.addEventListener('click', () => {
      toneButtons.forEach(btn => btn.classList.remove('btn-active'));
      button.classList.add('btn-active');
      toneInput.value = button.getAttribute('data-value') || '';
    });
  });

  // Initialize with the first step, default tone and default recipient
  showStep(currentStep);
  toneInput.value = defaultTone;
  document.querySelector('select[name="relationship"]').value = defaultRecipient;
})();<\/script>`], ["", '<div class="card w-full max-w-2xl bg-base-100 shadow-xl mx-auto"> <div class="card-body"> <form', ' method="POST" id="apologyWizard" class="space-y-4"> <div class="step-container min-h-[200px]"> <div class="step" data-step="1"> <h2 class="card-title mb-4">Relationship with the recipient</h2> <select name="relationship" class="select select-bordered w-full" required', "> ", ' </select> </div> <div class="step hidden" data-step="2"> <h2 class="card-title mb-4">Context or situation</h2> <textarea name="context" rows="4" class="textarea textarea-bordered w-full" required placeholder="Provide some context about the situation..."', '></textarea> </div> <div class="step hidden" data-step="3"> <h2 class="card-title mb-4">Desired tone</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> ', ' </div> <input type="hidden" name="tone"', " required", '> </div> </div> <div class="card-actions justify-end mt-6"> <button type="button" id="prevBtn" class="btn btn-ghost">Previous</button> <button type="button" id="nextBtn" class="btn btn-primary">Next</button> </div> </form> </div> </div> <script>(function(){', `
  let currentStep = 1;
  const totalSteps = 3;

  const form = document.getElementById('apologyWizard');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function showStep(step) {
    document.querySelectorAll('.step').forEach(el => el.classList.add('hidden'));
    document.querySelector(\\\`.step[data-step="\\\${step}"]\\\`)?.classList.remove('hidden');
    
    prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
    nextBtn.textContent = step === totalSteps ? 'Submit' : 'Next';
  }

  function validateStep(step) {
    const currentStepElement = document.querySelector(\\\`.step[data-step="\\\${step}"]\\\`);
    const inputs = currentStepElement?.querySelectorAll('input:not([type="hidden"]), select, textarea');
    return Array.from(inputs || []).every((input) => input.checkValidity());
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      } else {
        // Handle form submission
        form.submit();
      }
    } else {
      alert('Please fill out all required fields before proceeding.');
    }
  });

  // Tone button functionality
  const toneButtons = document.querySelectorAll('.tone-btn');
  const toneInput = document.querySelector('input[name="tone"]');

  toneButtons.forEach(button => {
    button.addEventListener('click', () => {
      toneButtons.forEach(btn => btn.classList.remove('btn-active'));
      button.classList.add('btn-active');
      toneInput.value = button.getAttribute('data-value') || '';
    });
  });

  // Initialize with the first step, default tone and default recipient
  showStep(currentStep);
  toneInput.value = defaultTone;
  document.querySelector('select[name="relationship"]').value = defaultRecipient;
})();<\/script>`])), maybeRenderHead(), addAttribute(actions.createLetter, "action"), addAttribute(createTransitionScope($$result, "lpibrcoi"), "data-astro-transition-persist"), recipients.map((r) => renderTemplate`<option${addAttribute(r.value, "value")}${addAttribute(r.value === defaultRecipient, "selected")}>${r.label}</option>`), addAttribute(createTransitionScope($$result, "2aqr776f"), "data-astro-transition-persist"), tones.map((tone) => renderTemplate`<button type="button"${addAttribute(`tone-btn btn btn-outline ${tone.value === defaultTone ? "btn-active" : ""}`, "class")}${addAttribute(tone.value, "data-value")}> ${tone.label} </button>`), addAttribute(defaultTone, "value"), addAttribute(createTransitionScope($$result, "jtxomohk"), "data-astro-transition-persist"), defineScriptVars({ defaultTone, defaultRecipient }));
}, "C:/Users/soto/projects/apologiesletter/src/components/ApologyWizard.astro", "self");

const $$Astro = createAstro("https://writeapologyletter.com");
const prerender = "false";
const $$Generator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Generator;
  const result = Astro2.getActionResult(actions.createLetter);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Generate Apology Letter", "description": "Create a personalized apology letter with our easy-to-use wizard." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8 text-center">Generate Your Apology Letter</h1> ${renderComponent($$result2, "ApologyWizard", $$ApologyWizard, { "initialStep": 1, "recipient": "" })} ${result?.error && renderTemplate`<p class="error">Unable to generate apology letter. Please try again later. Error: ${result.error}</p>`} <div class="prose prose-lg mx-auto"> ${result && result?.data?.letter && !result.error && renderTemplate`<h2 class="">Here is your apology letter</h2>
            
            <div class="success"> <blockquote class="bg-gray-100 p-4 rounded-md border border-gray-300 whitespace-pre-line">${result.data.letter}</blockquote> </div>`} </div> </main> ` })}`;
}, "C:/Users/soto/projects/apologiesletter/src/pages/generator.astro", void 0);

const $$file = "C:/Users/soto/projects/apologiesletter/src/pages/generator.astro";
const $$url = "/generator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Generator,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
