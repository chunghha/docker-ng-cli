This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

```
ng b --prod
docker stop ng-cli
docker rm -v ng-cli
docker build . -t ng-cli
docker run --name ng-cli -d -p 8989:80 ng-cli
docker ps
```

*Or if you can run bash then just,*

```
sh run.sh
```
