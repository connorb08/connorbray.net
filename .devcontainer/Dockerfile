FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN apt-get update
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs
RUN corepack enable
RUN yarn set version stable