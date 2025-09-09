import { burgerButtonElement, mobileMenuElement } from "./burger-menu.js";

const headerElement = document.getElementById('header')
const mainSection = document.getElementById('main-section')
const headerHeight = headerElement.offsetHeight

export function setFixedHeader() {
  window.addEventListener('scroll', event => {
    if (pageYOffset > mainSection.offsetHeight) {
      headerElement.classList.add('fixed')
      document.body.style.paddingTop = headerElement.offsetHeight + "px"
    } else {
      headerElement.classList.remove('fixed')
      document.body.removeAttribute('style');
    }
  });
}

export function anchorLinks() {
  headerElement.addEventListener('click', event => {
    let currentLink = event.target.closest('[data-goto]')
    if (currentLink && document.querySelector(currentLink.getAttribute('data-goto'))) {
      let targetSection = document.querySelector(currentLink.getAttribute('data-goto'))
      let targetSectionScrollTop = targetSection.offsetTop - headerHeight
      window.scrollTo({
        top: targetSectionScrollTop,
        behavior: "smooth"
      });
      if (burgerButtonElement.classList.contains('is-active')) {
        document.body.classList.remove('is-lock')
        burgerButtonElement.classList.remove('is-active')
        mobileMenuElement.classList.remove('is-visible')
      }
      event.preventDefault()
    }

  }, { capture: true })
}


