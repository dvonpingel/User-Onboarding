import { unstable_renderSubtreeIntoContainer } from "react-dom";

describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });


    const userInput = () => cy.get('input[name="username"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passInput = () => cy.get('input[name="password"]');
    const termsCheck = () => cy.get('input[name="terms"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    // here go our tests
    it("sanity test to make sure tests work", () => {
        // expect is an assertion
        // there can be many assertions per test
        // though inside the it statement (the test) usually
        // they are logically grouped together
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    });

    it('the proper elements are showing on the screen', () => {
        userInput().should('exist');
        cy.get('input[name="foobar"]').should('not.exist');
        emailInput().should('exist');
        passInput().should('exist');
        termsCheck().should('exist');
        submitBtn().should('exist');
    })

    it('can input username properly', () => {
        userInput()
            .should('have.value', '')
            .type('dvonpingel')
            .should('have.value', 'dvonpingel');
    })

    it('can input email and password', () => {
        emailInput()
            .should('have.value', '')
            .type('dvonpingel@gmail.com')
            .should('have.value', 'dvonpingel@gmail.com');

        passInput()
            .should('have.value', '')
            .type('asdfg')
            .should('have.value', 'asdfg');
    })

    it('can accept terms and conditions', () => {
        termsCheck().click();
    })

    it('can submit information', () => {
        userInput().type('dvonpingel');
        emailInput().type('dvonpingel@gmail.com');
        passInput().type('asdfg');
        termsCheck().click();
        submitBtn().click();
    })

    it('can check validation before inputs are fulfilled', () => {
        emailInput().type('dvonpingel@gmail.com');
        submitBtn().should('be.disabled');
        userInput().type('dvonpingel');
        submitBtn().should('be.disabled');
        passInput().type('asdfg');
        submitBtn().should('be.disabled');
        termsCheck().click();
        submitBtn().should('not.be.disabled');
    })
});