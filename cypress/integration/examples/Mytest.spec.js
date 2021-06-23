describe("navigate to homepage", () => {
  it("visits the page", () => {
    cy.visit("http://localhost:3000/");
  });
});
describe("navigate to github page", () => {
  it("visits the page", () => {
    cy.visit("http://localhost:3000/Github");
  });
});
