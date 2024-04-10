FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:1.2.0 as pre-app-container

USER root

RUN apt-get update && apt-get install git -y

ADD docker/nginx.conf /etc/nginx/nginx.conf
RUN chgrp acait /etc/nginx/nginx.conf && chmod g+w /etc/nginx/nginx.conf

# latest node + ubuntu
FROM node:lts AS node-base
FROM ubuntu:latest AS node-bundler
COPY --from=node-base / /

ADD index.html package.json vite.config.js /app/
WORKDIR /app/
RUN npm install .

ADD . /app/

RUN npm run build

FROM pre-app-container as app-container

USER acait
COPY --chown=acait:acait --from=node-bundler /app/dist /app/dist

# latest node + ubuntu
FROM node-bundler AS vite-container

ADD index.html package.json vite.config.js /app/
WORKDIR /app/
RUN npm install
ADD . /app/

CMD ["npm", "run", "dev", "--", "--host"]
