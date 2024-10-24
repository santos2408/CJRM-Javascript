docker run \
 --name postgres \
 -e POSTGRES_USER=rogersantos \
 -e POSTGRES_PASSWORD=123456 \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres

docker ps
docker exec -it postgres /bin/bash
