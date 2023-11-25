import "./index.css";
import postalCodeValidations from "./postalCodeValidations";
import {
  buildInputHtml,
  buildLabeledInputHtml,
  buildCountrySelect,
  buildTextHtml,
  wrapHtmlElements,
} from "./htmlBuilders";

const countriesList = Object.keys(postalCodeValidations);

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

const requiredTagHtml = buildTextHtml("p", "*required");

const formInputsHtmlList = formInputsList.map(
  ({ instructionsText, inputHtml, isRequired }) =>
    buildLabeledInputHtml(inputHtml, instructionsText, isRequired)
);

const submitBtn = buildInputHtml("submit", "submit-btn", "submit-btn");

const form = wrapHtmlElements(
  "form",
  requiredTagHtml,
  ...formInputsHtmlList,
  submitBtn
);

const body = document.querySelector("body");

body.appendChild(form);

const emailInput = document.querySelector("#email-input");
const countrySelect = document.querySelector("#country-select");
const postalCodeInput = document.querySelector("#postal-code-input");
const pwInput = document.querySelector("#pw-input");
const pwVerificationInput = document.querySelector("#pw-verification-input");

// This is the HTML standard
function validateEmailAddress() {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const result = emailRegex.test(emailInput.value);
  const invalidMessage = "This is not a valid email address.";
  return {
    result,
    invalidMessage,
  };
}

// Upper, Lower, Number/Special Character and min of 8
function validatePassword() {
  const pwRegex =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const result = pwRegex.test(pwInput.value);
  const invalidMessage =
    "Min 8 characters including uppercase, lowercase and numbers/specials.";
  return {
    result,
    invalidMessage,
  };
}

function validatePasswordMatch() {
  const result = pwInput.value === pwVerificationInput.value;
  const invalidMessage = "Passwords do not match.";
  return {
    result,
    invalidMessage,
  };
}

function validatePostalCode() {
  const countryPostalCodeRegex = postalCodeValidations[countrySelect.value];
  const result = countryPostalCodeRegex.test(postalCodeInput.value);
  const invalidMessage = "Must be a valid postal code in selected country.";
  return {
    result,
    invalidMessage,
  };
}

function addValidationToInput(input, validationFunc) {
  input.addEventListener("focusout", (event) => {
    const inputErrorSpan = event.target.nextSibling;
    const { result, invalidMessage } = validationFunc();
    if (result) inputErrorSpan.innerText = "\n";
    else inputErrorSpan.textContent = invalidMessage;
  });
}

addValidationToInput(emailInput, validateEmailAddress);
addValidationToInput(postalCodeInput, validatePostalCode);
addValidationToInput(pwInput, validatePassword);
addValidationToInput(pwVerificationInput, validatePasswordMatch);
