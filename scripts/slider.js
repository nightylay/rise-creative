var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-custom-button-next",
    prevEl: ".swiper-custom-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});