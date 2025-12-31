ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}

RUN npm install -g pnpm
