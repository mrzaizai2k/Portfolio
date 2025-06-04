# Portfolio Website - v2.0
[mrzaizai2k.xyz](https://mrzaizai2k.xyz/)

![Demo](./Images/readme-img1.png)

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![Made with JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![Open Source](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

🔹 [Report Bug](https://github.com/mrzaizai2k/Portfolio/issues) 🔹 [Request Feature](https://github.com/mrzaizai2k/Portfolio/issues)

## Table of Contents
- [About](#about)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation and Setup](#installation-and-setup)
- [Docker Setup](#docker-setup)
- [Cloudflare Tunnel Setup](#cloudflare-tunnel-setup)
- [Usage Instructions](#usage-instructions)
- [Support](#support)

## About
My personal portfolio [mrzaizai2k.xyz](https://mrzaizai2k.xyz/) showcases my projects, resume, and technical skills. Fork this repo to customize it, and please credit by linking to [soumyajit](https://soumyajit.vercel.app/).

## Built With
- React.js
- Node.js
- CSS3
- Docker
- Nginx

## Features
- 📖 Multi-Page Layout
- 🎨 Styled with CSS, easy to customize
- 📱 Fully Responsive
- 🔒 Basic DDoS protection via Nginx
- 🐳 Containerized with Docker

## Getting Started
You need `node.js`, `git`, and `docker` installed globally.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mrzaizai2k/Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```
3. Install dependencies:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

## Docker Setup
1. Ensure `docker` and `docker-compose` are installed.
2. Build and run the containers:
   ```bash
   docker-compose up -d
   ```
3. Access the app at [http://localhost](http://localhost).
4. To stop:
   ```bash
   docker-compose down
   ```

**Note**: The `frontend/src` folder is mounted as a volume, so code changes reflect instantly. Nginx serves the app on port 80 with basic DDoS protection.

## Cloudflare Tunnel Setup
To expose the app publicly:
1. Install `cloudflared`:
   ```bash
   wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
   chmod +x cloudflared-linux-amd64
   sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared
   ```
2. Authenticate and create a tunnel (replace with your tunnel ID):
   ```bash
   sudo cp -r /home/mrzaizai2k/.cloudflared /root/.cloudflared
   sudo chmod 644 /root/.cloudflared/d70e2d6b-2d95-4d8c-bf47-d5b2f11de773.json
   sudo chown root:root /root/.cloudflared/d70e2d6b-2d95-4d8c-bf47-d5b2f11de773.json
   cloudflared tunnel run mrzaizai2k_website
   ```
3. To stop the tunnel:
   ```bash
   kill -9 $(ps aux | grep cloudflared | grep mrzaizai2k_website | awk '{print $2}')
   ```

## Usage Instructions
- Edit components in `/frontend/src/components/` to customize content.
- Update Nginx settings in `/nginx/nginx.conf.template` for additional security or configuration.
- Monitor logs:
  ```bash
  docker logs portfolio-frontend
  docker logs nginx
  ```