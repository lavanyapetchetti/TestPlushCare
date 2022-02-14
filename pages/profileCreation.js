'use strict';

const elements = {

    createProfile: {
        selector: '//div[contains(@role, "main")]//h1[contains(text(), "Create profile")]',
        locateStrategy: 'xpath'
    },

    rating: {
        selector: '//*[@data-testid="rating"]/following-sibling::span',
        locateStrategy: 'xpath'
    },

    firstName: 'input[name="first-name"]',

    lastName: 'input[name="last-name"]',

    dateOfBirth: 'input[name="dob"]',

    phoneNumber: 'input[name="phone"]',

    emailAddress: 'input[name="email"]',

    password: 'input[name="password"]',

    optIn: 'input[name="tos-opt-in"]',

    continueButton: {
        selector: '//button[text() = "Continue"]',
        locateStrategy: 'xpath'
    }

};

/**
 * Profile Creation Page Functions
 */
const pageCommands = {
    /**
     * Verify Profile creation Page
     */
    VerifyRatingOnProfileCreation: function () {
        this
            .waitForElementVisible('@createProfile')
            .waitForElementVisible('@rating')
            .getText('@rating', function (result) {
                this.assert.ok(result.value >= 4.8);
            });

        return this;
    },

    /**
     * Create profile
     */
    enterUserDetails: function (firstName, lastName, dob, gender, num, email, psw) {
        const selector = `//input[@aria-label="${gender}"]`;

        this
            .waitForElementVisible('@firstName')
            .setValue('@firstName', firstName)
            .waitForElementVisible('@lastName')
            .setValue('@lastName', lastName)
            .waitForElementVisible('@dateOfBirth')
            .setValue('@dateOfBirth', dob);
        this
            .useXpath()
            .waitForElementVisible(selector)
            .click(selector)
            .useCss();
        this
            .waitForElementVisible('@phoneNumber')
            .setValue('@phoneNumber', num)
            .waitForElementVisible('@emailAddress')
            .setValue('@emailAddress', email)
            .waitForElementVisible('@password')
            .setValue('@password', psw)
            .waitForElementVisible('@optIn')
            .click('@optIn')
            .waitForElementVisible('@continueButton')
            .click('@continueButton');

        return this;
    }
};

module.exports = {
    commands: [pageCommands],
    elements: elements
};
