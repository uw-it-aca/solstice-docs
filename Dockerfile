FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:1.1.2 as pre-app-container

USER root

RUN apt-get update && apt-get install git -y

ADD docker/nginx.conf /etc/nginx/nginx.conf
RUN chgrp acait /etc/nginx/nginx.conf && chmod g+w /etc/nginx/nginx.conf


FROM node:lts-bullseye AS node-bundler

ADD index.html package.json vite.config.js /app/
WORKDIR /app/
RUN npm install .

ADD . /app/

RUN npm run dev

FROM pre-app-container as app-container

USER acait
COPY --chown=acait:acait --from=node-bundler /app/dist /app/dist
