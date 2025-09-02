var swiperCases = new Swiper(".mySwiper", {
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

var swiperReviews = new Swiper(".swiperReviews", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true, // Центрирование слайдов
  loop: true, // Бесконечная прокрутка (опционально)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});