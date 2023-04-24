FROM node:18.14.2

USER root

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/library/

WORKDIR $HOME/library
RUN npm cache clean --force && npm install --global npm@9.5.0 && npm install

COPY . $HOME/library

CMD ["npm", "start"]