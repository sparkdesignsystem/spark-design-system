import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-carousel-item',
  template: `
    <li class="sprk-c-Carousel__frame-item">
      <img [src]="imageSrc" [attr.alt]="altText" />
    </li>
  `
})
export class SprkCarouselItemComponent {
  @Input()
  additionalClasses: string;
  @Input()
  imageSrc: string;
  @Input()
  altText: string;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
