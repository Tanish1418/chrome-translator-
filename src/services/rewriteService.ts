import { askAI }
from "./openRouterClient";

export async function rewriteText(
  text: string,
  mode: string
) {

  let prompt = "";

  if (mode === "simple") {

    prompt =
`Rewrite this in simple language.

${text}`;

  }

  else if (
    mode === "professional"
  ) {

    prompt =
`Rewrite professionally.

${text}`;

  }

  else {

    prompt =
`Rewrite academically.

${text}`;

  }

  return await askAI(

prompt,

{
  maxTokens: 300
}

  );

}