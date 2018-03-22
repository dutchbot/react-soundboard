# Docker install

If you cloned the repo:
```
docker build -t soundboard .
docker run -p 127.0.0.1:3000:3000 --name sb-react -t soundboard

docker build -t soundboard-serve -f DockerfileServe .
docker run -p 127.0.0.1:3001:3001 --name sb-serve -t soundboard-serve
```

Remote:
```
docker build https://github.com/dutchbot/react-soundboard.git -t soundboard
docker run -p 127.0.0.1:3000:3000 --name sb-react -t soundboard
```

Todo

1. Add option to select .json for soundboard.
2. Add option to upload .json
3. Add option to upload media files.