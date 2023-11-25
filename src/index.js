import "./index.css";
import {
  postalCodeValidations,
  emailValidationRegex,
  pwValidationRegex,
} from "./validationRegexs";
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

function validateEmailAddress() {
  const result = emailValidationRegex.test(emailInput.value);
  const invalidMessage = "This is not a valid email address.";
  const errorMessageSpan = emailInput.nextSibling;
  if (result) errorMessageSpan.textContent = "";
  else errorMessageSpan.textContent = invalidMessage;
  return result;
}

function validatePassword() {
  const result = pwValidationRegex.test(pwInput.value);
  const invalidMessage =
    "Min 8 characters including uppercase, lowercase and numbers/specials characters.";
  const errorMessageSpan = pwInput.nextSibling;
  if (result) errorMessageSpan.textContent = "";
  else errorMessageSpan.textContent = invalidMessage;
  return result;
}

function validatePasswordMatch() {
  const result = pwInput.value === pwVerificationInput.value;
  const invalidMessage = "Passwords do not match.";
  const errorMessageSpan = pwVerificationInput.nextSibling;
  if (result) errorMessageSpan.textContent = "";
  else errorMessageSpan.textContent = invalidMessage;
  return result;
}

function validatePostalCode() {
  const countryPostalCodeRegex = postalCodeValidations[countrySelect.value];
  const result = countryPostalCodeRegex.test(postalCodeInput.value);
  const invalidMessage = "Must be a valid postal code in selected country.";
  const errorMessageSpan = postalCodeInput.nextSibling;
  if (result) errorMessageSpan.textContent = "";
  else errorMessageSpan.textContent = invalidMessage;
  return result;
}

function validateForm() {
  const formValidations = [
    validateEmailAddress(),
    validatePassword(),
    validatePostalCode(),
    validatePasswordMatch(),
  ];
  return formValidations.every((result) => result === true);
}

emailInput.addEventListener("focusout", validateEmailAddress);
postalCodeInput.addEventListener("focusout", validatePostalCode);
pwInput.addEventListener("focusout", validatePassword);
pwInput.addEventListener("focusout", validatePasswordMatch);
pwVerificationInput.addEventListener("focusout", validatePasswordMatch);
submitBtn.addEventListener("click", (event) => {
  const formIsValid = validateForm();
  if (!formIsValid) event.preventDefault();
});
