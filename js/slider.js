// Menu sliders powered by Swiper (https://swiperjs.com, MIT license)
document.querySelectorAll('.slider').forEach(function (slider) {
  new Swiper(slider.querySelector('.swiper'), {
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      prevEl: slider.querySelector('.prev'),
      nextEl: slider.querySelector('.next')
    },
    breakpoints: {
      600: { slidesPerView: 2, spaceBetween: 24 },
      900: { slidesPerView: 3, spaceBetween: 24 }
    }
  });
});
