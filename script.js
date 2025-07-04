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
      
      1000: {
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
      delay: 6000,
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
        0: {
          slidesPerView: 1,
          centeredSlides: false
        },
        768: {
          slidesPerView: 2,
          centeredSlides: true
        },
        1000: {
          slidesPerView: 3,
          centeredSlides: true
        }
      }
  });
});


const products = {
  biscuits: [
    {name: "Dark fantasy" , img: "biscuits/1.jpg" },
    {name: "50-50" , img: "biscuits/2.jpg" },
    {name: "Goodday" , img: "biscuits/3.jpg" },
    {name: "Pure Magic (Vanilla)" , img: "biscuits/4.png" },
    
    {name: "Pure Magic (Chocolate)" , img: "biscuits/20.webp"},
    {name: "Bourbon" , img: "biscuits/5.jpg" },
    {name: "Goodday (Pista)" , img: "biscuits/6.jpg" },
    {name: "Marie Gold" , img: "biscuits/9.jpg" },
    {name: "Milk bikies Classic" , img: "biscuits/10.jpg" },
    {name: "Milk bikies" , img: "biscuits/11.jpg" },
    {name: "Nutri Choice" , img: "biscuits/12.jpg" },
    {name: "Pure Magic (chocolate)" , img: "biscuits/14.jpg" },
    {name: "Super Millets " , img: "biscuits/b1.jpg" },
    {name: "Super Millets (Chocolate)" , img: "biscuits/b2.jpg" },
    {name: "Bounce (Chocolate)" , img: "biscuits/b3.jpg" },
    {name: "Bounce (orange)" , img: "biscuits/b4.webp" },
    {name: "Marie light" , img: "biscuits/bb1.jpg" },
    {name: "Dark fantasy bourbon" , img: "biscuits/bb2.jpg" },
    {name: "Dark fantasy (sandwich)" , img: "biscuits/bb4.jpg" },
    {name: "DreamCream (Chocolate)" , img: "biscuits/bb5.jpg" },
    {name: "DreamCream (Strawberry)" , img: "biscuits/bb6.jpg" },
    {name: "Moms magic (Fruit nd Milk)" , img: "biscuits/bb7.jpg" },
    {name: "Moms magic (Butter)" , img: "biscuits/bb8.jpg" },
    {name: "Moms magic (Cashew nd Almond)" , img: "biscuits/bb9.jpg" },
  ],
  dairy: [
         {name: "Bingo (hot nd spicy)" , img: "bingo/1 (1).webp" },
         {name: "Bingo (masala)" , img: "bingo/1 (2).webp" },
         {name: "Bingo (Mad angles)" , img: "bingo/1 (2).jpg" },
         {name: "Bingo (Cream nd onion)" , img: "bingo/1 (3).webp" },
         {name: "Bingo (Mad angles)" , img: "bingo/1 (3).jpg" },
         {name: "Bingo (Mad angles)" , img: "bingo/1 (4).jpg" },
         {name: "Bingo Originals (tomato)" , img: "bingo/1 (5).webp" },
         {name: "Bingo Originals (chilli)" , img: "bingo/1 (5).jpg" },
         {name: "Bingo (Mad angles)" , img: "bingo/1 (6).webp" },
         {name: "Bingo (Mad angles)" , img: "bingo/1 (7).webp" },
         {name: "Bingo (Tedhe Medhe)" , img: "bingo/1 (8).webp" },

       
  ],
  snacks: [
        
          {name : "Diary Milk Silk (Hazzelnut)" , img: "chocp/2 (1).jpg" }, 
            {name : "Diary Milk Silk (Almond)" , img: "chocp/2 (2).jpg" }, 
         {name : "Perk" , img: "chocp/2 (4).jpg" }, 
          {name : "5 Star" , img: "chocp/2 (5).jpg" },  
         {name : "Cavins shake (Coffee)" , img: "chocp/2 (1).webp" },         
          {name : "Cavins shake (Chocolate)" , img: "chocp/2 (2).webp" }, 
          {name : "Cavins shake (Butterscotch)" , img: "chocp/2 (3).webp" }, 
             {name : "Cavins shake (Vanilla)" , img: "chocp/2 (6).webp" }, 
         {name : "Cavins shake (Strawberry)" , img: "chocp/2 (7).webp" }, 
         
          {name : "Cavins shake (Belgian Chocolate)" , img: "chocp/2 (4).webp" }, 
          
          {name : "Winkin Cow (Chocolate)" , img: "chocp/2 (6).jpg" }, 
        {name : "Winkin Cow (Badammilk)" , img: "chocp/2 (7).jpg" }, 
           {name : "Winkin Cow (ColdCoffee)" , img: "chocp/2 (8).jpg" }, 
          {name : "Winkin Cow (Bourbon)" , img: "chocp/2 (9).jpg" }, 
          {name : "Winkin Cow (Strawberry)" , img: "chocp/2 (10).jpg" }, 
          {name : "Winkin Cow (Vanilla)" , img: "chocp/2 (11).jpg" }, 
        ]
};

function showCategory(category) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products[category].forEach(item => {
    container.innerHTML += `
      <div class="product">
        <img src="${item.img}" alt="${item.name}">
       <div class="product-name">${item.name}</div>
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


  