export function wrapHtmlElements(wrapperTag, ...elements) {
  const wrapperHtml = document.createElement(wrapperTag);
  wrapperHtml.append(...elements);
  return wrapperHtml;
}

export function buildIconHtml(icon) {
  const iconHtml = document.createElement("img");
  iconHtml.src = icon;
  return iconHtml;
}

export function buildTextHtml(htmlTag, text) {
  const textHtml = document.createElement(htmlTag);
  textHtml.innerText = text;
  return textHtml;
}

export function buildLabelHtml(inputId) {
  const labelHtml = document.createElement("label");
  labelHtml.for = inputId;
  return labelHtml;
}

export function buildInputHtml(type, id = null, name = null) {
  const inputHtml = document.createElement("input");
  inputHtml.type = type;
  inputHtml.name = name;
  if (id) inputHtml.id = id;
  return inputHtml;
}

export function buildHeaderTextHtml(headerText, headerLevel) {
  const headerTextHtml = document.createElement(`h${headerLevel}`);
  headerTextHtml.innerHTML = headerText;
  return headerTextHtml;
}

export function buildSelectOption(text, value) {
  const optionHtml = document.createElement("option");
  optionHtml.value = value;
  optionHtml.innerText = text;
  return optionHtml;
}

function buildInstructionsSpanHtml(instructionsText) {
  const inputInstructionsSpanHtml = buildTextHtml("span", instructionsText);
  inputInstructionsSpanHtml.classList.add("input-instructions");
  return inputInstructionsSpanHtml;
}

function buildRequiredSpanHtml() {
  const requiredSpanHtml = buildTextHtml("span", "*");
  requiredSpanHtml.classList.add("required-tag");
  return requiredSpanHtml;
}

function buildErrorSpanHtml() {
  const errorSpanHtml = buildTextHtml("span", "");
  errorSpanHtml.classList.add("error-message");
  return errorSpanHtml;
}

export function buildLabeledInputHtml(inputHtml, instructionsText) {
  const labeledInputHtml = buildLabelHtml(inputHtml.id);
  labeledInputHtml.append(
    buildInstructionsSpanHtml(instructionsText),
    buildRequiredSpanHtml(),
    inputHtml,
    buildErrorSpanHtml()
  );
  return labeledInputHtml;
}

export function buildCountrySelect(countriesList) {
  const countrySelectOptionsList = countriesList.map((country) =>
    buildSelectOption(country, country)
  );

  const countrySelectHtml = document.createElement("select");
  countrySelectHtml.append(...countrySelectOptionsList);

  countrySelectHtml.id = "country-select";
  countrySelectHtml.name = "country";

  return countrySelectHtml;
}
