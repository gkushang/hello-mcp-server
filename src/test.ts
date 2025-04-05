import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { spawn } from "child_process";

async function main() {
  try {
    // Start the server as a separate process
    const serverProcess = spawn("node", ["build/index.js"], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    // Log server output for debugging
    serverProcess.stdout.on("data", (data) => {
      console.log("Server output:", data.toString());
    });
    serverProcess.stderr.on("data", (data) => {
      console.error("Server error:", data.toString());
    });

    // Create MCP client
    const client = new Client({
      name: "test-client",
      version: "1.0.0",
    });

    const transport = new StdioClientTransport({
      command: "node",
      args: ["build/index.js"],
    });

    console.log("Connecting to server...");
    await client.connect(transport);

    // Test 1: Get greeting for Frank
    console.log("\nGetting greeting for Frank...");
    const frankGreeting = await client.readResource({
      uri: "greetings://Frank",
    });
    console.log("Frank's greeting:", JSON.stringify(frankGreeting, null, 2));

    // Cleanup
    console.log("\nTests completed successfully!");
    serverProcess.kill();
    process.exit(0);
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  }
}

main();