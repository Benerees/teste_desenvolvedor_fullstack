FROM node:16

USER root

RUN npm install --global npm@9.5.0

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/library/

WORKDIR $HOME/library
RUN npm cache clean --force && npm install

COPY . $HOME/library

CMD ["npm", "start"]