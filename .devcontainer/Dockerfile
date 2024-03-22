FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN apt-get update
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs
RUN corepack enable
RUN yarn set version stable

# Install apt packages
RUN apt install -y cloc

# Install BWS CLI
WORKDIR /tmp
RUN wget https://github.com/bitwarden/sdk/releases/download/bws-v0.4.0/bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN unzip bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN mv bws /usr/local/bin
RUN rm bws-aarch64-unknown-linux-gnu-0.4.0.zip

# Don't minimize container
# RUN yes | unminimize