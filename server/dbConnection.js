// set up connection between server and database

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
// create a connection string --> this will create a channel between this server adn the database in supabase

const dbConnectionString = process.env.DARABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
