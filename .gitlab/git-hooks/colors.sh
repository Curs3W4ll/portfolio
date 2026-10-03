#!/usr/bin/env bash
# Terminal colors shared by the git hooks in this directory. Sourced, never run.
# shellcheck shell=bash
# shellcheck disable=SC2034  # every color is consumed by a sourcing hook

none=$'\033[0m'
bold=$'\033[1m'
info=$'\033[0;36m'
success=$'\033[0;32m'"$bold"
warning=$'\033[0;93m'"$bold"
error=$'\033[0;31m'"$bold"
