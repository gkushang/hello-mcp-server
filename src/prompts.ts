export const prompts = {
  greeting: {
    name: "greeting",
    description: "A friendly greeting message",
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
  greeting: (args: { name: string; style?: string }) => {
    const { name, style = "casual" } = args;
    return {
      content:
        style === "formal"
          ? `Dear ${name}, welcome to our service.`
          : `Hey ${name}! Welcome aboard! 👋`,
    };
  },
};