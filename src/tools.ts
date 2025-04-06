export const tools = {
  greet: {
    name: "greet",
    description: "Send a greeting message",
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

export const toolHandlers = {
  greet: async (params: { name: string; style?: string }) => {
    const { name, style = "casual" } = params;
    return {
      message:
        style === "formal"
          ? `Dear ${name}, it's a pleasure to meet you.`
          : `Hey ${name}! Great to see you! 🎉`,
    };
  },
};