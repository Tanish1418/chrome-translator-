import { useState } from "react";

import {
  extractTextFromImage
} from "../services/ocrService";

import {
  translateText
} from "../services/aiActions";

export default function OCRPage() {

  const [ocrText,
    setOcrText] =
      useState("");

  const [translated,
    setTranslated] =
      useState("");

  async function upload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      e.target.files?.[0];

    if (!file)
      return;

    const text =
      await extractTextFromImage(
        file
      );

    setOcrText(text);

  }

  async function translateOCR() {

    const result =
      await translateText(
        ocrText,
        "English"
      );

    setTranslated(
      result
    );

  }

  return (

    <div>

      <h2>
        OCR Translator
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={upload}
      />

      <br />
      <br />

      <button
        onClick={
          translateOCR
        }
      >
        Translate OCR
      </button>

      <h3>
        Extracted Text
      </h3>

      <pre>
        {ocrText}
      </pre>

      <h3>
        Translation
      </h3>

      <pre>
        {translated}
      </pre>

    </div>

  );

}