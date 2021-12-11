  // import Swiper bundle with all modules installed
  import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';

  // init Swiper:
  const swiper = new Swiper(".swiper", {
     // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    freeMode: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });