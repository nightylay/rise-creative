export function initSliderCases() {
  const swiperCases = new Swiper(".swiperCases", {
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
}

export function initReviewsCases() {
  const swiperReviews = new Swiper(".swiperReviews", {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      890: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    on: {
      slideChange: function () {
        // Добавляем/убираем классы для стилизации
        const slides = this.slides;
        slides.forEach(slide => slide.classList.remove('centered'));

        // Находим "центральный" слайд (второй из видимых)
        if (slides[this.activeIndex + 1]) {
          slides[this.activeIndex + 1].classList.add('centered');
        }
      }
    }
  });

  setTimeout(() => {
    swiperReviews.emit('slideChange');
  }, 100);
}