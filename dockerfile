FROM node:16

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@9.5.0

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/library/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/library
RUN npm cache clean --force && npm install

USER root
COPY . $HOME/library
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]