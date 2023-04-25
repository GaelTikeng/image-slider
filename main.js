const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // navigation
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  //navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const swipper = new Swiper('.myswiper1', {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "cube",
  grabcursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.50,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

let swiper2 = new Swiper(".myswiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "cards",
  grabCusor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})