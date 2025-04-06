export const resources = [
  {
    uri: "greeting",
    description: "A simple greeting message",
  },
];

export const resourceHandlers = {
  greeting: () => ({
    content: "Hello from the MCP server! 👋",
  }),
};