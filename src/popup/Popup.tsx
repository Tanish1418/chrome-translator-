import { useState } from "react";

import TranslatorPage from "../pages/TranslatorPage";
import SummaryPage from "../pages/SummaryPage";
import OCRPage from "../pages/OCRPage";
import ExplainPage from "../pages/ExplainPage";
import RewritePage from "../pages/RewritePage";
import HistoryPage from "../pages/HistoryPage";
import SettingsPage from "../pages/SettingsPage";

export default function Popup() {

  const [tab, setTab] =
    useState("translator");

  return (
    <div
      style={{
        width: "500px",
        padding: "10px"
      }}
    >

      <button onClick={() => setTab("translator")}>
        Translator
      </button>

      <button onClick={() => setTab("summary")}>
        Summary
      </button>

      <button onClick={() => setTab("ocr")}>
        OCR
      </button>

      <button onClick={() => setTab("explain")}>
        Explain
      </button>

      <button onClick={() => setTab("rewrite")}>
        Rewrite
      </button>

      <button onClick={() => setTab("history")}>
        History
      </button>

      <button onClick={() => setTab("settings")}>
        Settings
      </button>

      <hr />

      {tab === "translator" && <TranslatorPage />}
      {tab === "summary" && <SummaryPage />}
      {tab === "ocr" && <OCRPage />}
      {tab === "explain" && <ExplainPage />}
      {tab === "rewrite" && <RewritePage />}
      {tab === "history" && <HistoryPage />}
      {tab === "settings" && <SettingsPage />}

    </div>
  );
}