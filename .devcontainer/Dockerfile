FROM node:18-bullseye-slim

RUN apt update && apt install -y \
  git \
  && rm -rf /var/lib/apt/lists/*

USER node

ENTRYPOINT bash

WORKDIR /usr/src/app
