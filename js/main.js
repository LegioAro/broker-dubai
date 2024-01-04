//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 50,
      behavior: 'smooth',
    });
  });
}

// window.addEventListener('scroll', function () {
//   headerScroll();
// });

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

/////timer

function isTimer() {
  let dateNow = new Date();
  // let minutesDeadline = new Date(2023, 10, 24, 23, 59, 59);
  let minutesDeadline = 15;

  dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

  let timerId = null;

  function countdownTimer() {
    const diff = dateNow - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    let timers = document.querySelectorAll('.timer');
    for (let timer of timers) {
      // let timerDay = timer.querySelector('[data-timer-day]');
      // let timerHour = timer.querySelector('[data-timer-hour]');
      let timerMinuts = timer.querySelector('[data-timer-minuts]');
      let timerSeconds = timer.querySelector('[data-timer-seconds]');
      let timerMSeconds = timer.querySelector('[data-timer-mseconds]');

      // let timerDayItems = timerDay.querySelectorAll('.timer__number');
      // let timerHourItems = timerHour.querySelectorAll('.timer__number');
      let timerMinutesItems = timerMinuts.querySelectorAll('.timer__number');
      let timerSecondsItems = timerSeconds.querySelectorAll('.timer__number');
      let timerMSecondsItems = timerMSeconds.querySelectorAll('.timer__number');

      // const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      // const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      const mSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

      // let dayString = days < 10 ? '0' + days : String(days);
      // let hourString = hours < 10 ? '0' + hours : String(hours);
      let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
      let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
      let mSecondsString = mSeconds < 10 ? '0' + seconds : String(mSeconds);

      // let dayArr = dayString.split('');
      // let hourArr = hourString.split('');
      let minutesArr = minutesString.split('');
      let secondsArr = secondsString.split('');
      let mSecondsArr = mSecondsString.split('');

      // for (let i = 0; i < timerDayItems.length; i++) {
      //   timerDayItems[i].innerHTML = dayArr[i];
      // }
      // for (let i = 0; i < timerHourItems.length; i++) {
      //   timerHourItems[i].innerHTML = hourArr[i];
      // }
      for (let i = 0; i < timerMinutesItems.length; i++) {
        timerMinutesItems[i].innerHTML = minutesArr[i];
      }
      for (let i = 0; i < timerSecondsItems.length; i++) {
        timerSecondsItems[i].innerHTML = secondsArr[i];
      }
      for (let i = 0; i < timerMSecondsItems.length; i++) {
        timerMSecondsItems[i].innerHTML = mSecondsArr[i];
      }
    }
  }

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 85);
}

// function isTimer() {
//   let dateNow = new Date();
//   let minutesDeadline = 15;
//   dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

//   function countdownTimer() {
//     const diff = dateNow - new Date();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }

//     // const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

//     // let hoursString = hours < 10 ? '0' + hours : String(hours);
//     let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
//     let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
//     let milsecString = milSeconds < 10 ? '0' + milSeconds : String(milSeconds);

//     // let hoursArr = hoursString.split('');
//     let minutesArr = minutesString.split('');
//     let secondsArr = secondsString.split('');
//     let milsecArr = milsecString.split('');

//     for (let i = 0; i < timerMilSecItems.length; i++) {
//       timerMilSecItems[i].innerHTML = milsecArr[i];
//     }
//     for (let i = 0; i < timerMinutesItems.length; i++) {
//       timerMinutesItems[i].innerHTML = minutesArr[i];
//     }
//     for (let i = 0; i < timerSecondsItems.length; i++) {
//       timerSecondsItems[i].innerHTML = secondsArr[i];
//     }
//     // for (let i = 0; i < timerHoursItems.length; i++) {
//     //   timerHoursItems[i].innerHTML = hoursArr[i];
//     // }
//   }
//   let timer = document.querySelector('.timer');

//   // let timerHours = timer.querySelector('[data-timer-hours]');
//   let timerMinuts = timer.querySelector('[data-timer-minuts]');
//   let timerSeconds = timer.querySelector('[data-timer-seconds]');
//   let timerMilSec = timer.querySelector('[data-timer-milsec]');

//   // let timerHoursItems = timerHours.querySelectorAll('.timer__item-num');
//   let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
//   let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');
//   let timerMilSecItems = timerMilSec.querySelectorAll('.timer__item-num');

//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   let timerId = setInterval(countdownTimer, 85);
// }

isTimer();
