FROM node:10.13-alpine

MAINTAINER luisdasilva <luismiguel.ryan@gmail.com>

ENV NODE_ENV production

WORKDIR /opt/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

EXPOSE 3000

CMD node app.js