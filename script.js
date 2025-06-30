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


const products = {
  biscuits: [
    { img: "biscuits/1.jpg" },
    { img: "biscuits/2.jpg" },
    { img: "biscuits/3.jpg" },
    { img: "biscuits/4.png" },
    { img: "biscuits/5.jpg" },
    { img: "biscuits/6.jpg" },
    { img: "biscuits/7.jpg" },
    { img: "biscuits/8.jpg" },
    { img: "biscuits/9.jpg" },
    { img: "biscuits/10.jpg" },
    { img: "biscuits/11.jpg" },
    { img: "biscuits/12.jpg" },
    { img: "biscuits/13.jpg" },
    { img: "biscuits/14.jpg" },
    { img: "biscuits/b1.jpg" },
    { img: "biscuits/b2.jpg" },
    { img: "biscuits/b3.jpg" },
    { img: "biscuits/b4.webp" },
    { img: "biscuits/bb1.jpg" },
    { img: "biscuits/bb2.jpg" },
    { img: "biscuits/bb3.jpg" },
    { img: "biscuits/bb4.jpg" },
    { img: "biscuits/bb5.jpg" },
    { img: "biscuits/bb6.jpg" },
   { img: "biscuits/bb7.jpg" },
    { img: "biscuits/bb8.jpg" },
    { img: "biscuits/bb9.jpg" },
  ],
  dairy: [
        { img: "bingo/1 (1).webp" },
         {img: "bingo/1 (2).webp" },
         {img: "bingo/1 (2).jpg" },
         {img: "bingo/1 (3).webp" },
         {img: "bingo/1 (3).jpg" },
         {img: "bingo/1 (4).jpg" },
         {img: "bingo/1 (5).webp" },
         {img: "bingo/1 (5).jpg" },
         {img: "bingo/1 (6).webp" },
         {img: "bingo/1 (7).webp" },
         {img: "bingo/1 (8).webp" },

       
  ],
  snacks: [
        
          {img: "chocp/2 (1).jpg" }, 
          {img: "chocp/2 (1).webp" },         
          {img: "chocp/2 (2).jpg" }, 
          {img: "chocp/2 (2).webp" }, 
          {img: "chocp/2 (3).webp" }, 
          {img: "chocp/2 (4).jpg" }, 
          {img: "chocp/2 (4).webp" }, 
          {img: "chocp/2 (5).jpg" }, 
          {img: "chocp/2 (5).webp" }, 
          {img: "chocp/2 (6).jpg" }, 
          {img: "chocp/2 (6).webp" }, 
          {img: "chocp/2 (7).jpg" }, 
          {img: "chocp/2 (7).webp" }, 
          {img: "chocp/2 (8).jpg" }, 
          {img: "chocp/2 (8).webp" }, 
          {img: "chocp/2 (9).jpg" }, 
          {img: "chocp/2 (10).jpg" }, 
          {img: "chocp/2 (11).jpg" }, 
        ]
};

function showCategory(category) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products[category].forEach(item => {
    container.innerHTML += `
      <div class="product">
        <img src="${item.img}" alt="${item.name}">
       
      </div>
    `;
  });
}

document.querySelectorAll('.category').forEach(item => {
  item.addEventListener('mouseover', () => {
    const category = item.getAttribute('data-category');
    showCategory(category);
  });
});

// Load default category
showCategory('biscuits');



 window.onload = function () {
    // This runs **after all images, fonts, CSS, and assets are fully loaded**
    console.log("Page fully loaded with all images!");

    // You can now safely trigger animations, enable scrolling, etc.
    document.body.classList.add("loaded");
  };