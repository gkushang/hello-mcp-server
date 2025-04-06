export const resourceTemplates = [
  {
    uriTemplate: "greetings://{name}",
    name: "Personal Greeting",
    description: "A personalized greeting message",
    mimeType: "text/plain",
  },
];

export const getResourceTemplate = (uri: string) => {
  const greetingExp = /^greetings:\/\/(.+)$/;
  const greetingMatch = uri.match(greetingExp);
  
  if (greetingMatch) {
    const name = decodeURIComponent(greetingMatch[1]);
    return () => ({
      contents: [
        {
          uri,
          text: `Hello, ${name}! Welcome to MCP.`,
        },
      ],
    });
  }
  
  return null;
};
