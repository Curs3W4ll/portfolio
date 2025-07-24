// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// eslint-disable-next-line mocha/no-top-level-hooks
beforeEach(function () {
  const featureFlags = [
    "display-resume",
    "display-projects-archive",
    "display-animated-eyes",
    "display-language-switcher",
    "display-theme-switcher",
  ];

  cy.fixture("UnleashFeatureFlags.json").then((data) => {
    let i: number;
    for (i = 1; i < featureFlags.length; i++) {
      data.toggles.push({ ...data.toggles[0] });
    }

    i = 0;
    featureFlags.forEach((ff) => {
      data.toggles[i].name = ff;
      i++;
    });

    cy.intercept("GET", "https://portfolio.unleash.hervaud.fr/proxy*", data).as("unleash");
  });
});
