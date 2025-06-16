// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
  // Hide menu on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Swiper initialization for both sides preview
  const swiper = new Swiper('.my-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Services Swiper
  const serviceSwiper = new Swiper('.service-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.service-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.service-swiper .swiper-button-next',
      prevEl: '.service-swiper .swiper-button-prev',
    },
  });

  // Institutions Swiper
  
  const institutionSwiper = new Swiper('.institution-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.institution-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.institution-swiper .swiper-button-next',
      prevEl: '.institution-swiper .swiper-button-prev',
    },
  });
});