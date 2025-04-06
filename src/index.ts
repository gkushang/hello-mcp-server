import { createServer } from "@modelcontextprotocol/sdk/server/index.js";
import { setupHandlers } from "./handlers.js";

const server = createServer();
setupHandlers(server);

server.listen().then(() => {
  console.log("Server is running...");
});