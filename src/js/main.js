import { form, dayInput, monthInput, yearInput, errorInput, y, m, d } from "./importElements";
import regexDate from "./regexDate";
import date from "./date";

let valueYear = null;
let valueMonth = null;
let valueDay = null;

const { year } = date;

const { dayRegex, monthRegex, yearRegex } = regexDate;

const newYearRegex = new RegExp(yearRegex);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    calculateAge();
});

const errorInputValue = (text) => {
    errorInput.forEach(err => {
        err.innerHTML = text;
    });
};

const calculateAge = () => {

    if (dayInput.value == "" || monthInput.value == "" || yearInput.value == "") {

        errorInputValue("Error fields are empty");

    } else if (!dayRegex.test(dayInput.value) || !monthRegex.test(monthInput.value) || !newYearRegex.test(yearInput.value)) {

        errorInputValue("Error the data is not correct");

    } else {

        errorInputValue("");

        valueYear = Math.abs(yearInput.value - year);
        valueMonth = Math.abs((monthInput.value - 1) + (valueYear * 12));
        valueDay = Math.abs(year - dayInput.value);

        y.innerHTML = valueYear;
        m.innerHTML = valueMonth;
        d.innerHTML = valueDay;

    }

};