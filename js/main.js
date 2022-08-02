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
      stretch: 100,
      depth: 200,
      modifier: 0.8,
      slideShadows: false,

    },
   
  });

  ScrollReveal().reveal('.nav2', {  distance: '60px', origin: 'top', delay: 100});
  ScrollReveal().reveal('.headline', {  distance: '60px', origin: 'left', delay: 100});
  ScrollReveal().reveal('.headline2', {  distance: '60px', origin: 'left',  delay: 300});
  ScrollReveal().reveal('.headline3', {  distance: '60px', origin: 'left',  delay: 500 });
  ScrollReveal().reveal('.destinations__title2', {  distance: '60px', origin: 'left',delay: 100});
  ScrollReveal().reveal('.destinations__text2', {  distance: '60px', origin: 'right', delay: 300});
  ScrollReveal().reveal('.destinations__slider2', {  distance: '60px', origin: 'right', delay: 800});
  ScrollReveal().reveal('.customers__img2', {  distance: '60px', origin: 'left', delay: 800});
  ScrollReveal().reveal('.customers__title2', {  distance: '60px', origin: 'right', delay: 1000});
  ScrollReveal().reveal('.review2', {  distance: '60px', origin: 'right', delay: 1300});
  ScrollReveal().reveal('.header__btn2', {  distance: '60px', origin: 'right', delay: 800,
  rotate: {
    x: 100,
    y: 0,
    z: 100,
}});




 