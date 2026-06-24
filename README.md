# ProjectFlow Pro

A full-stack project management application built with **React**, **Express**, **SQLite**, and **Tailwind CSS**.

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/wqsj879tbx-creator/ProjectFlowPro.git
cd ProjectFlowPro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory with the following content:
```env
JWT_SECRET=your_secure_jwt_secret_key_here
DATABASE_PATH=./database.sqlite
PORT=3001
```

### 4. Run the development server
```bash
npm run dev
```
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:3001](http://localhost:3001)

### 5. Build for production
```bash
npm run build
```
This will generate:
- Frontend assets in `/dist/public`
- Compiled server code in `/dist/server`

## 📁 Project Structure

```
ProjectFlowPro/
├── client/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── App.tsx       # Main App component
│   │   ├── main.tsx      # React entry point
│   │   ├── index.css     # Tailwind CSS
│   │   └── pages/        # Page components
│   └── public/           # Static files
├── server/               # Backend (Express + SQLite)
│   ├── index.ts          # Server entry point
│   ├── auth.ts           # Authentication logic
│   ├── database.ts       # Database setup
│   ├── routes.ts         # API routes
│   └── ...
├── scripts/              # Development scripts
│   └── dev.ts            # Dev server launcher
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # This file
```

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, React Router
- **Backend**: Express 5, SQLite (via Kysely ORM), JWT authentication
- **Tools**: Node.js 18+, npm

## 📝 Features

- User registration and login with JWT authentication
- Project management with CRUD operations
- Responsive design with Tailwind CSS
- SQLite database for persistent storage

## 🔧 Configuration

### Vite (Frontend)
- Development server runs on port 3000
- Proxy API requests to backend on port 3001

### Express (Backend)
- Runs on port 3001 by default
- SQLite database file: `./database.sqlite`

## 📦 Deployment

### Option A: Static Site (Frontend only)
1. Run `npm run build`
2. Upload contents of `/dist/public` to your hosting provider
3. Configure your server to serve `index.html` for all routes

### Option B: Full Stack (Frontend + Backend)
1. Run `npm run build`
2. Upload entire project to your hosting provider
3. Set environment variables:
   - `JWT_SECRET`
   - `DATABASE_PATH`
   - `PORT`
4. Ensure Node.js is installed on your server
5. Start the server: `node dist/server/index.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is private. Do not distribute without permission.