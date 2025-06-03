import fastify from "fastify";
import cors from "@fastify/cors";

import files from "@/routes/files";

const app = fastify();

const corsOptions = {
  origin: process.env.ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};

app.register(cors, corsOptions);

app.get("/", async () => {
  return "server runnig!";
});

app.register(files, { prefix: "files" });

app.listen({ port: 4433 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
