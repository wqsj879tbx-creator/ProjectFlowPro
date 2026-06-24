import { Router } from 'express';
import { Kysely } from 'kysely';
import { DatabaseSchema } from './database.js';
import { registerUser, loginUser } from './auth.js';

export function setupRoutes(app: any, db: Kysely<DatabaseSchema>) {
  const router = Router();

  // Регистрация
  router.post('/api/register', async (req: any, res: any) => {
    try {
      const { email, password, fullName } = req.body;
      const user = await registerUser(db, email, password, fullName);
      res.status(201).json({ user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // Вход
  router.post('/api/login', async (req: any, res: any) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await loginUser(db, email, password);
      res.json({ user, token });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // Пример защищенного маршрута
  router.get('/api/protected', (req: any, res: any) => {
    res.json({ message: 'This is a protected route!' });
  });

  app.use(router);
}