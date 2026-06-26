export interface AIOptions {

  maxTokens?: number;

  temperature?: number;

}

export async function askAI(

  prompt: string,

  options: AIOptions = {}

): Promise<string> {

  const storage =
    await chrome.storage.local.get(
      "openrouterApiKey"
    );

  const apiKey =
    storage.openrouterApiKey;

  if (!apiKey) {

    return "OpenRouter API Key not set";

  }

  try {

    const response =
      await fetch(

        "https://openrouter.ai/api/v1/chat/completions",

        {

          method: "POST",

          headers: {

            Authorization:
              `Bearer ${apiKey}`,

            "Content-Type":
              "application/json"

          },

          body: JSON.stringify({

            model:
              "openai/gpt-4o-mini",

            max_tokens:
              options.maxTokens ?? 300,

            temperature:
              options.temperature ?? 0.3,

            messages: [

              {

                role: "user",

                content: prompt

              }

            ]

          })

        }

      );

    const data =
      await response.json();

    console.log(
      "AI STATUS:",
      response.status
    );

    console.log(
      "AI RESPONSE:",
      data
    );

    if (!response.ok) {

      if (response.status === 401)
        return "Invalid OpenRouter API Key.";

      if (response.status === 402)
        return "OpenRouter account has insufficient credits.";

      if (response.status === 429)
        return "Too many requests. Please try again.";

      if (response.status >= 500)
        return "OpenRouter server error.";

      return "AI request failed.";

    }

    return (

      data.choices?.[0]
        ?.message?.content ||

      "No response."

    );

  }

  catch (error) {

    console.error(error);

    return "Network error.";

  }

}