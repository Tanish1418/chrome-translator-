import {
  useEffect,
  useState
}
from "react";

import {
  rewriteText
}
from "../services/rewriteService";

export default function RewritePage() {

  const [
    result,
    setResult
  ] = useState("");

  useEffect(() => {

    async function load() {

      const data =
        await chrome.storage.local.get([
          "rewriteText",
          "rewriteMode"
        ]);

      const rewritten =
        await rewriteText(
          String(
            data.rewriteText || ""
          ),
          String(
            data.rewriteMode || "simple"
          )
        );

      setResult(
        rewritten
      );

    }

    load();

  }, []);

  return (

    <div>

      <h2>
        AI Rewrite
      </h2>

      <pre>
        {result}
      </pre>

    </div>

  );

}