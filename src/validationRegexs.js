const postalCodeValidations = {
  Australia: /[0-9]{4}/,
  Austria: /[0-9]{4}/,
  Belgium: /[0-9]{4}/,
  Brazil: /[0-9]{5}[-]?[0-9]{3}/,
  Canada: /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/,
  Denmark: /[0-9]{3,4}/,
  Holland: /[1-9][0-9]{3}\s?[a-zA-Z]{2}/,
  Germany: /[0-9]{5}/,
  Hungary: /[0-9]{4}/,
  Italy: /[0-9]{5}/,
  Japan: /\d{3}-\d{4}/,
  Luxembourg: /(L\s*(-|—|–))\s*?[\d]{4}/,
  Poland: /[0-9]{2}-[0-9]{3}/,
  Spain: /((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}/,
  Sweden: /\d{3}\s?\d{2}/,
  "United Kingdom":
    /[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}/,
  "United States": /(\d{5}([-]\d{4})?)/,
};

// This is the HTML standard
const emailValidationRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Upper, Lower, Number/Special Character and min of 8
const pwValidationRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export { postalCodeValidations, emailValidationRegex, pwValidationRegex };
