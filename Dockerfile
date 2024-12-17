FROM node:20.16.0-alpine3.19

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the Prisma schema and environment file
COPY prisma/schema.prisma ./prisma/schema.prisma
COPY .env .env

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]
