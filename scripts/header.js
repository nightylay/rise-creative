import { burgerButton, mobileMenu } from "./burger-menu.js";

const header = document.getElementById('header')
const mainSection = document.getElementById('main-section')
const headerHeight = header.offsetHeight

window.addEventListener('scroll', event => {
  if (pageYOffset > mainSection.offsetHeight) {
    header.classList.add('fixed')
    document.body.style.paddingTop = header.offsetHeight + "px"
  } else {
    header.classList.remove('fixed')
    document.body.removeAttribute('style');
  }
});


header.addEventListener('click', event => {
  let currentLink = event.target.closest('[data-goto]')
  if (currentLink && document.querySelector(currentLink.getAttribute('data-goto'))) {
    let targetSection = document.querySelector(currentLink.getAttribute('data-goto'))
    let targetSectionScrollTop = targetSection.offsetTop - headerHeight
    window.scrollTo({
      top: targetSectionScrollTop,
      behavior: "smooth"
    });
    if (burgerButton.classList.contains('is-active')) {
      document.body.classList.remove('is-lock')
      burgerButton.classList.remove('is-active')
      mobileMenu.classList.remove('is-visible')
    }
    event.preventDefault()
  }

}, { capture: true })


