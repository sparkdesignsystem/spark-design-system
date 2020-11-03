import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'sprk-carousel',
  template: `
    <div class="sprk-c-Carousel" data-sprk-carousel="stepper-carousel-01">
      <div
        class="
        sprk-c-Carousel__controls
        sprk-o-Stack sprk-o-Stack--split@xxs
        sprk-o-Stack--center-row
        sprk-o-Stack--center-column"
      >
        <span class="sprk-c-Carousel__prev sprk-o-Stack__item">
          <sprk-icon
            iconType="chevron-left-circle"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl"
          >
          </sprk-icon>
        </span>

        <div class="sprk-c-Carousel__frame">
          <ul class="sprk-c-Carousel__slides">
            <ng-content select="sprk-carousel-item"></ng-content>
          </ul>
          <ul
            class="sprk-c-Carousel__dots"
            data-sprk-carousel-dots="stepper-carousel-01"
          ></ul>
        </div>

        <span class="sprk-c-Carousel__next sprk-o-Stack__item">
          <sprk-icon
            iconType="chevron-right-circle"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--xl"
          >
          </sprk-icon>
        </span>
      </div>
    </div>
  `
})
export class SprkCarouselComponent implements AfterViewInit {
  constructor(public ref: ElementRef) {
    this.carouselInstance = {};
  }

  @Input()
  additionalClasses: string;

  carouselInstance: object;

  carousel(carouselElement): any {
    // TODO: implement
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Carousel'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngAfterViewInit(): void {
    const carouselElement = this.ref.nativeElement;
    this.carouselInstance = this.carousel(carouselElement);
  }
}
