import { server } from "./server/server";

server.get("/", (request, response) => {});

server.listen({ port: 3434 }, () => console.log("App rodando!"));
