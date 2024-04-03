# base
FROM registry.redhat.io/rhel8/nodejs-20-minimal:1-32 AS base
WORKDIR $HOME
ENV CYPRESS_INSTALL_BINARY=0
COPY package*.json .
RUN npm install -g pnpm
RUN pnpm install

# builder
FROM base as builder
WORKDIR $HOME
ENV CYPRESS_INSTALL_BINARY=0
COPY package*.json .
RUN npm install -g pnpm
RUN pnpm install
COPY . .


FROM builder as package
RUN pnpm generate

# for test
FROM builder as test
WORKDIR $HOME
RUN pnpm test:unit

# for run
FROM  nginx:stable-alpine-slim  as run
COPY --from=package /opt/app-root/src/.output/public /usr/share/nginx/html
