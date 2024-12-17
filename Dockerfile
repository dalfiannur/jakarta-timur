# Use an official Node.js runtime as a parent image
FROM node:20.16.0-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install required dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Push the database schema
RUN npm run db:push

# Build the Next.js application for production
RUN npm run build

# Expose the app's port
EXPOSE 3000

# Run the application server
CMD ["npm", "run", "start"]
