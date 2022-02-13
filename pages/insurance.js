'use strict';

const INSURANCE_URL ='https://www.plushcare.com/booking/primary-care/method/'

const elements = {

    useMyInsuranceButton: {
        selector: '//div[contains(@role, "main")]//button[contains(text(), "Use my insurance")]',
        locateStrategy: 'xpath'
    },

    payMyselfButton: {
        selector: '//div[contains(@role, "main")]//button[contains(text(), "I\'m paying for myself")]',
        locateStrategy: 'xpath'
    },
};

/**
 * Insurnace Page Functions
 */
const pageCommands = {
    
    /*
     * Redirected to insurance url
     */
    visit: function () {
        this
            .navigate(INSURANCE_URL)
            .waitForElementVisible('.container-fluid');

        return this;
    },

    /*
     * Verify Insurance options buttons
     */
    VerifyOptInsuranceOptions: function () {
        this
            .waitForElementVisible('@useMyInsuranceButton')
            .waitForElementVisible('@payMyselfButton');

        return this;
    },

    /*
     * Select Use My Insurance option button
     */
    selectUseMyInsuranceOption: function () {
        this
            .waitForElementVisible('@useMyInsuranceButton')
            .moveToElement('@useMyInsuranceButton', 0, 0)
            .click('@useMyInsuranceButton');

        return this;
    },

    /*
     * Select Pay Myself Insurance option button
     */
    selectPayMyselfOption: function () {
        this
            .waitForElementVisible('@payMyselfButton')
            .moveToElement('@payMyselfButton', 0, 0)
            .click('@payMyselfButton');

        return this;
    },

};

module.exports = {
    commands: [pageCommands],
    elements: elements
};
