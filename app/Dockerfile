FROM node:19-alpine3.16
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
RUN mkdir ./blog_app
COPY /app ./blog_app

WORKDIR /blog_app
RUN pnpm install

# WORKDIR /
# RUN mkdir ./app
# COPY /app ./app
