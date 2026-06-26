const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log("API KEY:", API_KEY);
export async function askGemini(
  prompt: string
): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      return JSON.stringify(data, null, 2);
    }

    return (
      data.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text || "No response"
    );
  } catch (error) {
    return String(error);
  }
}