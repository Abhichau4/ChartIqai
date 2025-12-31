const NVIDIA_API_URL = "/api/nvidia";
const NVIDIA_API_KEY = import.meta.env.VITE_NVIDIA_API_KEY;

interface ChatCompletionResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
}

export const analyzeChartWithVision = async (imageBuffer: string, query: string = "Analyze this chart's technical patterns, support, and resistance levels.") => {
    if (!NVIDIA_API_KEY) {
        throw new Error("NVIDIA API Key not configured.");
    }

    const response = await fetch(`${NVIDIA_API_URL}/chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
            model: "meta/llama-3.2-11b-vision-instruct",
            messages: [
                {
                    role: "system",
                    content: "You are a Senior Institutional Analyst. Provide concise, high-signal technical analysis. Focus on Market Structure (BOS/CHoCH), Order Blocks, and Liquidity. Avoid fluff. Be direct and professional."
                },
                {
                    role: "user",
                    content: [
                        { type: "text", text: query },
                        { type: "image_url", image_url: { url: imageBuffer } },
                    ],
                },
            ],
            max_tokens: 1024,
            temperature: 0.1,
            stream: false,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`NVIDIA API Error: ${response.status} ${JSON.stringify(errorData)}`);
    }

    const data: ChatCompletionResponse = await response.json();

    if (!data.choices || data.choices.length === 0) {
        throw new Error("AI returned an empty response. Please check your API key and connection.");
    }

    return data.choices[0].message.content;
};

export const getDeepSeekTeaching = async (query: string, context: string = "", history: { role: "user" | "assistant", content: string }[] = []) => {
    if (!NVIDIA_API_KEY) {
        throw new Error("NVIDIA API Key not configured.");
    }

    const systemPrompt = `You are a helpful friend teaching a complete beginner.
- **Goal**: Teach the lesson topics in order. 
- **Style**: Simple, human language. No complex jargon.
- **Rule**: Explain a FULL topic clearly (like Topic 1) and ONLY then ask "Does that make sense?" or "Did you understand?".
- **Progression**: Check the chat history to see which topics you have already covered. Never repeat yourself. If Topic 1 is done, move to Topic 2.
- **Keep it brief**: Use short paragraphs. Use simple analogies (like swapping toys).
- **VISUAL AIDS**: When teaching visual concepts (candlestick patterns, chart patterns), YOU MUST Use these specific image URLs. Do NOT use ASCII art.
  
  **Mandatory Image Library**:
  - Doji: ![Doji](https://upload.wikimedia.org/wikipedia/commons/e/ec/Doji.svg)
  - Hammer: ![Hammer](https://upload.wikimedia.org/wikipedia/commons/d/d0/Candlestick_pattern_hammer.svg)
  - Shooting Star: ![Shooting Star](https://upload.wikimedia.org/wikipedia/commons/e/e5/Candlestick_pattern_Shooting_Star.svg)
  - Bullish Engulfing: ![Bullish Engulfing](https://upload.wikimedia.org/wikipedia/commons/2/22/Candlestick_pattern_bullish_engulfing.svg)

  When explaining these concepts, ALWAYS embed the matching image using the markdown format above.

- **After all topics are covered**: When you finish teaching ALL the lesson topics, ask the user with numbered options:
  "1. Do you have any questions?
   2. Would you like to practice what you've learned?"
- **IMPORTANT - Related Topics**: You MUST ALWAYS end your responses by suggesting 2-3 DETAILED related topics. After "Does that make sense?" ALWAYS add specific, descriptive topic suggestions. NOT single words - use full phrases like:
  
  "If you want, I can also explain:
  • How stocks are traded on the stock exchange
  • The difference between stocks and bonds
  • How to read stock charts and prices"
  
  Make each suggestion a FULL DESCRIPTIVE PHRASE, not just one word. This is MANDATORY.
${context ? `Active Lesson Curriculum: ${context}` : ""}`;

    const messages = [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: query }
    ];

    const response = await fetch(`${NVIDIA_API_URL}/chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
            model: "meta/llama-3.3-70b-instruct",
            messages: messages,
            max_tokens: 2048,
            temperature: 0.5,
            stream: false,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`NVIDIA API Error: ${response.status} ${JSON.stringify(errorData)}`);
    }

    const data: ChatCompletionResponse = await response.json();

    if (!data.choices || data.choices.length === 0) {
        throw new Error("AI returned an empty response. Please check your API key and connection.");
    }

    return data.choices[0].message.content;
};
