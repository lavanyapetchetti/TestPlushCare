'use strict';

/**
 * Plans Page Object
 */
const elements = {

    header : '.HeaderBottom',

    bookAnAppointment: {
        selector: '(//div[contains(@class,"gb-container-content")]//a[text()="Book an Appointment"])[1]',
        locateStrategy: 'xpath',
    },


};

/**
 * home Functions
 */
const pageCommands = {

    visit: function () {
        this
            .navigate(this.api.launch_url)
            .waitForElementVisible('@header');

        return this;
    },

    selectBookAnAppointment: function () {
        this
            .waitForElementVisible('@bookAnAppointment')
            .click('@bookAnAppointment');

        return this;
    },

};

module.exports = {
    commands: [pageCommands],
    elements: elements
};