describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to Tuesday", () => {
    // visit root url
    cy.visit("/");
    // swap to list item that contains string Tuesday
    cy.get("li").contains("Tuesday").click();
    // check to see if that item now has the class selected
    cy.contains("[data-testid=day]", "Tuesday").should("have.class", "day-list__item--selected");

  })
});

