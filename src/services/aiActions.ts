import { askAI } from "./openRouterClient";

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {

  return await askAI(

`You are a professional translator.

Translate the following text into ${targetLanguage}.

Rules:
- Return ONLY the translated text.
- Keep formatting.
- Do not explain.

Text:

${text}`,

{
  maxTokens: 500
}

  );

}

export async function detectLanguage(
  text: string
): Promise<string> {

  return await askAI(

`Detect the language of the following text.

Reply ONLY with the language name.

${text}`,

{
  maxTokens: 20
}

  );

}