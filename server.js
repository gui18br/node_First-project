import { fastify } from "fastify";
import { DataBaseMemory } from "./data-base-memory.js";
import { request } from "express";

const server = fastify();

const database = new DataBaseMemory();

// Request BODY

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
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

server.put("/videos/:id", (request, reply) => {
  const videosId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videosId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
