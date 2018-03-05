FROM debian
LABEL com.soundboard.version="0.1.0"
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . /var/app
RUN apt-get update -y
RUN apt-get install -y curl nano
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs
RUN npm install
ENTRYPOINT npm start --prefix /var/app