//Test to book an doctor appointment whose rating is greater than 4.8 on second day from current day

module.exports = {

    'Navigate to PlushCare home page': (browser) => {
        browser.page.home()
            .visit();
    },

    'Select book an appointment button ': (browser) => {
        browser.page.home()
            .selectBookAnAppointment();
    },

    'Verify user is navigated to opt insurance page': (browser) => {
        browser.page.insurance()
            .VerifyOptInsuranceOptions();
        browser.pause(1000); //wait for buttons to load 
    },

    'Select pay by myself insurance option': (browser) => {
        browser.page.insurance()
            .selectPayMyselfOption();

        browser.page.insurance()
            .waitForElementVisible('#appointments-wrapper');

    },

    'Select second day from today on date picker for appointment': (browser) => {
        browser.page.appointment()
            .selectDateFromDatePicker(2);
    },

    'Select doctor from list whose rating is greater than 4.8': (browser) => {
        browser.page.appointment()
            .selectDoctorFromDoctorList(4.8);
    },

    'Verify user is navigated to profile creation page': (browser) => {
        browser.page.profileCreation()
            .VerifyRatingOnProfileCreation();
    },
};
