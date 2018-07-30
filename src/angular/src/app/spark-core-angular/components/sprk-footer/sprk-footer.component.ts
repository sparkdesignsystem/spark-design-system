import { Component, Input } from '@angular/core';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClassesCard()" role="contentinfo">
      <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
      </p>

      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref">
            <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
            <span class="sprk-u-ScreenReaderText">Description of image</span>
          </a>
        </div>

        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref">
            <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
            <span class="sprk-u-ScreenReaderText">Description of image</span>
          </a>
        </div>

        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref">
            <div class="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--small"></div>
            <span class="sprk-u-ScreenReaderText">Description of image</span>
          </a>
        </div>
      </div>

      <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs sprk-b-List sprk-b-List--bare">
        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [routerLink]="imgHref">
            Link 1
          </a>
        </li>

        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [routerLink]="imgHref">
            Link 2
          </a>
        </li>

        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [routerLink]="imgHref">
            Link 3
          </a>
        </li>
      </ul>
    </footer>
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() footerType: string = 'base';
  @Input() ctaAnalytics: string;
  @Input() additionalClasses: string;
  @Input() imgHref: string;

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
}
