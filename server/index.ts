import express from 'express';
import { setupStaticServing } from './static-serve';
import { setupRoutes } from './routes';
import { db } from './database';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Настройка статики
setupStaticServing(app);

// Настройка маршрутов
setupRoutes(app, db);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };