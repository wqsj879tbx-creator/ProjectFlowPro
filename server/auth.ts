import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Kysely } from 'kysely';
import { DatabaseSchema } from './database.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-change-in-production';

export interface TokenPayload {
  userId: number;
  email: string;
  isAdmin: boolean;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(userId: number, email: string, isAdmin: boolean): string {
  return jwt.sign(
    { userId, email, isAdmin },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return payload;
  } catch (error) {
    return null;
  }
}

export async function registerUser(
  db: Kysely<DatabaseSchema>,
  email: string,
  password: string,
  fullName: string
) {
  const existingUser = await db
    .selectFrom('users')
    .select('id')
    .where('email', '=', email)
    .executeTakeFirst();

  if (existingUser) {
    throw new Error('Email already registered');
  }

  const passwordHash = await hashPassword(password);

  const result = await db
    .insertInto('users')
    .values({
      email,
      password_hash: passwordHash,
      full_name: fullName
    } as any)
    .returningAll()
    .executeTakeFirstOrThrow();

  return result;
}

export async function loginUser(
  db: Kysely<DatabaseSchema>,
  email: string,
  password: string
) {
  const user = await db
    .selectFrom('users')
    .selectAll()
    .where('email', '=', email)
    .executeTakeFirst();

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await verifyPassword(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = generateToken(user.id, user.email, user.is_admin || false);
  return { user, token };
}