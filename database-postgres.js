import { randomUUID } from "node:crypto";
import { sql } from "./db";

export class DataBasePostgres {
  #videos = new Map();

  list(search) {
    let videos;

    if (search) {
      videos = sql`select * from video where title ilike "%${search}%"`;
    } else {
      videos = sql`select * from video`;
    }

    return videos;
  }

  create(video) {}

  update(id, video) {}

  delete(id) {}
}
