export function detectLanguage(
  text: string
) {

  if (
    /[\u0900-\u097F]/
      .test(text)
  ) {
    return "Hindi";
  }

  return "English";
}