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
    /*
     * Redirected to appointment url
     */
    visit: function () {
        this
            .navigate(APPOINTMENT_URL)
            .waitForElementVisible('@appointmentWrapper');

        return this;
    },

    /*
     * Selects second day from current day from date picker
     */
    selectDateFromDatePicker: function (day) {
        if (day === 0 || day === 30) {
            this.assert.ok(false, 'Given day is not valid');
        }
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

    /*
     * Book an appointment with doctor whose rating is greater than 4.8
     */
    selectDoctorFromDoctorList: function (rating) {
        if (rating < 4.8) {
            this.assert.ok(false, 'Given rating is not valid');
        } else {
            const selector = `//*[@data-testid="rating"]/following-sibling::span[text() >= "${rating}"]`;
            let self = this;
            this.api.elements('xpath', selector, function (elementCount) {
                const isPresent = elementCount.value.length > 0;
                if (isPresent) {
                    let randomDoctor = Math.floor(Math.random() * elementCount.value.length);
                    if (randomDoctor === 0){
                        randomDoctor = randomDoctor + 1;
                    }
                    const bookButtonSelector = `(//*[@data-testid="rating"]/following-sibling::span[text() >= "${rating}"])[${randomDoctor}]/../../following::div[2]//button`;
                    self
                        .api.useXpath()
                        .waitForElementVisible(bookButtonSelector)
                        .click(bookButtonSelector)
                        .useCss();
                } else {
                    self.api.assert.ok(false, 'Unable to find doctor with given rating');
                }
            });
        }
    },

    /*
     * Book an appointment with doctor by any rating
     */
    selectDoctorByRating: function (rating) {
        if (rating < 0) {
            this.assert.ok(false, 'Given rating is not valid');
        } else {
            const selector = `//*[@data-testid="rating"]/following-sibling::span[text() = "${rating}"]`;
            let self = this;
            this.api.elements('xpath', selector, function (elementCount) {
                const isPresent = elementCount.value.length > 0;
                if (isPresent) {
                    let randomDoctor = Math.floor(Math.random() * elementCount.value.length);
                    if (randomDoctor === 0){
                        randomDoctor = randomDoctor + 1;
                    }
                    const bookButtonSelector = `(//*[@data-testid="rating"]/following-sibling::span[text() = "${rating}"])[${randomDoctor}]/../../following::div[2]//button`;
                    self
                        .api.useXpath()
                        .waitForElementVisible(bookButtonSelector)
                        .click(bookButtonSelector)
                        .useCss();
                } else {
                    self.api.assert.ok(false, 'Unable to find doctor with given rating');
                }
            });
        }
    },


    /*
     * Book an appointment by nth doctor from the doctor's list
     */
    selectNthDoctorFromDoctorList: function (num) {
        const selector = `(//div[contains(@class, "appointment ")]//button[text()="Book"])[${num + 1}]`;

        this
            .useXpath()
            .waitForElementVisible(selector)
            .click(selector)
            .useCss();

        return this;

    }

};

module.exports = {
    commands: [pageCommands],
    elements: elements
};
