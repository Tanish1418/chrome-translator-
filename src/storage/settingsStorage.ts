export async function saveTargetLanguage(
  language: string
) {

  await chrome.storage.local.set({
    targetLanguage: language
  });

}

export async function getTargetLanguage(): Promise<string> {

  const result =
    await chrome.storage.local.get(
      "targetLanguage"
    );

  return typeof result.targetLanguage === "string"
    ? result.targetLanguage
    : "English";

}