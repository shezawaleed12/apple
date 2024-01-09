var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });