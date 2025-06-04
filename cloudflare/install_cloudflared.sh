#!/bin/bash

# Install cloudflared based on the system's package manager

# Check for Debian/Ubuntu (APT)
if command -v apt-get >/dev/null 2>&1; then
    echo "Detected APT-based system (Debian/Ubuntu)"
    sudo mkdir -p --mode=0755 /usr/share/keyrings
    curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
    echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
    sudo apt-get update && sudo apt-get install -y cloudflared

# Check for RHEL-based systems (assumed to use APT in this case)
elif command -v dnf >/dev/null 2>&1 || command -v yum >/dev/null 2>&1; then
    echo "Detected RHEL-based system"
    curl -fsSL https://pkg.cloudflare.com/cloudflared-ascii.repo | sudo tee /etc/yum.repos.d/cloudflared.repo
    sudo apt update && sudo apt install -y cloudflared

# Check for Arch Linux (Pacman)
elif command -v pacman >/dev/null 2>&1; then
    echo "Detected Arch Linux"
    sudo pacman -Syu --noconfirm cloudflared
else
    echo "Unsupported package manager. Please install cloudflared manually."
    exit 1
fi

# Verify installation
if command -v cloudflared >/dev/null 2>&1; then
    echo "cloudflared installed successfully"
    cloudflared -v
else
    echo "cloudflared installation failed"
    exit 1
fi