# 🚀 Tet Planner Pro – GraphQL BFF

This project is a **Backend For Frontend (BFF)** built with **Apollo Server + Express + TypeScript**.  
It serves as an intermediate layer between frontend applications and backend services (Auth, User, Budget, etc.) using **GraphQL**.

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Express
- Apollo Server (GraphQL)
- Nodemon / ts-node
- REST API integration (fetch)

---

## 📁 Project Structure

```bash
src/
│
├── index.ts            # App entry point
├── app.ts              # Express & Apollo Server setup
│
├── graphql/
│   ├── typeDefs.ts     # Combine all module typeDefs
│   ├── resolvers.ts    # Combine all module resolvers
│
├── modules/
│   ├── dummy/
│   │   ├── dummy.typeDefs.ts
│   │   ├── dummy.resolvers.ts
│   │   ├── dummy.datasource.ts
│   │
│
├── types/
```

---

## ⚙️ Installation

```bash
npm install
```
## ⚙️ Run Project

### Development mode

```bash
npm run dev
```

### Build & Run production

```bash
npm run build
npm start
```

---

## ⚙️ GraphQL Endpoint
```
http://localhost:4000/graphql
```

---

## ⚙️ Environment Variables
```
AUTH_API_URL=http://localhost:3001
MANAGEMENT_API_URL=http://localhost:8080
PORT=4000
```