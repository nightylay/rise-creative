const burgerButton = document.getElementById('burger-button')
const mobileMenu = document.getElementById('mobile-menu')
const headerActions = document.getElementById('header-actions')

const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log(entry)
    let { width } = entry.contentRect
    const isInMenu = headerActions.parentNode === mobileMenu;
    console.log(width)
    if (width <= 890) {
      if (!isInMenu) {
        mobileMenu.insertAdjacentElement('beforeend', headerActions);
      }
    } else {
      if (isInMenu) {
        mobileMenu.insertAdjacentElement('afterend', headerActions);
      }
    }
  }
});

observer.observe(document.body);

if (burgerButton) {
  burgerButton.addEventListener('click', () => {

    document.body.classList.toggle('is-lock')
    burgerButton.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-visible')
  })
}



