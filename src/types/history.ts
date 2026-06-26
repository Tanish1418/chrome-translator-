export interface HistoryItem {
  id: string;
  action:
    | "translate"
    | "summarize";

  input: string;

  output: string;

  timestamp: number;
}