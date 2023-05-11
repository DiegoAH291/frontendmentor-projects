import date from "./date";

const regexDate = {
    dayRegex: /^([1-9]|[12]\d|3[01])$/,
    monthRegex: /^(0?[1-9]|1[0-2])$/,
    yearRegex: `^(19[7-9]\\d|20[0-2]\\d|20[0-2][0-${date.year.toString().slice(-2)}])$`

};

export default regexDate;