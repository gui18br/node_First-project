import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Table dropped");
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    duration INTERVAL
);
`.then(() => {
  console.log("Table created");
});
