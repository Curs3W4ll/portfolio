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

locals {
  gitlab_base_url = "https://gitlab.com"
}

provider "gitlab" {
  base_url = local.gitlab_base_url
}

module "bot" {
  source  = "gitlab.com/curs3_w4ll/service-account/gitlab"
  version = "0.0.1"

  gitlab_base_url = local.gitlab_base_url
  project         = "curs3_w4ll/portfolio"
  name            = "Terraform Provider Rotator Bot"
  username        = "portfolio-terraform-provider-rotator-bot"
  access_level    = "maintainer"
  token_name      = "Terraform Provider Rotator Bot Token used in Portfolio GitLab CI to rotate the main provider token"
  token_scopes    = ["api"]

  token_rotate_before_days       = 14
  token_rotation_expiration_days = 180

  ci_variable_token_name        = "GITLAB_TOFU_PROVIDER_ROTATOR_TOKEN"
  ci_variable_token_hidden      = true
  ci_variable_token_description = "Token used by CI to authenticate the Terraform provider for the main terraform provider token rotation"

  avatar_path = "${path.module}/avatar.png"
}
