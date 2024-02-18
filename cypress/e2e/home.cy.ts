describe("Testing Landpage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Banner tests :", () => {
    it("should load the home screen", () => {});

    it("should have logo image", () => {
      cy.get(".styles_logoImage__sAkc0").should("exist");
    });

    it("should have banner title text", () => {
      cy.get("h1").contains("Be good to yourself").should("exist");
    });

    it("should have banner description text", () => {
      cy.get(".styles_bannerText__Zy84C > p")
        .contains(
          "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
        )
        .should("exist");
    });

    it("should have banner button to the quiz", () => {
      cy.get("button").contains("Take the quiz").should("exist");
    });

    it("should button click leaves to the quiz", () => {
      cy.get("button").click();
    });
  });

  describe("Card tests :", () => {
    it("should have cards title", () => {
      cy.get("h2").contains("What we can help with").should("exist");
    });

    it("should have card 01", () => {
      cy.get(".home_cardContainer__shJh4 > :nth-child(2)")
        .contains("Hair loss")
        .should("exist");
    });

    it("should have card 02", () => {
      cy.get(".home_cardContainer__shJh4 > :nth-child(3)")
        .contains("Erecetile dysfunction")
        .should("exist");
    });
  });

  describe("Footer tests :", () => {
    it("should have footer", () => {
      cy.get(".styles_footerWrapper__fE1oy").should("exist");
    });

    it("should have footer image logo", () => {
      cy.get(".styles_logo__EQEiO").should("exist");
    });

    it("should have footer product list", () => {
      cy.get(".styles_footerLinks__9e1kQ > :nth-child(1)").should("exist");
    });

    it("should footer product list link leaves to Manual.co", () => {
      cy.get(
        ".styles_footerLinks__9e1kQ > :nth-child(1) > :nth-child(2) > a"
      ).click();
    });

    it("should footer Company list link leaves to Manual.co", () => {
      cy.get(
        ".styles_footerLinks__9e1kQ > :nth-child(2) > :nth-child(2) > a"
      ).click();
    });

    it("should footer Info list link leaves to Manual.co", () => {
      cy.get(
        ".styles_footerLinks__9e1kQ > :nth-child(3) > :nth-child(2) > a"
      ).click();
    });

    it("should footer Follow list link leaves to Manual.co", () => {
      cy.get(".styles_social__5hd63 > :nth-child(1) > img").click();
    });
  });
});
