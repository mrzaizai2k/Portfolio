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

# Serve with a simple web server (e.g., serve)
RUN npm install -g serve

EXPOSE 3000

# Serve the build folder
CMD ["npm", "start"]
