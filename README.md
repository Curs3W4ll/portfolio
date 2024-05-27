# Corentin Hervaud portfolio

This is my personal website, build using [NuxtJS](https://nuxt.com/) with [Typescript](https://www.typescriptlang.org/) and hosted on [GitLab pages](https://docs.gitlab.com/ee/user/project/pages/).

This repository comes from [this GitLab repository](https://gitlab.com/curs3_w4ll/portfolio), if you're seeing this through another platform, this is probable a mirroring.

[[_TOC_]]

## My links

- [My LinkedIn profile](https://www.linkedin.com/in/corentin-hervaud/)
- [My GitHub profile](https://github.com/Curs3W4ll)
- [My GitLab profile](https://gitlab.com/curs3_w4ll)

## Project details

### Technical stack

The project is using [NuxtJS](https://nuxt.com/) with [Typescript](https://www.typescriptlang.org/) as a main framework.  
The project is then generate as a JamStack static website and hosted on [GitLab pages](https://docs.gitlab.com/ee/user/project/pages/).

The project is using [ESLint](https://eslint.org/) for linting and code good practices tracking.  
The project is using [Prettier](https://prettier.io/) for code formatting.

#### Available commands

`npm run build`  
Build the project (Typescript transpilation).

`npm run preview`  
Launch a preview server for the builded version

`npm run generate`  
Generate a static website from the project (in `.output/public`)

`npm run dev`  
Launch a dev server of the project with hot reload (HMR) enabled to see live updates

`npm run lint`  
Execute linter (eslint) on the project files

`npm run lint:fix`  
Execute linter (eslint) with `--fix` on the project files to automatically fix some lint errors

`npm run format`  
Execute formatter (prettier) on the project files and write formatted code in them

#### Git hooks

##### Issue id auto-filler

This custom Git hook allow to write your commit without the issue id, as it will automatically insert it at the start of a commit (if not already present, avoiding duplications), so you don't have to.  
Both commmiting using `git commit -m` and `git commit` editor are supported.

##### Commit checker

This custom Git hook will check every commit you do, and ensure that it is following [our convention](#commit-convention). If a commit does not match the convention, it will be aborted.

##### Branch name checker

This custom Git hook will check every branch you're trying to push to, and ensure that it is following [our convention](#branch-naming-convention). If the branch name does not match the convention, the push will be aborted.

##### Merge request link generator

This custom Git hook will display a link to quickly create a well-configured merge request each time your are pushing to a branch.

##### Lint staged

This Git hook is using [lint-staged](https://github.com/lint-staged/lint-staged) to automatically run the formatter and linter on the modified files (staged files) before commiting, so files are automatically formatted.

### Conventions

This repository is following a bunch of conventions to have a uniform code base.

#### Commit convention

To keep the commit history easy to read, commits must be clear and detailed.  
Please read [Atomic commits](#atomic-commits) first.

Commits should follow the following format:

```
#<issue-id> :<gitmoji>: [<scope>] <description>
<body>
```

- `<issue-id>`: The GitLab issue id this branch is linked to. The issue id is a number
- `<gitmoji>`: The Gitmoji to label your commit, see [Gitmojies](#gitmojies)
- `<scope>`: **[Optional, Encouraged]** The scope this commit's changes acts on (Login page, Button component, Database service…). This should not be more than two words.
- `<description>`: A short description of the work contained in the commit. This description should be at least 10 characters long. Here is a little tip to know what to put as a description: Complete this phrase: If merged, this commit will... and here it is, you have a description! (don’t put the start of the phrase into your commit).
- `<body>`: **[Optional]** Additional information, this could be links, text, requests…

##### Examples

```
#234 :bug: [Bed card] Fix wrong patient lastname displayed
```

```
#234 :sparkles: [Database service] Secure connection to the database
Following the jinja connection conventions: https://myinsanewebsite.com/wouhou
```

```
#234 :pencil: [Readme] Explain how to use Ansible
```

```
#234 :art: Format code
```

```
#234 :wrench: Export compile_commands.json file when building project
```

#### Atomic commits

Your commits should be atomics (more information about what is an atomic commit in the [Promyze webinar](https://www.youtube.com/watch?v=4eUeEQe2GJk)).

Atomic commits allow others to easily read what your commits are doing.

The goal is to isolate as many as possible changes you do. You should commit your changes step by step (not a big solo commit).

Another important rule of atomic commits is to be functional and isolated. This means that it should be possible to revert any commit without affecting the other and without breaking the build.  
For example, you should push everything related to the code you are committing. You will not commit the code, then the tests, then the documentation but all at the same time. Everything that is linked should (and must) be in the same commit. But you should split your commits as much as possible so they are readable.  
Your commits change should not be hard to read.

#### Gitmojies

Gitmojies are a concept that allows people to easily add graphic indications about what they do.  
The goal is to provide a fast graphic indication of what is something about.

This is mostly used in Git commits and Code reviews.

The big power of Gitmojies is that they are super easy to use, you don’t need to go find emojis in any hard way. This work just like on Discord or any Atlassian product, just type `:` then the name of the Gitmoji (for example `bug` and type `:` again, and this will be graphically replaced by a real emoji (:bug: in this case).  
You can find a reference to the existing Gitmojis on the [Official website](https://gitmoji.dev/).

We use Gitmojis in our commits to let people who are reviewing this commit (or merge request) easily see what each commit is about in less than a second.

**Gitmojis to use**

| Gitmoji and name                                          | Meaning                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| :sparkles: `:sparkles:`                                   | Introduce a new feature                                      |
| :bug: `:bug:`                                             | Fix a bug                                                    |
| :art: `:art:`                                             | Format code or structure without alteration of how it works  |
| :recycle: `:recycle:`                                     | Refactor code or deletion of deprecated code                 |
| :traffic_light: `:traffic_light:`                         | Add or update tests                                          |
| :pencil: `:pencil:`                                       | Add or update documentation (this includes code comments)    |
| :lipstick: `:lipstick:`                                   | Add or update UI styles files                                |
| :wrench: `:wrench:`                                       | Add or update configuration and build files (.gitignore too) |
| :truck: `:truck:`                                         | Move or delete a resource                                    |
| :arrow_up: `:arrow_up:` :arrow_down: `:arrow_down:`       | Upgrade or downgrade a dependency                            |
| :label: `:label:`                                         | Publish a new release / Update version tag                   |
| :zap: `:zap:`                                             | Improve performance, optimization                            |
| :rewind: `:rewind:`                                       | Undo operation                                               |
| :tada: `:tada:`                                           | Initial commit / Repository creation                         |
| :beers: `:beers:`                                         | Apply suggestions given by coworkers during code review      |
| :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` | Merge related                                                |
| :construction: `:construction:`                           | Work In Progress (commit to be deleted)                      |

#### Branch naming convention

To keep branches readable, you must name the branch you create according to the following format:

```
<issue-id>-<issue-summary>
```

- `<issue-id>`: The GitLab issue id this branch is linked to. The issue id should is a number
- `<issue-summary>`: The summary of the GitLab issue, replacing spaces with `-`.

The branches you create should always take the source into the `main` branch.

##### Examples

```
234-Setup-conventions
```

```
24-Add-login-button
```

#### Code conventions

The code produced for this project is following a bunch of conventions to keep it uniform:

1. [VueJS style guide](https://vuejs.org/style-guide/)
