import { translate }
from "./mockProvider";

export async function translateText(
  text: string,
  targetLanguage: string
) {

  return translate(
    text,
    targetLanguage
  );

}