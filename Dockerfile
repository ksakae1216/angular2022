ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}

RUN npm install -g pnpm
