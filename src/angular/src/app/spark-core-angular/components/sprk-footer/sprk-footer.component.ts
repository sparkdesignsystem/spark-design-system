import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
        <ng-content></ng-content>
      </p>

      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
        <div *ngFor="let img of imgs" [ngClass]="getClassesImgs()">
          <a [routerLink]="img.imgHref" [attr.data-analytics]="img.imgAnalytics">
            <img src="{{ img.imgSrc }}" alt="{{ img.imgAlt }}">
          </a>
        </div>
      </div>

      <sprk-secondary-navigation additionalClasses="sprk-o-Stack__item">
        <sprk-secondary-navigation-item
          *ngFor="let link of links"
          [analyticsString]="link.linkAnalytics"
          [href]="link.linkHref"
          [text]="link.linkText">
        </sprk-secondary-navigation-item>
      </sprk-secondary-navigation>
    </footer>
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() footerType: string = 'base';
  @Input() imgAnalytics: string;
  @Input() linkAnalytics: string;
  @Input() additionalClasses: string;
  @Input() imgHref: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() linkText: string;
  @Input() linkHref: string;
  @Input() imgs: Object;
  @Input() links: Object;
  @Input() additionalClassesImgs: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-Box',
      'sprk-o-Stack',
      'sprk-o-Stack--large'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  getClassesImgs(): string {
    let classArray: Array<String> = [
      'sprk-o-Stack__item'
    ];

    if (this.additionalClassesImgs) {
      this.additionalClassesImgs.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
