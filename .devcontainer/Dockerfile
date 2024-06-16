FROM node:20.14.0-slim

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Ensure apt is in non-interactive to avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies.
RUN apt-get -y update --no-install-recommends
RUN apt-get -y install --no-install-recommends \
    git \
    vim \
    curl \
    docker \
    docker-compose \
    openssh-client
RUN apt-get autoremove -y && apt-get clean -y

RUN curl -fsSL https://get.docker.com | sh

ENV SHELL="bash"
ENV PNPM_HOME="/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN mkdir "${PNPM_HOME}" && chown "${USER_UID}:${USER_GID}" "${PNPM_HOME}"

RUN npx pnpm i -g pnpm@7.27.0

# Delet node user: https://github.com/nodejs/docker-node/issues/289#issuecomment-272206181
RUN userdel -r node

# Create the user.
RUN groupadd --gid $USER_GID $USERNAME
RUN useradd --uid $USER_UID --gid $USER_GID -m $USERNAME
RUN usermod -aG docker $USERNAME

ENV DEBIAN_FRONTEND=dialog

COPY .devcontainer/entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh
ENTRYPOINT "/entrypoint.sh"
CMD ["sleep", "infinity"]

USER root