import { Kysely, SqliteDialect } from 'kysely';
import { Database } from 'better-sqlite3';
import path from 'path';

export interface DatabaseSchema {
  id: number;
  email: string;
  password_hash: string;
  full_name: string;
  is_admin: boolean;
}

export interface User {
  id: number;
  email: string;
  password_hash: string;
  full_name: string;
  is_admin: boolean;
}

export const db = new Kysely<DatabaseSchema>({
  dialect: new SqliteDialect({
    database: new Database(path.resolve(process.env.DATABASE_PATH || './database.sqlite'))
  })
});