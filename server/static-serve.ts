import express from 'express';
import path from 'path';

export function setupStaticServing(app: express.Application) {
  // Отдаем статику из папки public
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Для всех остальных маршрутов отдаем index.html (для SPA)
  app.get('*', (req, res, next) => {
    // Пропускаем API-запросы
    if (req.path.startsWith('/api/')) {
      return next();
    }
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });
}