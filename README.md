# Tribha

Tribha is a digital solutions and marketing platform built to help businesses level up their online presence with modern web tech, branding, and custom AI tools. This was coded for practice as an intern.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Lucide Icons, Vite
- **Backend:** Node.js, Express.js
- **Database & ORM:** PostgreSQL, Prisma ORM


## How to Run It Locally

### 1. Get the Backend Running

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder with your database URL:

```env
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/tribha_db?schema=public"
```

Run your migrations and start the server:

```bash
npx prisma migrate dev --name init
npm run dev
```

### 2. Get the Frontend Running

Open a new terminal tab and start the client:

```bash
cd client
npm install
npm run dev
```

Head over to `http://localhost:5173`.