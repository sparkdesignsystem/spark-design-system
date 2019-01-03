import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header [ngClass]="getClasses()" role="banner" [attr.data-id]="idString">
      <div
        class="sprk-c-Masthead__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--split@xxs"
      >
        <div
          class="sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs"
        >
          <button
            class="sprk-c-Menu"
            type="button"
            [attr.aria-expanded]="isNarrowNavOpen ? true : false"
            (click)="toggleNarrowNav($event)"
            data-sprk-mobile-nav-trigger="mobileNav"
          >
            <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
            <svg
              [ngClass]="{
                'sprk-c-Icon': true,
                'sprk-c-Icon--l': true,
                'sprk-c-Menu__icon': true,
                'sprk-c-Menu__icon--open': isNarrowNavOpen
              }"
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
          class="sprk-c-Masthead__branding sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs"
        >
          <a [routerLink]="logoHref" href="#nogo">
            <ng-content select="[logo-slot]"></ng-content>
            <span class="sprk-u-ScreenReaderText">{{
              logoLinkScreenReaderText
            }}</span>
          </a>
        </div>

        <nav
          class="
          sprk-c-Masthead__little-nav
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
            class="sprk-c-Masthead__site-links sprk-o-Stack__item sprk-o-Stack__item--center-column"
          >
            <ng-content select="[little-nav-slot]"></ng-content>
          </div>

          <div class="sprk-o-Stack__item sprk-o-Stack__item--center-column">
            <ng-content select="[utility-slot]"></ng-content>
          </div>
        </nav>
      </div>

      <div class="sprk-o-Stack__item">
        <nav
          class="sprk-c-Masthead__big-nav"
          role="navigation"
          [attr.data-id]="idString"
          *ngIf="bigNavLinks"
        >
          <ul [ngClass]="getSecondaryNavClasses()">
            <li
              *ngFor="let link of bigNavLinks"
              [ngClass]="{
                'sprk-c-Masthead__big-nav-item': true,
                'sprk-c-Stack__item': true,
                'sprk-o-Stack__item--flex@xxs': true,
                'sprk-c-Masthead__big-nav-item--open':
                  link.focused && link.subNav
              }"
              routerLinkActive="sprk-c-Masthead__big-nav-item--active"
              [attr.aria-haspopup]="link.subNav ? 'true' : null"
            >
              <div *ngIf="link.subNav">
                <sprk-dropdown
                  [choices]="link.subNav"
                  additionalTriggerClasses="sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                  additionalClasses="sprk-u-Width-100 sprk-u-TextAlign--left"
                  triggerIconType="chevron-down"
                  [triggerText]="link.text"
                ></sprk-dropdown>
              </div>
              <div *ngIf="!link.subNav">
                <a
                  class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                  [routerLink]="link.href"
                  href="#nogo"
                >
                  {{ link.text }}
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div
          *ngIf="isNarrowNavOpen"
          class="sprk-c-Masthead__narrow-nav"
          data-sprk-mobile-nav="mobileNav"
        >
          <nav role="navigation">
            <sprk-masthead-accordion
              [additionalClasses]="getNarrowNavClasses()"
            >
              <div *ngFor="let narrowLink of narrowNavLinks">
                <div *ngIf="narrowLink.subNav">
                  <sprk-masthead-accordion-item
                    iconTypeOpen="chevron-down"
                    iconTypeClosed="chevron-down"
                    [leadingIcon]="narrowLink.leadingIcon"
                    [isActive]="narrowLink.active"
                    [title]="narrowLink.text"
                  >
                    <ul
                      class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details"
                    >
                      <li
                        class="sprk-c-MastheadAccordion__item"
                        *ngFor="let subNavLink of narrowLink.subNav"
                      >
                        <a
                          class="sprk-c-MastheadAccordion__summary"
                          [routerLink]="subNavLink.href"
                          href="#nogo"
                        >
                          <sprk-icon
                            [iconType]="subNavLink.leadingIcon"
                            additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l sprk-u-mrs"
                            *ngIf="subNavLink.leadingIcon"
                          ></sprk-icon>
                          {{ subNavLink.text }}
                        </a>
                      </li>
                    </ul>
                  </sprk-masthead-accordion-item>
                </div>
                <div *ngIf="!narrowLink.subNav">
                  <li
                    [ngClass]="{
                      'sprk-c-MastheadAccordion__item': true,
                      'sprk-c-MastheadAccordion__item--active':
                        narrowLink.active
                    }"
                  >
                    <a
                      class="sprk-c-MastheadAccordion__summary"
                      [routerLink]="narrowLink.href"
                      href="#nogo"
                    >
                      <span class="sprk-c-MastheadAccordion__heading">
                        <sprk-icon
                          [iconType]="narrowLink.leadingIcon"
                          additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l sprk-u-mrs"
                          *ngIf="narrowLink.leadingIcon"
                        ></sprk-icon>
                        {{ narrowLink.text }}
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </sprk-masthead-accordion>
          </nav>
          <ng-content select="[narrowNavFooter]"></ng-content>
        </div>
      </div>
    </header>
  `
})
export class SparkMastheadComponent {
  constructor(private renderer: Renderer2) {}

  @Input()
  logoHref = '/'; // Type inferred
  @Input()
  logoLinkScreenReaderText = 'Go to the homepage';
  @Input()
  additionalClasses: string;
  @Input()
  additionalBigNavClasses: string;
  @Input()
  additionalNarrowNavClasses: string;
  @Input()
  narrowNavLinks: any[];
  @Input()
  isNarrowNavOpen = false;
  @Input()
  idString: string;
  @Input()
  bigNavLinks: any[];

  iconType = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;

  @HostListener('window:orientationchange')
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Masthead', 'sprk-o-Stack'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    if (this.isNarrowNavOpen) {
      classArray.push('sprk-c-Masthead--open');
    }

    return classArray.join(' ');
  }

  getNarrowNavClasses(): string {
    const classArray: string[] = [];

    if (this.additionalNarrowNavClasses) {
      this.additionalNarrowNavClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getSecondaryNavClasses(): string {
    const classArray: string[] = [
      'sprk-c-Masthead__big-nav-items',
      'sprk-o-Stack',
      'sprk-o-Stack--split@xxs',
      'sprk-b-List',
      'sprk-b-List--bare'
    ];

    if (this.additionalBigNavClasses) {
      this.additionalBigNavClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  toggleNarrowNav(event): void {
    event.preventDefault();
    if (this.isNarrowNavOpen) {
      this.renderer.removeClass(document.body, 'sprk-u-Overflow--hidden');
      this.renderer.removeClass(
        document.body.parentElement,
        'sprk-u-Overflow--hidden'
      );
      this.renderer.removeClass(document.body, 'sprk-u-Height--100');
      this.renderer.removeClass(
        document.body.parentElement,
        'sprk-u-Height--100'
      );
      this.isNarrowNavOpen = false;
    } else {
      this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
      this.renderer.addClass(
        document.body.parentElement,
        'sprk-u-Overflow--hidden'
      );
      this.renderer.addClass(document.body, 'sprk-u-Height--100');
      this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
      this.isNarrowNavOpen = true;
    }
  }

  closeNarrowNav(): void {
    this.isNarrowNavOpen = false;
  }
}
