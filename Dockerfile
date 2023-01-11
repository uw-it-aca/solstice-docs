FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:1.1.2 as pre-app-container

USER root

RUN apt-get update && apt-get install git -y

ADD docker/nginx.conf /etc/nginx/nginx.conf
RUN chgrp acait /etc/nginx/nginx.conf && chmod g+w /etc/nginx/nginx.conf


FROM us-docker.pkg.dev/uwit-mci-axdd/containers/nginx-container:1.1.2 AS node-bundler

USER acait

COPY --chown=acait:acait index.html package.json vite.config.js /app/
COPY --chown=acait:acait src /app/src
COPY --chown=acait:acait public /app/dist
COPY --chown=acait:acait public /app/public

RUN which git
RUN echo $PATH
RUN git ls-remote -h -t ssh://git@github.com/uw-it-aca/axdd-components.git
RUN . /app/bin/activate
RUN npm install --production
RUN npm install vite
RUN npm run build


FROM pre-app-container as app-container

USER acait
COPY --chown=acait:acait --from=node-bundler /app/dist /app/dist
