FROM debian:latest
LABEL com.soundboard.version="0.1.0"
RUN mkdir -p /var/app
WORKDIR /var/app
RUN apt-get update -y && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
COPY package.json /var/app
RUN npm install
COPY public /var/app/public
COPY src /var/app/src
ENTRYPOINT npm start --prefix /var/app