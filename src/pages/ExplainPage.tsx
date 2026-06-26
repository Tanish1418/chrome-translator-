import { useEffect, useState } from "react";

import {
  explainText
} from "../services/explainService";

export default function ExplainPage() {

  const [
    result,
    setResult
  ] = useState("");

  const [
    selectedText,
    setSelectedText
  ] = useState("");

  useEffect(() => {

    async function load() {

      const data =
        await chrome.storage.local.get(
          "selectedText"
        );

      console.log(
        "SELECTED TEXT:",
        data.selectedText
      );

      const text =
        String(
          data.selectedText || ""
        );

      setSelectedText(
        text
      );

      if (!text) {

        setResult(
          "No selected text found. Highlight text on a webpage and choose 'Explain Selected Text'."
        );

        return;

      }

      const explanation =
        await explainText(
          text
        );

      setResult(
        explanation
      );

    }

    load();

  }, []);

  return (

    <div>

      <h2>
        AI Explanation
      </h2>

      <h4>
        Selected Text:
      </h4>

      <pre>
        {selectedText}
      </pre>

      <hr />

      <h4>
        Explanation:
      </h4>

      <pre>
        {result}
      </pre>

    </div>

  );

}