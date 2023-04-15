FROM node:18

ARG USER=vscode

ENV PATH="${PATH}:/home/vscode/.local/bin"

RUN apt-get update && apt-get install gnupg2 -y

RUN adduser ${USER}

USER ${USER}