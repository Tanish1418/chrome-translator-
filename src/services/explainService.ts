import { askAI }
from "./openRouterClient";

export async function explainText(
  text: string
) {

  return await askAI(

`Explain this in simple language.

${text}`,

{
  maxTokens: 300
}

  );

}