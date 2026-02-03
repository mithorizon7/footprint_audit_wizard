import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@shared/schema';

export const hasDatabase = Boolean(process.env.DATABASE_URL);

let dbInstance: ReturnType<typeof drizzle> | null = null;

if (hasDatabase) {
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });
  dbInstance = drizzle(pool, { schema });
}

export const db = dbInstance;
