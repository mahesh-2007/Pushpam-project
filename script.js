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
  AOS.init({
    duration: 800, // Animation duration in ms
    once: false     // Only animate once
  });
  // Swiper initialization for both sides preview
  const swiper = 

  new Swiper('.your-swiper-class', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.banner-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.banner-swiper .swiper-pagination',
      clickable: true,
    }
  });
});

document.querySelector('.hamburger').onclick = function() {
  document.querySelector('.nav-menu').classList.toggle('active');
};

// Place this after your Swiper HTML and after including Swiper's JS library
document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.my-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.my-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.my-swiper .swiper-button-next',
      prevEl: '.my-swiper .swiper-button-prev',
    },
    centeredSlides: true,
    breakpoints: {
      // For screens 0px and up, show 1 slide
      0: {
        slidesPerView: 1,
        centeredSlides: false
      },
      // For screens 768px and up, show 3 slides
      768: {
        slidesPerView: 3,
        centeredSlides: true
      }
    }
  });
});