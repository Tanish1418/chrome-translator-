import {
  askAI
}
from "./openRouterClient";

export async function translateText(
  text: string,
  targetLanguage: string
) {

  return await askAI(

`Translate the following into ${targetLanguage}.

Return ONLY the translated text.

${text}`,

{
  maxTokens: 500
}

  );

}

export async function detectLanguage(
  text: string
) {

  return await askAI(

`Detect the language.

Reply ONLY with the language name.

${text}`,

{
  maxTokens: 20
}

  );

}