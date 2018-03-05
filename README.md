# Docker install

If you cloned the repo:
```
docker build -t soundboard .
docker run -p 127.0.0.1:3000:3000 --name <name> -t soundboard
```

Remote:
```
docker build github.com/dutchbot/soundboard -t soundboard
docker run -p 127.0.0.1:3000:3000 --name <name> -t soundboard
```

Todo

1. Add option to select .json for soundboard.
2. Add option to upload .json
3. Play all button.
4. Add option to upload media files.
5. Play uploaded media files.