import type { TranslationRecord } from "../types/translation";

const HISTORY_KEY = "translation_history";

export async function saveTranslation(
  record: TranslationRecord
): Promise<void> {
  const result = await chrome.storage.local.get(HISTORY_KEY);

  const history = (result[HISTORY_KEY] as TranslationRecord[]) || [];

  history.unshift(record);

  await chrome.storage.local.set({
    [HISTORY_KEY]: history,
  });
}

export async function getHistory(): Promise<TranslationRecord[]> {
  const result = await chrome.storage.local.get(HISTORY_KEY);

  return (result[HISTORY_KEY] as TranslationRecord[]) || [];
}