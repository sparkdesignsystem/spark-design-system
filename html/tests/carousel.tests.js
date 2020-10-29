/* global document describe beforeEach afterEach it sinon */
import createElementFromString from './_createElementFromString';
import {
  carousel as regCarousel,
  beforeLoryInit,
  afterLoryInit,
  afterLorySlide,
} from '../components/carousel';

describe('Carousel tests', () => {
  let carouselContainer;

  beforeEach(() => {
    carouselContainer = createElementFromString(`
      <div class="sprk-c-Carousel" data-sprk-carousel="stepper-carousel-01">
        <div class="
          sprk-c-Carousel__controls
          sprk-o-Stack
          sprk-o-Stack--split@xxs
          sprk-o-Stack--center-row
          sprk-o-Stack--center-column">
          <span class="sprk-c-Carousel__prev sprk-o-Stack__item">
            <svg class="
              sprk-c-Icon
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl"
              viewBox="0 0 100 100">
              <use xlink:href="#chevron-left-circle" />
            </svg>
          </span>
          <div class="sprk-c-Carousel__frame">
            <ul class="sprk-c-Carousel__slides">
              <li class="sprk-c-Carousel__frame-item">
                <img src="" alt="Cell phone with a blank screen.">
              </li>
              <li class="sprk-c-Carousel__frame-item">
                <img src="" alt="Cell phone with a blank screen.">
              </li>
              <li class="sprk-c-Carousel__frame-item">
                <img src="" alt="Cell phone with a blank screen.">
              </li>
              <li class="sprk-c-Carousel__frame-item">
                <img src="" alt="Cell phone with a blank screen.">
              </li>
            </ul>
            <ul
              class="sprk-c-Carousel__dots"
              data-sprk-carousel-dots="stepper-carousel-01"
              ></ul>
          </div>
          <span class="sprk-c-Carousel__next sprk-o-Stack__item">
            <svg class="
              sprk-c-Icon
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl"
              viewBox="0 0 100 100">
              <use xlink:href="#chevron-right-circle" />
            </svg>
          </span>
        </div>
      </div>`);
    document.body.appendChild(carouselContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should emit sprk.carousel.slide event after sliding', () => {
    const carouselInstance = regCarousel(carouselContainer);
    let caughtEvent = false;
    document.body.addEventListener('sprk.carousel.slide', () => {
      caughtEvent = true;
    });
    carouselInstance.slideTo(2);
    expect(caughtEvent).toBe(true);
  });

  it('clicking a dot should end up with a call to slideTo()', () => {
    const dotContainer = document.createElement('ul');
    const dot = document.createElement('div');
    dotContainer.appendChild(dot);
    const instance = {
      slideTo: () => {},
    };
    const instanceSpy = sinon.spy(instance, 'slideTo');

    afterLoryInit(dotContainer, instance);
    dot.click();
    expect(instanceSpy.calledOnce).toBe(true);
  });

  it('beforeLoryInit shouldnt error if dotContainer is null', () => {
    expect(beforeLoryInit(null, 4)).toBe();
  });

  it('afterLoryInit shouldnt error if dotContainer is null', () => {
    expect(afterLoryInit(null, {})).toBe();
  });

  it('afterLorySlide shouldnt error if dotContainer is null', () => {
    expect(afterLorySlide(null, {}, {})).toBe();
  });
});
