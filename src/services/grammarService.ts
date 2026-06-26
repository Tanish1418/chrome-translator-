import { askAI } from "./openRouterClient";

export async function grammarCheck(
  text: string
): Promise<string> {

  return await askAI(

`You are an English grammar expert.

Correct the following text.

Rules:
- Correct grammar.
- Correct punctuation.
- Correct spelling.
- Preserve the original meaning.
- After the corrected version, briefly explain the important corrections.

Text:

${text}`,

{
  maxTokens: 500
}

  );

}