import { c as callOpenAIChatCompletion } from '../../chunks/openai_osUOsFXc.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request
}) => {
  const data = await request.formData();
  const recipient = data.get("recipient");
  const context = data.get("context");
  const tone = data.get("tone");
  if (!recipient || !context || !tone) {
    return new Response(JSON.stringify({
      error: "Missing required fields"
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  try {
    const prompt = `Generate an apology letter to ${recipient} with the following context: ${context}. The tone should be ${tone}.`;
    const response = await callOpenAIChatCompletion({
      systemPrompt: "You are an expert in writing apology letters. Create a well-structured and sincere apology letter based on the given information.",
      userPrompt: prompt
    });
    return new Response(JSON.stringify({
      letter: response
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error generating apology letter:", error);
    return new Response(JSON.stringify({
      error: "Failed to generate apology letter"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
