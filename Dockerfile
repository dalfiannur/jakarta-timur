# Gunakan image Node.js
FROM node:20.16.0-alpine3.19

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk caching
COPY package*.json ./

# Salin file Prisma schema terlebih dahulu sebelum npm install
COPY prisma/schema.prisma ./prisma/schema.prisma

# Instal dependencies
RUN npm install

# Salin file environment
COPY .env .env

# Salin seluruh source code proyek
COPY . .

# Build aplikasi
RUN npm run build

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan server produksi
CMD ["npm", "start"]
