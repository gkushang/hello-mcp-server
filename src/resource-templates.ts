const templates = new Map<string, () => { content: string }>();

export const resourceTemplates = [
  {
    uri: "greeting/{name}",
    description: "A personalized greeting message",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    },
  },
];

export const getResourceTemplate = (
  uri: string
): (() => { content: string }) | undefined => {
  if (uri.startsWith("greeting/")) {
    const name = uri.split("/")[1];
    return () => ({
      content: `Hello, ${name}! Welcome to our MCP server! 👋`,
    });
  }
  return undefined;
};