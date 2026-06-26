import { useState }
from "react";

import {
  summarizeText
}
from "../services/summaryService";

export default function SummaryPage() {

  const [
    text,
    setText
  ] = useState("");

  const [
    summary,
    setSummary
  ] = useState("");

  async function handleSummary() {

    const result =
      await summarizeText(
        text
      );

    setSummary(
      result
    );

  }

  return (

    <div>

      <h2>
        AI Summarizer
      </h2>

      <textarea

        rows={8}

        value={text}

        onChange={(e) =>
          setText(
            e.target.value
          )
        }

      />

      <br />

      <button
        onClick={
          handleSummary
        }
      >
        Summarize
      </button>

      <br />
      <br />

      <pre>
        {summary}
      </pre>

    </div>

  );

}