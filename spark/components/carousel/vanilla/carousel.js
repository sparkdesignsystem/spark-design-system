import { lory } from 'lory.js';

const beforeLoryInit = (dotContainer, count) => {
  if (!dotContainer) return;
  for (let i = 0; i < count; i += 1) {
    const dotWrapper = document.createElement('div');
    dotWrapper.classList.add('sprk-c-Carousel__dot-container');
    const dot = document.createElement('button');
    dot.classList.add('sprk-c-Carousel__dot');
    const srt = document.createElement('span');
    srt.classList.add('sprk-u-ScreenReaderText');
    srt.textContent = `Slide ${i + 1}`;
    dot.appendChild(srt);
    dotWrapper.appendChild(dot);
    dotContainer.appendChild(dotWrapper);
  }
  dotContainer.childNodes[0].childNodes[0].classList.add(
    'sprk-c-Carousel__dot--active',
  );
};

const afterLoryInit = (dotContainer, carouselInstance) => {
  if (dotContainer) {
    const dots = dotContainer.querySelectorAll('div');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        carouselInstance.slideTo(index);
      });
    });
  }
};

const afterLorySlide = (dotContainer, item, event) => {
  if (!dotContainer) return;
  const dots = dotContainer.querySelectorAll('button');
  dots.forEach((dot) => {
    dot.classList.remove('sprk-c-Carousel__dot--active');
  });
  dots[event.detail.currentSlide - 1].classList.add(
    'sprk-c-Carousel__dot--active',
  );
  const sprkSlideEvent = document.createEvent('CustomEvent');
  sprkSlideEvent.initCustomEvent('sprk.carousel.slide', true, true, {
    index: [event.detail.currentSlide - 1],
  });

  item.dispatchEvent(sprkSlideEvent);
};

// init carousel
const carousel = (item) => {
  const slideCount = item.querySelectorAll('li').length;
  const dotContainer = item.querySelector('[data-sprk-carousel-dots]');

  item.addEventListener('before.lory.init', () => {
    beforeLoryInit(dotContainer, slideCount);
  });

  item.addEventListener('after.lory.slide', (e) => {
    afterLorySlide(dotContainer, item, e);
  });

  const carouselInstance = lory(item, {
    classNameFrame: 'sprk-c-Carousel__frame',
    classNameSlideContainer: 'sprk-c-Carousel__slides',
    classNamePrevCtrl: 'sprk-c-Carousel__prev',
    classNameNextCtrl: 'sprk-c-Carousel__next',
    infinite: 1,
    enableMouseEvents: true,
  });

  afterLoryInit(dotContainer, carouselInstance);

  return carouselInstance;
};

export { carousel, beforeLoryInit, afterLoryInit, afterLorySlide };
