# Use a lightweight Node.js image as the base
FROM node:20-alpine

# Set working directory in the container
WORKDIR /app

# Copy package manager lock files if available
COPY package*.json ./
COPY yarn.lock ./
COPY pnpm-lock.yaml ./
COPY bun.lockb ./

# Install Bun (if used)
RUN curl -fsSL https://bun.sh/install | bash && \
    export BUN_INSTALL=/root/.bun && \
    export PATH=$BUN_INSTALL/bin:$PATH

# Detect and install dependencies based on the package manager used
ARG PACKAGE_MANAGER=npm
RUN if [ "$PACKAGE_MANAGER" = "npm" ]; then npm install; \
    elif [ "$PACKAGE_MANAGER" = "yarn" ]; then yarn install; \
    elif [ "$PACKAGE_MANAGER" = "pnpm" ]; then npm install -g pnpm && pnpm install; \
    elif [ "$PACKAGE_MANAGER" = "bun" ]; then bun install; fi

# Copy the entire project to the container
COPY . .

# Install Next.js and TailwindCSS specific versions
RUN if [ "$PACKAGE_MANAGER" = "npm" ]; then npm install next@14.2.13 tailwindcss@3.4.1; \
    elif [ "$PACKAGE_MANAGER" = "yarn" ]; then yarn add next@14.2.13 tailwindcss@3.4.1; \
    elif [ "$PACKAGE_MANAGER" = "pnpm" ]; then pnpm add next@14.2.13 tailwindcss@3.4.1; \
    elif [ "$PACKAGE_MANAGER" = "bun" ]; then bun add next@14.2.13 tailwindcss@3.4.1; fi

# Push schema database to the server
RUN if [ "$PACKAGE_MANAGER" = "npm" ]; then npm run db:push; \
    elif [ "$PACKAGE_MANAGER" = "yarn" ]; then yarn run db:push; \
    elif [ "$PACKAGE_MANAGER" = "pnpm" ]; then pnpm run db:push; \
    elif [ "$PACKAGE_MANAGER" = "bun" ]; then bun run db:push; fi

# Build the project for production
RUN if [ "$PACKAGE_MANAGER" = "npm" ]; then npm run build; \
    elif [ "$PACKAGE_MANAGER" = "yarn" ]; then yarn build; \
    elif [ "$PACKAGE_MANAGER" = "pnpm" ]; then pnpm build; \
    elif [ "$PACKAGE_MANAGER" = "bun" ]; then bun build; fi

# Expose the port the application runs on
EXPOSE 3000

# Start the application
CMD if [ "$PACKAGE_MANAGER" = "npm" ]; then npm run start; \
    elif [ "$PACKAGE_MANAGER" = "yarn" ]; then yarn start; \
    elif [ "$PACKAGE_MANAGER" = "pnpm" ]; then pnpm start; \
    elif [ "$PACKAGE_MANAGER" = "bun" ]; then bun start; fi
