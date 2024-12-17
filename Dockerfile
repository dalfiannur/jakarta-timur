FROM node:20.16.0-alpine3.19

WORKDIR /app

# Salin package.json dan .env
COPY package*.json ./
COPY .env .env

# Salin Prisma schema dan file database
COPY prisma/schema.prisma ./prisma/schema.prisma
COPY dev.db ./dev.db

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Jalankan Prisma generate (opsional jika tidak dilakukan di preinstall)
RUN npx prisma generate

# Jalankan aplikasi
CMD ["npm", "start"]
