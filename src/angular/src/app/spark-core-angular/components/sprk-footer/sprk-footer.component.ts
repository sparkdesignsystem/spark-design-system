import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <p class="sprk-o-Stack__item sprk-b-TypeBodyTwo">
        {{ footerCopy }}
      </p>

      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref" [attr.data-analytics]="analyticsImg">
            <img src="{{ imgSrc }}" alt="{{ imgAlt }}">
          </a>
        </div>

        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref" [attr.data-analytics]="analyticsImg">
            <img src="{{ imgSrc }}" alt="{{ imgAlt }}">
          </a>
        </div>

        <div class="sprk-o-Stack__item">
          <a [routerLink]="imgHref" [attr.data-analytics]="analyticsImg">
            <img src="{{ imgSrc }}" alt="{{ imgAlt }}">
          </a>
        </div>
      </div>

      <ul class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs sprk-b-List sprk-b-List--bare">
        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [attr.data-analytics]="analyticsLink" [routerLink]="linkHref">
            {{ linkText }}
          </a>
        </li>

        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [attr.data-analytics]="analyticsLink" [routerLink]="linkHref">
            {{ linkText }}
          </a>
        </li>

        <li class="sprk-o-Stack__item">
          <a class="sprk-b-Link sprk-b-Link--standalone sprk-b-Link--muted" [attr.data-analytics]="analyticsLink" [routerLink]="linkHref">
            {{ linkText }}
          </a>
        </li>
      </ul>
    </footer>
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() footerType: string = 'base';
  @Input() analyticsLink: string;
  @Input() analyticsImg: string;
  @Input() additionalClasses: string;
  @Input() imgHref: string;
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() linkText: string;
  @Input() linkHref: string;
  @Input() footerCopy: string;

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
