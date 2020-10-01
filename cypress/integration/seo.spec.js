context("SEO", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000")
  })

  it("Should have metas", () => {
    cy.get("html").should("have.attr", "lang", "en")
    cy.get("title").contains("Theo Dammaretz")
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Theo Dammaretz online business card and resume homemade website and portfolio"
    )
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Theo Dammaretz online business card and resume homemade website and portfolio"
    )
    cy.get('meta[name="keywords"]').should(
      "have.attr",
      "content",
      "resume, CV, Theo, Dammaretz, software, engineer, international, developper, developer"
    )
  })

  it("Should have only one H1", () => {
    cy.get("h1").should("have.length", 1)
  })

  it("Should have only one H2", () => {
    cy.get("h2").should("have.length.lessThan", 2)
  })

  it("Should have robots.txt", () => {
    cy.request("/robots.txt")
      .its("body")
      .should("equal", "User-agent : *")
  })

  it("Should have no follow on external links", () => {
    cy.get("a").each(a =>
      cy.wrap(a).should("have.attr", "href").then(href => {
        if (/^https?:\/\/.+/.test(href)) {
          cy.wrap(a).should("have.attr", "rel", "nofollow noopener")
        }
      })
    )
  })

  it("Should have some jsonld snippet", () => {
    cy.get("[data-test=jsonld]")
      .should("have.length.above", 0)
  })

  it("Should have manifest.json", () => {
    cy.request("/manifest.json")
      .its("body")
      .should("to.not.be.null")
  })
})
