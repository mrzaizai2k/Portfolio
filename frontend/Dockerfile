# Use a smaller Node.js base image
FROM node:18-slim AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Accept build-time environment variables
ARG REACT_APP_GA4_MEASUREMENT_ID
ENV REACT_APP_GA4_MEASUREMENT_ID=$REACT_APP_GA4_MEASUREMENT_ID

# Build the app
RUN npm run build

# Use a lightweight base image for the final stage
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy only the build output and necessary files
COPY --from=builder /app/build ./build

RUN npm install -g serve

# Expose port
EXPOSE 3000

# Serve the static build
CMD ["serve", "-s", "build", "-l", "3000"]