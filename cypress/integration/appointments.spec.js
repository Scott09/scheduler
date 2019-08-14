describe("Appointments", () => {

  it("Booking", () => {
    cy.request("POST", "/api/debug/reset");
    // visit 
    cy.visit("/");
    // check if the page contains the string monday
    cy.contains("Monday");


    // find the first button with the alt which equals Add and click it

    cy.get("[alt='Add']")
    .first().click();

    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']").click();
    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");

  })

  it("Editing", () => {
   
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']").click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");

  })

  it("should cancel an interview", () => {
    
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true });

    cy.contains("Confirm").click();

    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });
}) 