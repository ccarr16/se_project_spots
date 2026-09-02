const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_type_error",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function showInputError(inputElement, errorMessage, config) {
  inputElement.nextElementSibling.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(inputElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  inputElement.nextElementSibling.textContent = "";
}

function checkInputValidity(inputElement, formElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, config);
  } else {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorMessage, config);
  }
}

function hasInvalidInput(formInputs) {
  return formInputs.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(formInputs, formButton, config) {
  if (hasInvalidInput(formInputs)) {
    disableButton(formButton, config);
  } else {
    formButton.disabled = false;
    formButton.classList.remove(config.inactiveButtonClass);
  }
}

function disableButton(formButton, config) {
  formButton.disabled = true;
  formButton.classList.add(config.inactiveButtonClass);
}

function resetValidation(formInputs, settings) {
  formInputs.forEach((input) => {
    hideInputError(input, settings);
  });
}

function setEventListeners(formElement, config) {
  let formInputs = Array.from(
    formElement.querySelectorAll(config.inputSelector),
  );
  let formButton = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(formInputs, formButton, config);

  formElement.addEventListener("reset", () => {
    disableButton(formButton, config);
  });

  formInputs.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement, formElement, config);
      toggleButtonState(formInputs, formButton, config);
    });
  });
}

function enableValidation(config) {
  let formList = document.querySelectorAll(config.formSelector);
  formList.forEach(function (formElement) {
    setEventListeners(formElement, config);
  });
}

enableValidation(settings);
