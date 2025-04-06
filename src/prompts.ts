export const prompts = {
  greeting: {
    name: "greeting",
    description: "Generate a greeting message",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
        style: { type: "string", enum: ["formal", "casual"] },
      },
      required: ["name"],
    },
  },
};

export const promptHandlers = {
  greeting: ({ name, style = "casual" }) => {
    const greetings = {
      formal: `Greetings, ${name}. Welcome to the Model Context Protocol.`,
      casual: `Hey ${name}! Welcome to MCP! 👋`,
    };
    return { text: greetings[style as keyof typeof greetings] };
  },
};
