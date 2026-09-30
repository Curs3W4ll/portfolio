#!/bin/sh
# shellcheck shell=sh
# Commits whatever `npm run format` / `npm run lint:fix` changed back onto the
# merge request's source branch. Run from the `format` job, which is
# merge-request-only, so CI_MERGE_REQUEST_SOURCE_BRANCH_NAME is always set.
#
# Needs git (not in node:alpine) and a CI_REPOSITORY_URL carrying push
# credentials, which GitLab provides to the job.
set -eu

git config user.email "$GITLAB_USER_EMAIL"
git config user.name "$GITLAB_USER_NAME"
git remote set-url origin "$CI_REPOSITORY_URL"

git add .
# Nothing to format is the common case, and not a failure.
git diff-index --quiet HEAD || git commit -m "$COMMIT_MESSAGE"

git push origin "HEAD:$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME"
