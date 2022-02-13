'use strict';

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

    /**
    * Launch plushcare home page
    */
    visit: function () {
        this
            .navigate(this.api.launch_url)
            .waitForElementVisible('@header');

        return this;
    },

    /**
    * Select Book an Appointment button on home page
    */
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
