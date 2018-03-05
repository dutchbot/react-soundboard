#!/bin/sh
apt-get update -y
apt-get install -y \
    curl \
    nano
curl -sL https://deb.nodesource.com/setup_9.x | bash -
apt-get install -y nodejs
npm install