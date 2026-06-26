import { useState } from "react";

import TranslatorPage from "../pages/TranslatorPage";
import SummaryPage from "../pages/SummaryPage";
import ExplainPage from "../pages/ExplainPage";
import RewritePage from "../pages/RewritePage";
import GrammarPage from "../pages/GrammarPage";
import HistoryPage from "../pages/HistoryPage";
import SettingsPage from "../pages/SettingsPage";

export default function Popup() {

  const [tab, setTab] =
    useState("translator");

  return (

    <div
      style={{
        width: "520px",
        padding: "12px",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "10px"
        }}
      >

        <button
          onClick={() => setTab("translator")}
        >
          🌐 Translator
        </button>

        <button
          onClick={() => setTab("summary")}
        >
          📝 Summary
        </button>

        <button
          onClick={() => setTab("explain")}
        >
          💡 Explain
        </button>

        <button
          onClick={() => setTab("rewrite")}
        >
          ✍ Rewrite
        </button>

        <button
          onClick={() => setTab("grammar")}
        >
          ✅ Grammar
        </button>

        <button
          onClick={() => setTab("history")}
        >
          📜 History
        </button>

        <button
          onClick={() => setTab("settings")}
        >
          ⚙ Settings
        </button>

      </div>

      <hr />

      {tab === "translator" && <TranslatorPage />}

      {tab === "summary" && <SummaryPage />}

      {tab === "explain" && <ExplainPage />}

      {tab === "rewrite" && <RewritePage />}

      {tab === "grammar" && <GrammarPage />}

      {tab === "history" && <HistoryPage />}

      {tab === "settings" && <SettingsPage />}

    </div>

  );

}