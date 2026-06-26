import {
  getTargetLanguage
} from "../storage/settingsStorage";

import {
  translateText as aiTranslate
} from "./aiActions";

export async function translateText(
  text: string
): Promise<string> {

  const language =
    await getTargetLanguage();

  return aiTranslate(
    text,
    language
  );

}