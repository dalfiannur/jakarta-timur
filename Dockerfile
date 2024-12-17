# Gunakan Node.js versi yang stabil dengan Alpine sebagai base image
FROM node:20.16.0-alpine3.19

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Salin file konfigurasi lingkungan
COPY .env .env

# Buat folder untuk Prisma di dalam container
RUN mkdir -p prisma

# Salin schema Prisma dan file database ke dalam folder prisma
COPY prisma/schema.prisma ./prisma/schema.prisma
COPY prisma/dev.db ./prisma/dev.db

# Install dependencies
RUN npm install

# Salin semua file aplikasi ke dalam container
COPY . .

# Perintah default untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
