/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.food-menu-box', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
