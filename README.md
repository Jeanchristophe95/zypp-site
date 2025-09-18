# ZYPP – Site Next.js

## Démarrage local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Déploiement sur Vercel

1) Créez un dépôt git et poussez le projet:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <VOTRE_URL_GIT>
git push -u origin main
```

2) Sur https://vercel.com → New Project → Importez le dépôt
   - Framework: Next.js (auto)
   - Variables d’environnement: ajoutez `DATABASE_URL` (PostgreSQL)
   - Deploy

3) Exécuter les migrations Prisma (production):
```bash
npx prisma migrate deploy
```
Assurez-vous d’utiliser la même `DATABASE_URL` que sur Vercel.

## Variables d’environnement

Copiez `.env.example` → `.env` puis renseignez:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?sslmode=require"
```

## Stack
- Next.js 15 (App Router) / React 19 / TypeScript 5
- Tailwind CSS 4 (via @import)
- Prisma + PostgreSQL
- ESLint 9
