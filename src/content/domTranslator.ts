import {
  saveHistory
} from "../storage/historyStorage";

import {
  translateText
} from "../services/translationService";

export function getAllTextNodes() {

  const walker =
    document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

  const nodes: Text[] = [];

  let node;

  while (
    (node = walker.nextNode())
  ) {

    const textNode =
      node as Text;

    if (
      textNode.nodeValue &&
      textNode.nodeValue.trim() &&
      textNode.nodeValue.trim().length > 3
    ) {

      nodes.push(textNode);

    }

  }

  return nodes;

}

export async function translateNodes() {

  console.log(
    "TRANSLATE NODES STARTED"
  );

  const nodes =
    getAllTextNodes();

  console.log(
    "NODE COUNT:",
    nodes.length
  );

  for (
    const node of nodes
  ) {

    const original =
      node.nodeValue ?? "";

    try {

      const translated =
        await translateText(
          original
        );

      node.nodeValue =
        translated;

      await saveHistory({

        id:
          crypto.randomUUID(),

        action:
          "translate",

        input:
          original,

        output:
          translated,

        timestamp:
          Date.now()

      });

    } catch (error) {

      console.error(
        "Translation Error:",
        error
      );

    }

  }

  console.log(
    "PAGE TRANSLATION FINISHED"
  );

}