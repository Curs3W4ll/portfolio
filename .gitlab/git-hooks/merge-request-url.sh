#!/usr/bin/env bash
# pre-push hook: prints a pre-filled merge-request creation URL for the branch
# being pushed. Purely informational and never fails the push — `verbose: true`
# on the hook in .pre-commit-config.yaml is what makes pre-commit show this
# output, which it otherwise swallows for a passing hook.
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"
# shellcheck source=.gitlab/git-hooks/colors.sh
source .gitlab/git-hooks/colors.sh

readonly default_target_branch="main"

branch="$(git symbolic-ref --quiet --short HEAD)" || exit 0

# `https://host/group/project.git` and `git@host:group/project.git` both reduce
# to `host/group/project`.
project_path="$(git remote get-url origin)"
project_path="${project_path#*://}"
project_path="${project_path#*@}"
project_path="${project_path/://}"
project_path="${project_path%.git}"
printf '%sProject URL: %s%s\n' "$info" "$project_path" "$none"

target_branch=""
if git ls-remote --exit-code --heads origin "$default_target_branch" >/dev/null 2>&1; then
  target_branch="$default_target_branch"
else
  printf '%sThe target branch %s does not exist, letting GitLab pick its default%s\n' "$warning" "$default_target_branch" "$none"
fi

issue_key=""
if [[ "$branch" =~ ^([0-9]+)- ]]; then
  issue_key="${BASH_REMATCH[1]}"
  printf '%sYour branch name contains the following issue key: %s%s\n' "$info" "$issue_key" "$none"
else
  printf '%sThe branch name does not contain an issue key%s\n' "$info" "$none"
fi

# Percent-encoded query: %5B/%5D are the brackets of GitLab's merge_request[...]
# parameters, %23 the `#` of the issue key, %3C/%3E the placeholder's angles.
url="https://${project_path}/-/merge_requests/new?merge_request%5Bsource_branch%5D=${branch}"
if [[ -n "$target_branch" ]]; then
  url="${url}&merge_request%5Btarget_branch%5D=${target_branch}"
fi
url="${url}&merge_request%5Btitle%5D="
if [[ -n "$issue_key" ]]; then
  url="${url}%23${issue_key}%20"
fi
url="${url}%3CSummary%20of%20your%20MR%3E"

printf '%sYou can create a merge request here: %s%s\n' "$info$bold" "$url" "$none"
