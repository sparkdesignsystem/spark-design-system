import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
        <div *ngIf="award === 'true'" class="sprk-o-Stack__item sprk-o-Stack__item--equal@xl sprk-o-Stack sprk-o-Stack--medium">
          <sprk-toggle
            *ngIf="disclaimer !== 'false'"
            sprk-stack-item
            toggleType="base"
            title="{{ disclaimerTitle }}"
            body="{{ disclaimerCopy }}"
            analyticsString="{{ analyticsStringDisclaimer }}">
          </sprk-toggle>

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
        </div>

        <sprk-award
          *ngIf="award === 'true'"
          disclaimer="false"
          title="Spark Award Component"
          additionalClassesImgOne="{{ additionalClassesAwardImgOne }}"
          additionalClassesImgTwo="{{ additionalClassesAwardImgTwo }}"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
    </footer>
  `,
  styles: ['']
})

export class SparkFooterComponent {
  @Input() award: string;
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
  @Input() additionalClassesBaseImgs: string;
  @Input() additionalClassesAwardImgOne: string;
  @Input() additionalClassesAwardImgTwo: string;
  @Input() disclaimer: string;
  @Input() disclaimerTitle: string;
  @Input() disclaimerCopy: string;
  @Input() analyticsStringDisclaimer: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-o-Box',
      'sprk-o-Stack',
      'sprk-o-Stack--large',
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

    if (this.additionalClassesBaseImgs) {
      this.additionalClassesBaseImgs.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
