FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY prisma ./prisma/

RUN npx prisma generate

COPY . .

EXPOSE 8787

CMD ["npm", "run", "dev"]