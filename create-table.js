import { sql } from "./db.js";

sql`
CREATE TABLE videos (
    title VARCHAR(255),
    description TEXT,
    duration INTERVAL
);
`.then(() => {
  console.log("Table created");
});
