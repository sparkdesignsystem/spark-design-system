/* global document describe beforeEach afterEach it  window  */
import { expect } from 'chai';
import sinon from 'sinon';
import createElementFromString from './_createElementFromString';
import { carousel as regCarousel } from '../components/carousel';

const proxyquire = require('proxyquire');

const lorySpy = sinon.spy();

const { carousel, beforeLoryInit, afterLoryInit, afterLorySlide } = proxyquire(
  '../components/carousel',
  {
    'lory.js': {
      lory: lorySpy,
    },
  },
);

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
              sprk-c-Icon--stroke-current-color
              sprk-c-Icon--l" viewBox="0 0 100 100">
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
              sprk-c-Icon--stroke-current-color
              sprk-c-Icon--l" viewBox="0 0 100 100">
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

  it('should call lory on the element passed in', () => {
    carousel(carouselContainer);
    expect(lorySpy.calledOnce).eql(true);
  });

  it('should emit sprk.carousel.slide event after sliding', () => {
    const carouselInstance = regCarousel(carouselContainer);
    let caughtEvent = false;
    document.body.addEventListener('sprk.carousel.slide', () => {
      caughtEvent = true;
    });
    carouselInstance.slideTo(2);
    expect(caughtEvent).eql(true);
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
    expect(instanceSpy.calledOnce).eql(true);
  });

  it('beforeLoryInit shouldnt error if dotContainer is null', () => {
    expect(beforeLoryInit(null, 4)).eql();
  });

  it('afterLoryInit shouldnt error if dotContainer is null', () => {
    expect(afterLoryInit(null, {})).eql();
  });

  it('afterLorySlide shouldnt error if dotContainer is null', () => {
    expect(afterLorySlide(null, {}, {})).eql();
  });
});
