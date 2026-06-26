import type {
  HistoryItem
} from "../types/history";

export async function saveHistory(
  item: HistoryItem
) {

  const result =
    await chrome.storage.local.get(
      "history"
    );

  const history: HistoryItem[] =
    Array.isArray(result.history)
      ? result.history
      : [];

  history.unshift(item);

  await chrome.storage.local.set({
    history
  });

}

export async function getHistory(): Promise<HistoryItem[]> {

  const result =
    await chrome.storage.local.get(
      "history"
    );

  return Array.isArray(
    result.history
  )
    ? result.history
    : [];

}

export async function clearHistory() {

  await chrome.storage.local.set({
    history: []
  });

}