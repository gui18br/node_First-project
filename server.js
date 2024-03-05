import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory.js";
import { request } from "express";
import { DataBasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DataBasePostgres();

// Request BODY

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", (request, reply) => {
  const search = request.query.search;

  const videos = database.list(search);

  return videos;
});

server.put("/videos/:id", async (request, reply) => {
  const videosId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videosId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
