# Setup container
FROM mcr.microsoft.com/devcontainers/base:ubuntu
RUN apt-get update

# Don't minimize container
RUN yes | unminimize

# Install node and yarn
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
RUN pip install requests
RUN pip install boto3

# Install BWS CLI
WORKDIR /tmp
RUN wget https://github.com/bitwarden/sdk/releases/download/bws-v0.4.0/bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN unzip bws-aarch64-unknown-linux-gnu-0.4.0.zip
RUN mv bws /usr/local/bin
RUN rm bws-aarch64-unknown-linux-gnu-0.4.0.zip

# Install mongosh
WORKDIR /tmp
RUN wget https://downloads.mongodb.com/compass/mongosh-2.2.3-linux-arm64.tgz
RUN tar -zxvf mongosh-2.2.3-linux-arm64.tgz
RUN cp mongosh-2.2.3-linux-arm64/bin/mongosh /usr/local/bin
RUN rm -rf mongosh-2.2.3-linux-arm64*

# Install mongodb tools
WORKDIR /tmp
RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-arm64-100.9.4.deb
RUN apt install -y ./mongodb-database-tools-ubuntu2204-arm64-100.9.4.deb
RUN rm mongodb-database-tools-ubuntu2204-arm64-100.9.4.deb
