import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-footer',
  template: `
    <footer [ngClass]="getClasses()" role="contentinfo">
      <sprk-stack
        splitAt="medium"
        itemSpacing="medium"
        *ngIf="siteLinkCols"
        sprkStackItem>
        <div
          *ngFor="let column of siteLinkCols"
          sprkStackItem
          class="sprk-o-Stack__item--equal@m">
          <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
            {{ column.heading }}
          </h2>

          <ul class="sprk-o-Stack sprk-o-Stack--small sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let link of column.siteLinks"
              sprkStackItem>
              <a
                class="sprk-b-Link sprk-b-Link--standalone"
                [routerLink]="link.href"
                [attr.data-analytics]="link.analytics">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </sprk-stack>

      <sprk-stack splitAt="{{ splitAt }}" itemSpacing="large" sprkStackItem>
        <div sprkStackItem class="sprk-o-Stack__item--equal@xl sprk-o-Stack sprk-o-Stack--large">
          <ul
            *ngIf="socialLinks"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let socialLink of socialLinks"
              sprkStackItem>
              <a
                class="sprk-b-Link--muted"
                [routerLink]="socialLink.href"
                [attr.data-analytics]="socialLink.analytics">
                <sprk-icon [iconType]="socialLink.icon" additionalClasses="sprk-c-Icon--l"></sprk-icon>
              </a>
            </li>
          </ul>

          <ul
            *ngIf="feedbackLinks"
            class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-b-List sprk-b-List--bare">
            <li
              *ngFor="let feedbackLink of feedbackLinks"
              class="sprk-o-Stack__item">
              <a
                class="sprk-b-Link sprk-b-Link--muted"
                [routerLink]="feedbackLink.feedbackHref"
                [attr.data-analytics]="feedbackLink.analytics">
                <sprk-icon [iconType]="feedbackLink.icon" additionalClasses="sprk-c-Icon--l sprk-u-mrs"></sprk-icon>
                {{ feedbackLink.text }}
              </a>
            </li>
          </ul>

          <sprk-toggle
            *ngIf="disclaimer"
            sprkStackItem
            toggleType="base"
            title="{{ disclaimerTitle }}"
            body="{{ disclaimerCopy }}"
            analyticsString="{{ analyticsStringDisclaimer }}">
          </sprk-toggle>

          <p sprkStackItem class="sprk-b-TypeBodyTwo">
            <ng-content></ng-content>
          </p>

          <div sprkStackItem class="sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s">
            <div *ngFor="let img of badges" [ngClass]="getClassesBadges()">
              <a [routerLink]="img.href" [attr.data-analytics]="img.analytics">
                <img src="{{ img.src }}" alt="{{ img.alt }}">
              </a>
            </div>
          </div>

          <sprk-secondary-navigation sprkStackItem>
            <sprk-secondary-navigation-item
              *ngFor="let link of navLinks"
              [analyticsString]="link.analytics"
              [href]="link.href"
              [text]="link.text">
            </sprk-secondary-navigation-item>
          </sprk-secondary-navigation>
        </div>

        <ng-content select="[optional-slot]" sprkStackItem></ng-content>
      </sprk-stack>
    </footer>
  `
})
export class SparkFooterComponent {
  @Input()
  splitAt: string;
  @Input()
  additionalClassesBadges: string;
  @Input()
  additionalClasses: string;
  @Input()
  badges: object;
  @Input()
  navLinks: object;
  @Input()
  socialLinks: object;
  @Input()
  feedbackLinks: object;
  @Input()
  siteLinkCols: object;
  @Input()
  disclaimer: string;
  @Input()
  disclaimerTitle: string;
  @Input()
  disclaimerCopy: string;
  @Input()
  analyticsStringDisclaimer: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-o-Box',
      'sprk-o-Stack',
      'sprk-o-Stack--large'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getClassesBadges(): string {
    const classArray: string[] = ['sprk-o-Stack__item'];

    if (this.additionalClassesBadges) {
      this.additionalClassesBadges.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
