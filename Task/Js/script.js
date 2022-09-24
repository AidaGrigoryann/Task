const swiper1 = new Swiper('.types-slider', {
    spaceBetween: 20,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.types-slider__next',
      prevEl: '.types-slider__prev',
    },
    breakpoints: {
      927: {
        slidesPerView: 7,
      },
      660: {
        slidesPerView: 6,
      }
    }
  });

  const swiper2 = new Swiper('.products-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.products-slider__next',
      prevEl: '.products-slider__prev',
    },
    breakpoints: {
      1048: {
        slidesPerView: 4,
      },
      923: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      }
    }
  });

  const swiper3 = new Swiper('.catalog-slider', {
    spaceBetween: 20,
    slidesPerView: 10,
    // Navigation arrows
    navigation: {
      nextEl: '.catalog-slider__next',
      prevEl: '.catalog-slider__prev',
    },
  });