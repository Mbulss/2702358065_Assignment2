// Toggle Menu for mobile
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Initialize Swiper for Home Slider
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000, // 3 seconds delay
    disableOnInteraction: false,
  },
});

// Ensure autoplay restarts on transition end for home slider
swiper.on('slideChangeTransitionEnd', () => {
  if (!swiper.autoplay.running) {
    swiper.autoplay.start();
  }
});

// Initialize Swiper for Feature Slider with clickable links enabled
var swiper2 = new Swiper(".feature-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000, // 3 seconds delay
    disableOnInteraction: false,
  },
  // Allow clicks on links within slides
  preventClicks: false,
  preventClicksPropagation: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    811: {
      slidesPerView: 2,
    },
    1064: {
      slidesPerView: 3,
    }
  }
});

// Ensure autoplay restarts on transition end for feature slider
swiper2.on('slideChangeTransitionEnd', () => {
  if (!swiper2.autoplay.running) {
    swiper2.autoplay.start();
  }
});

// Dynamic Rating System
const ratingContainer = document.getElementById('rating');
if (ratingContainer) {
  const stars = ratingContainer.querySelectorAll('i');
  let ratingValue = 0;
  
  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = star.getAttribute('data-value');
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= val) {
          s.classList.add('hovered');
        } else {
          s.classList.remove('hovered');
        }
      });
    });
    
    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hovered'));
    });
    
    star.addEventListener('click', () => {
      ratingValue = star.getAttribute('data-value');
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= ratingValue) {
          s.classList.add('selected');
        } else {
          s.classList.remove('selected');
        }
      });
      document.getElementById('rating-value').textContent = ratingValue;
    });
  });
}
