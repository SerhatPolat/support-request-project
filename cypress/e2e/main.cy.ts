describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should successfully submit the form", () => {
    // Step 1
    cy.get('input[placeholder="Firstname"]').type("Serhat");
    cy.get('input[placeholder="Lastname"]').type("Polat");
    cy.get('input[placeholder="Email"]').type("test@example.com");
    cy.get('input[placeholder="Phone"]').type("1234567890");
    cy.contains("Next").click();

    // Step 2
    cy.get('input[placeholder="Store URL"]').type("http://example.com/store");
    cy.contains("Trendyol").click();
    cy.contains("Submit").click();

    // Check for congrats message
    cy.contains("Congratulations");
    cy.contains("We saved your request.");
  });

  it("should show error message when submitting incomplete form", () => {
    cy.contains("Next").click();

    cy.contains("All fields are required to continue.");
  });
});

export {};
