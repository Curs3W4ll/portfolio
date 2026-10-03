#!/usr/bin/env bash
# prepare-commit-msg hook: prefixes the commit subject with `#<issue-id> ` read
# off the branch name (`<issue-id>-<summary>`), so the issue key never has to be
# typed. A no-op when the branch carries no id or the prefix is already there.
#
# pre-commit passes the path to the commit message file as the only argument.
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"
# shellcheck source=.gitlab/git-hooks/colors.sh
source .gitlab/git-hooks/colors.sh

readonly msg_file="$1"

branch="$(git symbolic-ref --quiet --short HEAD || true)"
printf '%sDetected branch name is: %s%s\n' "$info" "$branch" "$none"

if [[ ! "$branch" =~ ^([0-9]+)- ]]; then
  printf '%sYour branch name does not match the convention, could not prefix the commit%s\n' "$warning" "$none"
  exit 0
fi

readonly prefix="#${BASH_REMATCH[1]} "
subject="$(head -n 1 "$msg_file")"

if [[ "$subject" == "$prefix"* ]]; then
  printf '%sPrefix already present, not adding anything%s\n' "$info" "$none"
  exit 0
fi

printf '%sPrefixing commit with: %s%s\n' "$info" "$prefix" "$none"
# Rewritten through a temporary file rather than `sed -i`, whose -i takes a
# mandatory backup suffix on BSD and none on GNU. The subject is the only line
# touched; a body, and git's own comment block, pass through untouched.
{
  printf '%s%s\n' "$prefix" "$subject"
  tail -n +2 "$msg_file"
} >"$msg_file.prepared"
mv "$msg_file.prepared" "$msg_file"
printf '%sCommit prefixed%s\n' "$success" "$none"
