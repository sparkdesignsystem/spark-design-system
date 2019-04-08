import { lory } from 'lory.js';

const initDots = (dotContainer, count) => {
  const dotListItem = document.createElement('li');
  dotListItem.classList.add('sprk-c-Carousel__dot');
  for (let i = 0; i < count; i += 1) {
    dotContainer.appendChild(dotListItem.cloneNode());
  }
  dotContainer.childNodes[0].classList.add('sprk-c-Carousel__dot--active');
};

// init carousel
const carousel = (item) => {
  const slideCount = item.querySelectorAll('li').length;
  const dotContainer = item.querySelector('[data-sprk-carousel-dots]');
  // before init event
  item.addEventListener('before.lory.init', () => {
    if (dotContainer) {
      initDots(dotContainer, slideCount);
    }
  });
  // after init event
  item.addEventListener('after.lory.init', () => {
    if (dotContainer) {
      const dots = dotContainer.querySelectorAll('li');
      dots.forEach((dot, index) => {
        dot.addEventListener('click', event => {
          event.preventDefault();
          carouselInstance.slideTo(index);
        });
      });
    };
  });
  // after slide event
  item.addEventListener('after.lory.slide', event => {
    if (dotContainer) {
      const dots = dotContainer.querySelectorAll('li');
      dots.forEach((dot) => {
        dot.classList.remove('sprk-c-Carousel__dot--active');
      });
      dots[event.detail.currentSlide - 1].classList.add('sprk-c-Carousel__dot--active');
      item.dispatchEvent(new Event('sprk.carousel.slide', { index: [event.detail.currentSlide - 1]}));
    }
  });

  const carouselInstance = lory(item, {
    classNameFrame: 'sprk-c-Carousel__frame',
    classNameSlideContainer: 'sprk-c-Carousel__slides',
    classNamePrevCtrl: 'sprk-c-Carousel__prev',
    classNameNextCtrl: 'sprk-c-Carousel__next',
    infinite: 1,
    enableMouseEvents: true,
  });
  return carouselInstance;
};

export { carousel, initDots };
