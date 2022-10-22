ARG VARIANT=18-buster
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git
RUN npm install -g ts-node typescript '@types/node'
RUN npm install -g jest ts-jest '@types/jest'