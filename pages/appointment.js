'use strict';

const moment = require('moment');

const APPOINTMENT_URL = 'https://www.plushcare.com/booking/primary-care/appointments/';

const elements = {

    appointmentWrapper: '#appointments-wrapper',

    datePicker: '.react-datepicker__input-container input',

    appointmentList: {
        selector: '//div[contains(@class, "appointment ")][1]',
        locateStrategy: 'xpath'
    }
};

/**
 * home Functions
 */
const pageCommands = {

    visit: function () {
        this
            .navigate(INSURANCE_URL)
            .waitForElementVisible('@appointmentWrapper');

        return this;
    },

    selectDateFromDatePicker: function (day) {
        const appointmentDate = moment(new Date()).add(day, 'days');
        const datePickerSelector = `#appointments-wrapper .react-datepicker__day[aria-label="Choose ${appointmentDate.format('dddd, MMMM Do, YYYY')}"]`;
        const inputDatePickerSelecotr = `#date-picker-input[value="${appointmentDate.format('MM/DD/YYYY')}"]`;

        this
            .waitForElementVisible('@appointmentWrapper')
            .waitForElementVisible('@datePicker')
            .click('@datePicker')
            .waitForElementVisible(datePickerSelector)
            .click(datePickerSelector)
            .waitForElementVisible(inputDatePickerSelecotr)
            .waitForElementVisible('@appointmentList');

        return this;
    },

    selectDoctorFromDoctorList: function (rating) {
        const selector = `//*[@data-testid="rating"]/following-sibling::span[text() > "${rating}"]`;
        let self = this;
        this.api.elements('xpath', selector, function (elementCount) {
            const randomDoctor = Math.floor(Math.random() * elementCount.value.length + 1);
            const bookButtonSelector = `(//*[@data-testid="rating"]/following-sibling::span[text() > "${rating}"])[${randomDoctor}]/../../following::div[2]//button`;
            self
                .api.useXpath()
                .waitForElementVisible(bookButtonSelector)
                .click(bookButtonSelector)
                .useCss();
        });


    }

};

module.exports = {
    commands: [pageCommands],
    elements: elements
};
