'use strict';

const elements = {

    createProfile: {
        selector: '//div[contains(@role, "main")]//h1[contains(text(), "Create profile")]',
        locateStrategy: 'xpath'
    },

    rating: {
        selector: '//*[@data-testid="rating"]/following-sibling::span',
        locateStrategy: 'xpath'
    }

};

/**
 * home Functions
 */
const pageCommands = {

    VerifyProfileCreation: function () {
        this
            .waitForElementVisible('@createProfile')
            .waitForElementVisible('@rating')
            .getText('@rating', function (result) {
                this.assert.ok(result.value >= 4.8);
            });

        return this;
    }
};

module.exports = {
    commands: [pageCommands],
    elements: elements
};
