import { useState } from "react";

import { grammarCheck } from "../services/grammarService";

import { saveHistory } from "../storage/historyStorage";

export default function GrammarPage() {

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleGrammar() {

    if (!input.trim()) return;

    setLoading(true);

    const result =
      await grammarCheck(input);

    setOutput(result);

    await saveHistory({

      id: crypto.randomUUID(),

      action: "rewrite",

      input,

      output: result,

      timestamp: Date.now()

    });

    setLoading(false);

  }

  async function copyResult() {

    if (!output) return;

    await navigator.clipboard.writeText(output);

    alert("Copied!");

  }

  return (

    <div>

      <h2>
        AI Grammar Checker
      </h2>

      <textarea

        rows={8}

        value={input}

        onChange={(e)=>
          setInput(e.target.value)
        }

        placeholder="Enter text..."

      />

      <br/><br/>

      <button
        onClick={handleGrammar}
      >
        Check Grammar
      </button>

      {" "}

      <button
        onClick={copyResult}
      >
        Copy
      </button>

      <br/><br/>

      {

        loading

        ?

        <p>
          Checking...
        </p>

        :

        <pre
          style={{
            whiteSpace:"pre-wrap"
          }}
        >
          {output}
        </pre>

      }

    </div>

  );

}