locals {
  # Labels created in the UI before this unit existed, by GitLab label ID.
  existing_label_ids = {
    "bug"               = 35804634
    "dependencies"      = 39216195
    "documentation"     = 35804637
    "enhancement"       = 35804641
    "scope::content"    = 35804662
    "scope::front"      = 35804643
    "scope::infra"      = 35804645
    "security"          = 36055234
    "severity:critical" = 38068248
    "severity:high"     = 36055235
    "severity:low"      = 41104582
    "severity:moderate" = 36497719
    "tofu:apply"        = 54228718
  }
}

import {
  for_each = local.existing_label_ids
  to       = module.labels.gitlab_project_label.labels[each.key]
  id       = "57427727:${each.value}"
}
