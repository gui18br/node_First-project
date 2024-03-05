import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DataBasePostgres {
  #videos = new Map();

  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from video where title ilike "%${search}%"`;
    } else {
      videos = await sql`select * from video`;
    }

    return videos;
  }

  async create(video) {
    const videoId = randomUUID();
    const { title, description, duration } = video;

    await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`;
  }

  update(id, video) {}

  delete(id) {}
}
