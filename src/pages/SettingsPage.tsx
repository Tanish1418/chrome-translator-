import { useState } from "react";

import {
  saveTargetLanguage
} from "../storage/settingsStorage";

export default function SettingsPage() {

  const [
    apiKey,
    setApiKey
  ] = useState("");

  const [
    language,
    setLanguage
  ] = useState("English");

  async function save() {

    await chrome.storage.local.set({
      openrouterApiKey:
        apiKey
    });

    await saveTargetLanguage(
      language
    );

    alert(
      "Settings Saved"
    );

  }

  return (

    <div>

      <h2>
        Settings
      </h2>

      <input

        type="password"

        placeholder="
OpenRouter API Key
"

        value={apiKey}

        onChange={(e) =>
          setApiKey(
            e.target.value
          )
        }

      />

      <br />
      <br />

      <select

        value={language}

        onChange={(e) =>
          setLanguage(
            e.target.value
          )
        }

      >

        <option>
          English
        </option>

        <option>
          Hindi
        </option>

        <option>
          French
        </option>

        <option>
          German
        </option>

        <option>
          Spanish
        </option>

        <option>
          Italian
        </option>

        <option>
          Portuguese
        </option>

        <option>
          Russian
        </option>

        <option>
          Chinese
        </option>

        <option>
          Japanese
        </option>

        <option>
          Korean
        </option>

        <option>
          Arabic
        </option>

        <option>
          Turkish
        </option>

      </select>

      <br />
      <br />

      <button
        onClick={save}
      >
        Save Settings
      </button>

    </div>

  );

}