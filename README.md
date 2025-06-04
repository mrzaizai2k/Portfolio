
# Portfolio Website
[mrzaizai2k.xyz](https://mrzaizai2k.xyz/)

![Demo](./Images/readme-img1.png)

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![Open Source](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

🔹 [Report Bug](https://github.com/mrzaizai2k/Portfolio/issues) 🔹 [Request Feature](https://github.com/mrzaizai2k/Portfolio/issues)

## Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup](#setup)
- [Docker](#docker)
- [Cloudflare Tunnel](#cloudflare-tunnel)
- [Usage](#usage)
- [Support](#support)

## About
Personal portfolio [mrzaizai2k.xyz](https://mrzaizai2k.xyz/) displaying projects, resume, and skills. Fork and customize, credit [soumyajit](https://soumyajit.vercel.app/).

## Tech Stack
- React.js
- Node.js
- CSS3
- Docker
- Nginx

## Features
- 📖 Multi-page layout
- 🎨 Customizable CSS
- 📱 Responsive design
- 🔒 Nginx DDoS protection
- 🐳 Docker containerized

## Setup
Requires `node.js`, `git`, `docker`.

1. Clone repo:
   ```bash
   git clone https://github.com/mrzaizai2k/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

## Docker
1. Ensure `docker` and `docker-compose` installed.
2. Build and run:
   ```bash
   docker-compose up -d
   ```
3. Access: [http://localhost](http://localhost)
4. Stop:
   ```bash
   docker-compose down
   ```

**Note**: `/frontend/src` mounted as volume for instant code updates. Nginx serves on port 80 with DDoS protection.

## Cloudflare Tunnel
Expose app publicly:

1. Install `cloudflared`:
   ```bash
   chmod +x cloudflare/install_cloudflared.sh
   ./cloudflare/install_cloudflared.sh
   ```
2. Authenticate:
   ```bash
   cloudflared tunnel login
   ```
3. Create tunnel (replace `<Tunnel-UUID>` and `<Tunnel-NAME>`):
   ```bash
   sudo cp -r /home/mrzaizai2k/.cloudflared /root/.cloudflared
   sudo chmod 644 /root/.cloudflared/<Tunnel-UUID>.json
   sudo chown root:root /root/.cloudflared/<Tunnel-UUID>.json
   cloudflared tunnel run <Tunnel-NAME>
   ```
4. Stop tunnel:
   ```bash
   kill -9 $(ps aux | grep cloudflared | grep <Tunnel-NAME> | awk '{print $2}')
   ```

See: [Cloudflare Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/local-management/create-local-tunnel/#1-download-and-install-cloudflared), [Medium Guide](https://freedium.cfd/https://medium.com/@al_imran_ahmed/how-i-turned-an-old-laptop-into-a-web-hosting-server-for-my-laravel-application-e9035692d56b)

## Usage
- Customize: `/frontend/src/components/`
- Configure Nginx: `/nginx/nginx.conf.template`
- View logs:
   ```bash
   docker logs portfolio-frontend
   docker logs nginx
   ```

## Support
- [Report Bug](https://github.com/mrzaizai2k/Portfolio/issues)
- [Request Feature](https://github.com/mrzaizai2k/Portfolio/issues)
