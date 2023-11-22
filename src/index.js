import "./index.css";
import {
  buildInputHtml,
  buildLabeledInputHtml,
  buildCountrySelect,
  buildTextHtml,
  wrapHtmlElements,
} from "./htmlBuilders";

const countryPostalCodeValidations = [
  {
    country: "Australia",
    regex: /[0-9]{4}/,
  },
  {
    country: "Austria",
    regex: /[0-9]{4}/,
  },
  {
    country: "Belgium",
    regex: /[0-9]{4}/,
  },
  {
    country: "Brazil",
    regex: /[0-9]{5}[-]?[0-9]{3}/,
  },
  {
    country: "Canada",
    regex: /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/,
  },
  {
    country: "Denmark",
    regex: /[0-9]{3,4}/,
  },
  {
    country: "Holland",
    regex: /[1-9][0-9]{3}\s?[a-zA-Z]{2}/,
  },
  {
    country: "Germany",
    regex: /[0-9]{5}/,
  },
  {
    country: "Hungary",
    regex: /[0-9]{4}/,
  },
  {
    country: "Italy",
    regex: /[0-9]{5}/,
  },
  {
    country: "Japan",
    regex: /\d{3}-\d{4}/,
  },
  {
    country: "Luxembourg",
    regex: /(L\s*(-|—|–))\s*?[\d]{4}/,
  },
  {
    country: "Poland",
    regex: /[0-9]{2}-[0-9]{3}/,
  },
  {
    country: "Spain",
    regex: /((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}/,
  },
  {
    country: "Sweden",
    regex: /\d{3}\s?\d{2}/,
  },
  {
    country: "United Kingdom",
    regex:
      /[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}/,
  },
  {
    country: "United States",
    regex: /(\d{5}([-]\d{4})?)/,
  },
];

const countriesList = countryPostalCodeValidations.map((item) => item.country);

const formInputsList = [
  {
    instructionsText: "Please enter a valid email address:",
    inputHtml: buildInputHtml("text", "email-input", "email"),
    isRequired: true,
  },

  {
    instructionsText: "Please select a country:",
    inputHtml: buildCountrySelect(countriesList),
    isRequired: true,
  },

  {
    instructionsText: "Please enter a valid postal code:",
    inputHtml: buildInputHtml("text", "postal-code-input", "postal-code"),
    isRequired: true,
  },

  {
    instructionsText: "Please enter a password:",
    inputHtml: buildInputHtml("password", "pw-input", "pw"),
    isRequired: true,
  },

  {
    instructionsText: "Please verify your password:",
    inputHtml: buildInputHtml("password", "pw-verification-input", "pw"),
    isRequired: true,
  },
];

const formInputsHtmlList = formInputsList.map(
  ({ instructionsText, inputHtml, isRequired }) =>
    buildLabeledInputHtml(inputHtml, instructionsText, isRequired)
);

const requiredTagHtml = buildTextHtml("p", "*required");

const form = wrapHtmlElements("form", requiredTagHtml, ...formInputsHtmlList);

const body = document.querySelector("body");

body.appendChild(form);
