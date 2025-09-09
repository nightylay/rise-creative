export class FormsValidation {
  selectors = {
    form: '[data-js-form]',
    fieldErrors: '[data-js-form-field-errors]',
  }

  errorMessages = {
    valueMissing: () => 'Пожалуйста заполните это поле',
    typeMismatch: ({ title }) => title || 'Данные не соответствуют формату',
    tooShort: ({ minLength, value }) => `Слишком короткое значение, минимум символов - ${minLength}, осталось символов ${minLength - value.length}`,
    tooLong: ({ maxLength }) => `Слишком длинное значение, максимум символов - ${maxLength}`
  }

  constructor() {
    this.bindEvents()
  }

  manageErrors(fieldInputElement, errorMessages) {
    const fieldErrorsElement = fieldInputElement.parentElement.querySelector(this.selectors.fieldErrors)
    fieldErrorsElement.innerHTML = errorMessages
      .map((message) => `<span class="field__error">${message}</span>`)
      .join('')
  }

  validateField(fieldInputElement) {
    const errors = fieldInputElement.validity
    const errorMessages = []
    console.log(errors)
    Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
      if (errors[errorType]) {
        errorMessages.push(getErrorMessage(fieldInputElement))
      }
    })
    this.manageErrors(fieldInputElement, errorMessages)
    const isValid = errorMessages.length === 0
    fieldInputElement.ariaInvalid = !isValid
    return isValid
  }

  onBlur(event) {
    const { target } = event
    const isFormField = target.closest(this.selectors.form)
    const isRequired = target.required

    if (isFormField && isRequired) [
      this.validateField(target)
    ]
  }

  onSubmit(event) {
    const isFormElement = event.target.matches(this.selectors.form)
    if (!isFormElement) {
      return
    }

    const requiredControlElements = [...event.target.elements].filter(({ required }) => required)

    let isFormValid = true
    let firstInvalidFieldInput = null

    requiredControlElements.forEach((element) => {
      const isFieldValid = this.validateField(element)

      if (!isFieldValid) {
        isFormValid = false
        if (!firstInvalidFieldInput) {
          firstInvalidFieldInput = element
        }
      }
    })
    if (!isFormValid) {
      event.preventDefault()
      firstInvalidFieldInput.focus()
    }
  }

  bindEvents() {
    document.addEventListener('blur', (event) => {
      this.onBlur(event)
    }, { capture: true })

    document.addEventListener('submit', (event) => this.onSubmit(event))
  }
}

