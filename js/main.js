/* Анимация главной страницы */
const tl1 = gsap.timeline()

tl1.fromTo('.hero__title', {
  y: '50%',
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: 'power4.out'
}, 0.2)
  .fromTo('.hero__btn', {
    y: '50%',
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, 0.2)
  .fromTo('.hero__descr', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }, 0.6)
  .fromTo('.photos-wrap  img', {
    scale: 0.5,
    opacity: 0
  }, {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power1.out'
  }, 1)
  .fromTo('.photos__author', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1
  }, 2.2);

/* Анимация меню */
const tl2 = gsap.timeline({ paused: true })
const burgerBtnOpen = document.querySelector('.burger');
const burgerBtnClose = document.querySelector('.close');

tl2.fromTo('.menu', {
  display: 'none'
}, {
  display: 'block',
});

tl2
  .from('.menu__top', {
    y: -30,
    opacity: 0,
    duration: 0.4,
    ease: 'power1.out'
  }, 0.2)
  .from('.menu', {
    opacity: 0,
    duration: 1,
    ease: 'power1.out'
  }, 0.1)
  .from('.menu__nav', {
    opacity: 0,
    y: 100,
    duration: 0.7
  }, "-=0.5")
  .from(['.social', '.menu__right'], {
    opacity: 0,
    y: 100, duration: 0.7,
  }, "-=0.3");

burgerBtnOpen.addEventListener('click', () => {
  tl2.play();
})

burgerBtnClose.addEventListener('click', () => {
  tl2.reverse();
})
