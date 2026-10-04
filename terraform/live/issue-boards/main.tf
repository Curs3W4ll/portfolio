terraform {
  required_version = ">=1.9, <2.0.0"

  backend "http" {}

  required_providers {
    gitlab = {
      source  = "gitlabhq/gitlab"
      version = "~> 19.3"
    }
  }
}

provider "gitlab" {
  base_url = "https://gitlab.com"
}

module "boards" {
  source  = "gitlab.com/curs3_w4ll/issue-board/gitlab"
  version = "0.0.2"

  scope   = "project"
  project = "curs3_w4ll/portfolio"

  boards = {
    "Development" = {
      lists = ["bug", "scope::front", "scope::infra", "scope::content", "documentation"],
    },
  }
}
