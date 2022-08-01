var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    autoHeihgt: true,
    centeredSlides: true,
    initialSlide: 1,
    autoplay : {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    coverflowEffect: {
      rotate: 50,
      stretch: 30,
      depth: 200,
      modifier: 1,
      slideShadows: false,

    },
   
  });