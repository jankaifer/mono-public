#!/usr/bin/env bash

# Make sure docker group GID is the same as of the host system
groupmod -g $(stat -c "%g" /var/run/docker.sock) docker; su - $USERNAME; sleep infinity

# needed to run parameters CMD
$@