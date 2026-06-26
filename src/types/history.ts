export interface HistoryItem {

  id: string;

  action:
    | "translate"
    | "summarize"
    | "detect"
    | "rewrite"
    | "explain"
    | "ocr"
    | "pageTranslate";

  input: string;

  output: string;

  timestamp: number;

}