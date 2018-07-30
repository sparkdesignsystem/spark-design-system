import { Component, Input } from '@angular/core';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

@Component({
  selector: 'sprk-footer',
  template: `
    footer
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() cardType: string = 'base';
  @Input() body: string;
  @Input() media: string;
  @Input() additionalClassesIcon: string;
  @Input() title: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() iconType: string;
  @Input() iconHref: string;
  @Input() imgHref: string;
  @Input() ctaType: string = 'link';
  @Input() ctaText: string;
  @Input() ctaAnalytics: string;
  @Input() imgLinkAnalytics: string;
  @Input() iconLinkAnalytics: string;
  @Input() ctaHref: string;
  @Input() additionalClasses: string;
  @Input() additionalCtaClasses: string;

  getClassesCta(): string {
    let ctaClassArray: Array<String> = [];

    if (this.ctaType === 'button') {
      ctaClassArray.push('sprk-c-Button');
    } else {
      ctaClassArray.push('sprk-b-Link');
    }

    if (this.additionalCtaClasses) {
      this.additionalCtaClasses.split(' ').forEach((className) => {
        ctaClassArray.push(className);
      })
    }

    return ctaClassArray.join(' ');
  }

  getClassesCard(): string {
    let classArray: Array<String> = [
      'sprk-c-Card sprk-o-Stack'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
