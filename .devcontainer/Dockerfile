FROM node:20.14.0-slim

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Ensure apt is in non-interactive to avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies.
RUN apt-get -y update --no-install-recommends \
    && apt-get -y install --no-install-recommends \
    git \
    vim \
    && apt-get autoremove -y \
    && apt-get clean -y

# Create the user.
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

ENV DEBIAN_FRONTEND=dialog

USER $USERNAME