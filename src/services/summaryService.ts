import { askAI }
from "./openRouterClient";

export async function summarizeText(
  text: string
) {

  return await askAI(

`Summarize the following text.

Rules:
- Maximum 8 bullet points.
- Simple language.
- Keep only important information.

${text}`,

{
  maxTokens: 300
}

  );

}