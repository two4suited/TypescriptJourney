ARG VARIANT=16
FROM --platform=linux/amd64 mcr.microsoft.com/azure-functions/node:4-node16-core-tools
ENV ASPNETCORE_hostBuilder__reloadConfigOnChange=false
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git
