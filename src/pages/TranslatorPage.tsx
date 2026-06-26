import { useState } from "react";
import {
  translateText,
  detectLanguage,
} from "../services/aiActions";

export default function TranslatorPage() {

  const [input, setInput] =
    useState("");

  const [output, setOutput] =
    useState("");

  const [language, setLanguage] =
    useState("English");

  const [detectedLanguage,
    setDetectedLanguage] =
      useState("");

  async function handleTranslate() {

    const result =
      await translateText(
        input,
        language
      );

    setOutput(result);

  }

  async function handleDetect() {

    const result =
      await detectLanguage(
        input
      );

    setDetectedLanguage(
      result
    );

  }

  function speakResult() {

    if (!output)
      return;

    const utterance =
      new SpeechSynthesisUtterance(
        output
      );

    speechSynthesis.speak(
      utterance
    );

  }

  return (

    <div>

      <h2>
        Universal AI Translator
      </h2>

      <textarea

        rows={8}

        value={input}

        onChange={(e) =>
          setInput(
            e.target.value
          )
        }

        placeholder="
Enter text to translate
"

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

        <option>
          Dutch
        </option>

      </select>

      <br />
      <br />

      <button
        onClick={
          handleTranslate
        }
      >
        Translate
      </button>

      <button
        onClick={
          handleDetect
        }
      >
        Detect Language
      </button>

      <button
        onClick={
          speakResult
        }
      >
        Speak
      </button>

      <br />
      <br />

      <div>

        <b>
          Detected:
        </b>

        {" "}

        {
          detectedLanguage
        }

      </div>

      <br />

      <pre>
        {output}
      </pre>

    </div>

  );

}