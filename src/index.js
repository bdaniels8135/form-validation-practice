import {
  buildInputHtml,
  buildLabeledInputHtml,
  buildCountrySelect,
  buildTextHtml,
  wrapHtmlElements,
} from "./htmlBuilders";

const countriesList = [
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Denmark",
  "Holland",
  "Germany",
  "Hungary",
  "Italy",
  "Japan",
  "Luxembourg",
  "Poland",
  "Spain",
  "Sweden",
  "United Kingdom",
  "United States",
];

const formInputsList = [
  {
    instructionsText: "Please enter a valid email address:",
    inputHtml: buildInputHtml("text", "email-input", "email"),
  },

  {
    instructionsText: "Please select a country:",
    inputHtml: buildCountrySelect(countriesList),
  },

  {
    instructionsText: "Please enter a valid postal code:",
    inputHtml: buildInputHtml("text", "postal-code-input", "postal-code"),
  },

  {
    instructionsText: "Please enter a password:",
    inputHtml: buildInputHtml("password", "pw-input", "pw"),
  },

  {
    instructionsText: "Please verify your password:",
    inputHtml: buildInputHtml("password", "pw-verification-input", "pw"),
  },
];

const formInputsHtmlList = formInputsList.map(
  ({ instructionsText, inputHtml }) =>
    buildLabeledInputHtml(inputHtml, instructionsText)
);

const requiredTagHtml = buildTextHtml("p", "*required");

const form = wrapHtmlElements("form", requiredTagHtml, ...formInputsHtmlList);

const body = document.querySelector("body");

body.appendChild(form);
