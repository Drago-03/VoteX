#!/bin/bash

# Install Nix
sh <(curl -L https://nixos.org/nix/install) --daemon

# Source nix into the current shell
. /nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh

# Enable Flakes and Nix Command
mkdir -p ~/.config/nix
cat << EOF > ~/.config/nix/nix.conf
experimental-features = nix-command flakes
EOF

# Install essential packages
nix-env -iA \
    nixpkgs.git \
    nixpkgs.direnv

# Setup direnv in shell (assuming bash/zsh)
echo 'eval "$(direnv hook bash)"' >> ~/.bashrc
echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc

# Verify installation
echo "Verifying Nix installation..."
nix --version
