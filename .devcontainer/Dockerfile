FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN apt-get update
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs
RUN corepack enable
RUN yarn set version stable

# Install apt packages
RUN apt install -y cloc
RUN apt install -y python3-pip

# Install python packages
RUN pip install typer
RUN pip install pre-commit
RUN pip install python-dotenv
# RUN pip install "pymongo[srv]"

# Install BWS CLI
WORKDIR /tmp
RUN wget https://github.com/bitwarden/sdk/releases/download/bws-v0.4.0/bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN unzip bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN mv bws /usr/local/bin
RUN rm bws-aarch64-unknown-linux-gnu-0.4.0.zip

# Don't minimize container
RUN yes | unminimize

# Install mongodb atlas CLI
# RUN apt install gnupg
# RUN wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
# RUN touch /etc/apt/sources.list.d/mongodb-org-6.0.list
# RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
# RUN apt update
# RUN apt install -y mongocli

# Install MongoDB Tools
# https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-arm64-100.9.4.deb
# WORKDIR /tmp
# RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-arm64-100.9.4.tgz
# RUN tar -xzvf ./mongodb-database-tools-*-100.9.0.tgz
# RUN mv ./mongodb-database-tools-*-100.9.0/bin/* /usr/local/bin
# RUN rm mongodb-database-tools-*-100.9.0.tgz
# RUN rm -rf mongodb-database-tools-*-100.9.0
