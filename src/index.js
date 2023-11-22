import "./index.css";
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
