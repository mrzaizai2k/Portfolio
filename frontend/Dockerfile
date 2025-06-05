# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for better Docker caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy rest of the application
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Serve the static build
CMD ["serve", "-s", "build", "-l", "3000"]
