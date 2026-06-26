export interface TranslationRecord {
  id: string;

  original: string;

  translated: string;

  sourceLanguage: string;

  targetLanguage: string;

  timestamp: number;
}