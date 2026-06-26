const cache =
  new Map<
    string,
    string
  >();

export function getCachedTranslation(
  text: string
) {

  return cache.get(text);

}

export function setCachedTranslation(
  text: string,
  translated: string
) {

  cache.set(
    text,
    translated
  );

}