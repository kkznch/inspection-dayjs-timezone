FROM node:16-alpine

RUN apk add --no-cache tzdata

COPY . /root

WORKDIR /root

RUN npm install
