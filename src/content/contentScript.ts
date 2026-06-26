import {
  translateNodes
} from "./domTranslator";

console.log(
  "AI Translator Loaded"
);

chrome.runtime.onMessage.addListener(
  (
    message,
    _sender,
    sendResponse
  ) => {

    if (
      message.action ===
      "TRANSLATE_PAGE"
    ) {

      translateNodes()
        .then(() => {

          sendResponse({
            success: true
          });

        });

      return true;

    }

  }
);