export async function translate(
  text: string,
  targetLanguage: string
) {
  return `[${targetLanguage}] ${text}`;
}