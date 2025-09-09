export { burgerButtonElement, mobileMenuElement }

const burgerButtonElement = document.getElementById('burger-button')
const mobileMenuElement = document.getElementById('mobile-menu')
const headerActions = document.getElementById('header-actions')

export function moveSectionAtResize() {
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width } = entry.contentRect
      const isInMenu = headerActions.parentNode === mobileMenuElement;
      if (width <= 890) {
        if (!isInMenu) {
          mobileMenuElement.insertAdjacentElement('beforeend', headerActions);
        }
      } else {
        if (isInMenu) {
          mobileMenuElement.insertAdjacentElement('afterend', headerActions);
        }
      }
    }
  });
  observer.observe(document.body);
}

export function burgerButtonHandler() {
  if (burgerButtonElement) {
    burgerButtonElement.addEventListener('click', e => {
      document.body.classList.toggle('is-lock')
      burgerButtonElement.classList.toggle('is-active')
      mobileMenuElement.classList.toggle('is-visible')
    })
  }
}



