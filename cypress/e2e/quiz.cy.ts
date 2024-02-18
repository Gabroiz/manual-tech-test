describe("Testing Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("button").click();
  });

  it("should contain header", () => {
    cy.get(".styles_header__NORps").should("exist");
  });

  it("should contain header image", () => {
    cy.get(".styles_header__NORps > a > img").should("exist");
  });

  it("should header image leave back to home", () => {
    cy.get(".styles_header__NORps > a > img").click();
  });

  it("should header image reset quiz steps", () => {
    cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
    cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
      ".styles_complete__t6Uiy"
    );
    cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
    cy.get(".styles_header__NORps > a > img").click();
  });

  describe("Question 1 tests :", () => {
    it("should contain stepper", () => {
      cy.get(".styles_stepper__VmfQv").should("exist");
    });

    it("should contain title", () => {
      cy.get("h1").should("exist");
    });

    it("should contain options button", () => {
      cy.get(".styles_quizOptions__4SSWW").should("exist");
    });

    it("should contain options button content", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)")
        .contains("Temples")
        .should("exist");
    });

    it("should non rejected option lead to 2 step", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
    });

    it("should rejected option lead to rejection", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(3)").click();
      cy.get("h1").contains("You are not eligible");
    });

    it("should every option work", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)")
        .find(".styles_complete__t6Uiy")
        .click();
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)")
        .find(".styles_complete__t6Uiy")
        .click();
      cy.get(".styles_quizOptions__4SSWW > :nth-child(3)").click();
      cy.get("button").contains("Back to Quiz").click();
      cy.get(".styles_quizOptions__4SSWW > :nth-child(4)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)")
        .find(".styles_complete__t6Uiy")
        .click();
      cy.get(".styles_quizOptions__4SSWW > :nth-child(5)").click();
      cy.get("button").contains("Back to Quiz").click();
      cy.get(".styles_quizOptions__4SSWW > :nth-child(6)").click();
      cy.get("button").contains("Back to Quiz").click();
    });
  });

  describe("Question 2 tests", () => {
    beforeEach(() => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
    });

    it("should contain title", () => {
      cy.get("h1").should("exist");
    });

    it("should contain options button", () => {
      cy.get(".styles_quizOptions__4SSWW").should("exist");
    });

    it("should contain options button content", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)")
        .contains("Yes")
        .should("exist");
    });

    it("should non rejected option lead to 3 step", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(3) > .styles_step__jvsnr").contains("3");
    });

    it("should rejected option lead to rejection", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get("h1").contains("You are not eligible");
    });

    it('should "Yes" option leads to rejection', () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get("h1").contains("You are not eligible");
    });

    it('should "No" option leads to next step', () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(3) > .styles_step__jvsnr").contains("3");
    });

    it('should "previous question" button exist', () => {
      cy.get(".styles_previousButton__xp6Y7").should("exist");
    });

    it('should "previous question" button leave to previous question', () => {
      cy.get(".styles_previousButton__xp6Y7").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").not(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(1) > .styles_step__jvsnr").contains("1");
    });
  });

  describe("Question 3 tests", () => {
    beforeEach(() => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(3) > .styles_step__jvsnr").contains("3");
    });

    it("should contain title", () => {
      cy.get("h1").should("exist");
    });

    it("should contain options button", () => {
      cy.get(".styles_quizOptions__4SSWW").should("exist");
    });

    it("should contain options button content", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)")
        .contains("Yes")
        .should("exist");
    });

    it("should non rejected option lead to final step", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(".styles_stepper__VmfQv > :nth-child(3)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get("h1").contains("We have the solution for you!");
    });

    it("should rejected option lead to rejection", () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get("h1").contains("You are not eligible");
    });

    it('should "Yes" option leads to rejection', () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get("h1").contains("You are not eligible");
    });

    it('should "No" option leads to next step', () => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(".styles_stepper__VmfQv > :nth-child(3)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get("h1").contains("We have the solution for you!");
    });

    it('should "previous question" button exist', () => {
      cy.get(".styles_previousButton__xp6Y7").should("exist");
    });

    it('should "previous question" button leave to previous question', () => {
      cy.get(".styles_previousButton__xp6Y7").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").not(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
    });
  });

  describe("Success scenarios", () => {
    beforeEach(() => {
      cy.get(".styles_quizOptions__4SSWW > :nth-child(1)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(1)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(2) > .styles_step__jvsnr").contains("2");
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(2)").find(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(3) > .styles_step__jvsnr").contains("3");
      cy.get(".styles_quizOptions__4SSWW > :nth-child(2)").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(3)").find(
        ".styles_complete__t6Uiy"
      );
    });

    it("should contain title", () => {
      cy.get("h1").should("exist");
    });

    it('should "Go to Manual" button exist', () => {
      cy.get(".styles_buttons__qj_e_ > a")
        .contains("Go to Manual")
        .should("exist");
    });

    it('should "Go to Manual" button leave to "Manual.co"', () => {
      cy.get(".styles_buttons__qj_e_ > a").contains("Go to Manual").click();
    });

    it('should manual link leave to "Manual.co"', () => {
      cy.get("p > a").click();
    });

    it('should "previous question" button exist', () => {
      cy.get("button").contains("Back to Quiz").should("exist");
    });

    it('should "previous question" button leave to previous question', () => {
      cy.get("button").contains("Back to Quiz").click();
      cy.get(".styles_stepper__VmfQv > :nth-child(3)").not(
        ".styles_complete__t6Uiy"
      );
      cy.get(":nth-child(3) > .styles_step__jvsnr").contains("3");
    });
  });
});
