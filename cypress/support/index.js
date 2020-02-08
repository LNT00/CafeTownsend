require("./commands");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Cookies.defaults({
  whitelist: ["_CafeTownsend-Angular-Rails_session"]
});