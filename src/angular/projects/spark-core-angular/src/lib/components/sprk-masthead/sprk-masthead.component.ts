import { Component, HostListener, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header
      class="sprk-c-Masthead sprk-o-Stack"
      role="banner"
      idString="masthead-1"
    >
      <div class="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs">
        <div class="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Box">
          <button
            class="sprk-c-Menu"
            type="button"
            [attr.aria-expanded]="isNarrowNavOpen ? true : false"
            (click)="toggleNarrowNav()"
            data-sprk-mobile-nav-trigger="mobileNav"
          >
            <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
            <svg
              class="sprk-c-Icon sprk-c-Icon--l sprk-c-Menu__icon"
              aria-hidden="true"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--two"
                  d="m8 32h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--one"
                  d="m8 18.68h48"
                />
                <path
                  class="sprk-c-Menu__line sprk-c-Menu__line--three"
                  d="m8 45.32h48"
                />
              </g>
            </svg>
          </button>
        </div>

        <div
          class="sprk-c-Masthead__logo sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs sprk-o-Box"
        >
          <a href="#"> <ng-content select="[logo-slot]"></ng-content> </a>
        </div>

        <nav
          class="
          sprk-c-Masthead__site-options
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xxs
          sprk-o-Stack
          sprk-o-Stack--large
          sprk-o-Stack--split@s
          sprk-o-Stack--end-row
          sprk-o-Box"
          role="navigation"
        >
          <div
            class="sprk-c-Masthead__nav sprk-o-Stack__item sprk-o-Stack__item--center-column"
          >
            <ng-content select="[site-slot]"></ng-content>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--center-column">
            <ng-content select="[utility-slot]"></ng-content>
          </div>
        </nav>
      </div>

      <div class="sprk-o-Stack__item">
        <div class="sprk-c-Masthead__secondary-nav">
          <nav role="navigation" [attr.data-id]="idString">
            <ul [ngClass]="getSecondaryNavClasses()">
              <li
                *ngFor="let link of secondaryNavLinks"
                [ngClass]="{
                  'sprk-c-SecondaryNavigation__item': true,
                  'sprk-o-Stack__item--flex@xxs': true,
                  'sprk-c-SecondaryNavigation__item--open':
                    link.focused && link.subNav
                }"
                routerLinkActive="sprk-c-SecondaryNavigation__item--active"
                [attr.aria-haspopup]="link.subNav ? 'true' : null"
                [attr.aria-expanded]="
                  link.subNav && link.focused ? 'true' : 'false'
                "
                (focusin)="hideAllDropDowns($event); link.focused = true"
                (mouseenter)="hideAllDropDowns($event); link.focused = true"
                (mouseleave)="hideAllDropDowns($event)"
              >
                <a
                  class="sprk-c-SecondaryNavigation__link"
                  [routerLink]="link.href"
                  [attr.data-analytics]="link.analyticsString"
                  href="#nogo"
                  >{{ link.text }}
                </a>
                <div
                  *ngIf="link.subNav"
                  class="sprk-c-SecondaryNavigation__sub-menu-container"
                >
                  <ul
                    [ngClass]="{
                      'sprk-c-SecondaryNavigation': true,
                      'sprk-c-SecondaryNavigation--sub': true,
                      'sprk-u-Display--none': !link.focused
                    }"
                  >
                    <li
                      *ngFor="let sublink of link.subNav; let last = last"
                      class="sprk-c-SecondaryNavigation__item sprk-c-SecondaryNavigation__item--sub"
                    >
                      <a
                        class="sprk-c-SecondaryNavigation__link sprk-c-SecondaryNavigation__link--sub"
                        [routerLink]="sublink.href"
                        [attr.data-analytics]="sublink.analyticsString"
                        href="#nogo"
                      >
                        {{ sublink.text }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <span class="sprk-c-Divider sprk-u-man"></span>
          </nav>
        </div>

        <div
          *ngIf="isNarrowNavOpen"
          class="sprk-c-Masthead__narrow-nav sprk-u-Display--none"
          data-sprk-mobile-nav="mobileNav"
        >
          <nav role="navigation" data-id="navigation-narrow-1">
            <ul [class]="getNarrowNavClasses()">
              <li
                *ngFor="let narrowNavLink of narrowNavLinks"
                [ngClass]="getClasses()"
                routerLinkActive="sprk-c-Accordion__item--active"
              >
                <div
                  *ngIf="narrowNavLink.subNav != null; then: menu; else: link"
                ></div>
                <ng-template #link>
                  <a
                    [attr.aria-controls]="narrowNavLink.controls_id"
                    class="sprk-c-Accordion__summary"
                    [routerLink]="narrowNavLink.href"
                    [attr.data-analytics]="narrowNavLink.analyticsString"
                  >
                    <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
                      {{ narrowNavLink.text }}
                    </span>
                  </a>
                </ng-template>
                <ng-template #menu>
                  <a
                    [attr.aria-controls]="narrowNavLink.controls_id"
                    class="sprk-c-Accordion__summary"
                    href="#nogo"
                    [attr.data-analytics]="narrowNavLink.analyticsString"
                    (click)="toggleAccordion($event)"
                  >
                    <span class="sprk-b-TypeBodyTwo sprk-c-Accordion__heading ">
                      {{ narrowNavLink.text }}
                    </span>
                    <sprk-icon
                      [iconType]="iconType"
                      additionalClasses="sprk-c-Icon--l sprk-c-Accordion__icon"
                    ></sprk-icon>
                  </a>
                  <div [@toggleContent]="animState">
                    <ul
                      [id]="controls_id"
                      class="sprk-b-List sprk-b-List--bare sprk-c-Accordion__details sprk-u-HideWhenJs"
                    >
                      <li *ngFor="let navItem of narrowNavLink.subNav">
                        <a
                          class="sprk-b-Link sprk-b-Link--standalone sprk-u-pam"
                          [routerLink]="navItem.href"
                          [attr.data-analytics]="navItem.analyticsString"
                          >{{ navItem.text }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </ng-template>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class SparkMastheadComponent {
  @Input()
  logoHref = '/'; // Type inferred
  @Input()
  logoLinkScreenReaderText = 'Go to the homepage';
  @Input()
  additionalClasses: string;
  @Input()
  additionalSecondaryNavClasses: string;
  @Input()
  additionalNarrowNavClasses: string;
  @Input()
  narrowNavLinks: object[];
  @Input()
  isNarrowNavOpen = false;
  @Input()
  idString: string;
  @Input()
  secondaryNavLinks: object[];
  @Input()
  narrowNavOpen: boolean;

  iconType = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;
  public iconStateClass = '';
  public animState = 'closed';

  @HostListener('window:resize')
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  @HostListener('document:focusin', ['$event'])
  handleFocusEvent(event: FocusEvent) {
    this.hideAllDropDowns(event);
  }

  toggleAccordion(event): void {}

  accordionState(): void {}

  hideAllDropDowns(event): void {
    event.stopPropagation();
    this.secondaryNavLinks.forEach((link: object) => {
      if (link.hasOwnProperty('focused')) {
        link['focused'] = false;
      }
    });
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Masthead'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getNarrowNavClasses(): string {
    const classArray: string[] = [
      'sprk-c-Accordion',
      'sprk-c-Accordion--navigation',
      'sprk-b-List',
      'sprk-b-List--bare'
    ];

    if (this.additionalNarrowNavClasses) {
      this.additionalNarrowNavClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getSecondaryNavClasses(): string {
    const classArray: string[] = [
      'sprk-c-SecondaryNavigation',
      'sprk-o-Stack',
      'sprk-o-Stack--split@xxs'
    ];

    if (this.additionalSecondaryNavClasses) {
      this.additionalSecondaryNavClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  toggleNarrowNav(): void {
    this.isNarrowNavOpen = !this.isNarrowNavOpen;
  }

  closeNarrowNav(): void {
    this.isNarrowNavOpen = false;
  }
}
