#!/usr/bin/env bash

npx ng b --prod
docker stop ng-cli
docker rm -v ng-cli
docker build . -t ng-cli
docker run --name ng-cli -d -p 8989:80 ng-cli
docker ps
