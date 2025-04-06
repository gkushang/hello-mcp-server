import { createServer } from "@modelcontextprotocol/sdk/server/index.js";
import { setupHandlers } from "./handlers.js";

async function runTests() {
  const server = createServer();
  setupHandlers(server);

  // Test greeting resource
  const greetingResult = await server.handleRequest({
    method: "read_resource",
    params: { uri: "greeting" },
  });
  console.log("Greeting resource test:", greetingResult);

  // Test greeting template
  const templateResult = await server.handleRequest({
    method: "read_resource",
    params: { uri: "greeting/Alice" },
  });
  console.log("Greeting template test:", templateResult);

  // Test greeting prompt
  const promptResult = await server.handleRequest({
    method: "get_prompt",
    params: { name: "greeting", arguments: { name: "Bob", style: "formal" } },
  });
  console.log("Greeting prompt test:", promptResult);

  // Test greeting tool
  const toolResult = await server.handleRequest({
    method: "call_tool",
    params: {
      name: "greet",
      arguments: { name: "Charlie", style: "casual" },
    },
  });
  console.log("Greeting tool test:", toolResult);
}

runTests().catch(console.error);