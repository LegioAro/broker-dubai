//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 100,
      behavior: 'smooth',
    });
  });
}

//header

// function headerScroll() {
//   const header = document.querySelector('.header');
//   if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
//     header.classList.add('header--scroll');
//   } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
//     header.classList.remove('header--scroll');
//   }
// }
// headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});

//acardion

function handlAcardion() {
  const items = document.querySelectorAll('.questions__item');

  items.forEach((item) => {
    const header = item.querySelector('.questions__item-header');
    header.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

handlAcardion();

//sliders

const swiper = new Swiper('.swiper', {
  // Default parameters
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  loopAdditionalSlides: 3,
  autoHeight: true,
  pagination: {
    el: '.images .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper('.swiper-2', {
  slidesPerView: 10,
  spaceBetween: 0,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.course-moduls .slider__arrow-next',
    prevEl: '.course-moduls .slider__arrow-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: false,
    },
    900: {
      slidesPerView: 10,
    },
  },
});

const swiper3 = new Swiper('.swiper-3', {
  slidesPerView: 1,
  spaceBetween: 0,
  allowTouchMove: false,
  slideToClickedSlide: true,
  autoHeight: true,

  thumbs: {
    swiper: swiper2,
  },
});

swiper3.on('slideChange', function () {
  var activeIndex = swiper3.activeIndex;
  swiper2.slideTo(activeIndex);
});

swiper2.on('slideChange', function () {
  var activeIndex = swiper2.activeIndex;
  swiper3.slideTo(activeIndex);
});
