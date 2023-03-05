FROM node:19-alpine3.16
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
RUN mkdir ./blog_api
COPY /api ./blog_api

WORKDIR /blog_api
RUN pnpm install
