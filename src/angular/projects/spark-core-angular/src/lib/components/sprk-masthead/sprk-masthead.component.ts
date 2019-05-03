import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
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
          <sprk-link [href]="logoHref" linkType="unstyled">
            <ng-content select="[logo-slot]"></ng-content>
            <span class="sprk-u-ScreenReaderText">{{
              logoLinkScreenReaderText
            }}</span>
          </sprk-link>
        </div>

        <nav
          class="
          sprk-c-Masthead__little-nav
          sprk-o-Stack__item
          sprk-o-Stack__item--flex@xxs
          sprk-o-Stack
          sprk-o-Stack--misc-a
          sprk-o-Stack--split@xxs
          sprk-o-Stack--end-row"
          role="navigation"
        >
          <ng-content select="[little-nav-slot]"></ng-content>

          <ng-content select="[utility-slot]"></ng-content>
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
                'sprk-o-Stack__item': true,
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
                <sprk-link
                  linkType="plain"
                  additionalClasses="sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                  [href]="link.href"
                >
                  {{ link.text }}
                </sprk-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        *ngIf="isNarrowNavOpen"
        class="sprk-c-Masthead__narrow-nav"
        data-sprk-mobile-nav="mobileNav"
        role="navigation"
      >
        <sprk-dropdown
          *ngIf="narrowSelector"
          dropdownType="mastheadSelector"
          additionalClasses="sprk-c-Masthead__selector-dropdown"
          additionalTriggerClasses="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
          additionalTriggerTextClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
          additionalIconClasses="sprk-Stack__item sprk-u-mrs"
          [triggerText]="narrowSelector['trigger'].text"
          selector="Select One"
          triggerIconType="chevron-down"
          [choices]="narrowSelector['choices']"
        >
          <div
            class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
            sprkDropdownFooter
          >
            <sprk-link
              linkType="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--tertiary"
            >
              Go Elsewhere
            </sprk-link>
          </div>
        </sprk-dropdown>

        <sprk-masthead-accordion [additionalClasses]="getNarrowNavClasses()">
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
                    <sprk-link
                      linkType="unstyled"
                      additionalClasses="sprk-c-MastheadAccordion__summary"
                      [href]="subNavLink.href"
                    >
                      <sprk-icon
                        [iconType]="subNavLink.leadingIcon"
                        additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mrs"
                        *ngIf="subNavLink.leadingIcon"
                      ></sprk-icon>
                      {{ subNavLink.text }}
                    </sprk-link>
                  </li>
                </ul>
              </sprk-masthead-accordion-item>
            </div>
            <div *ngIf="!narrowLink.subNav">
              <li
                [ngClass]="{
                  'sprk-c-MastheadAccordion__item': true,
                  'sprk-c-MastheadAccordion__item--active': narrowLink.active
                }"
              >
                <sprk-link
                  linkType="unstyled"
                  additionalClasses="sprk-c-MastheadAccordion__summary"
                  [href]="narrowLink.href"
                >
                  <span class="sprk-c-MastheadAccordion__heading">
                    <sprk-icon
                      [iconType]="narrowLink.leadingIcon"
                      additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mrs"
                      *ngIf="narrowLink.leadingIcon"
                    ></sprk-icon>
                    {{ narrowLink.text }}
                  </span>
                </sprk-link>
              </li>
            </div>
          </div>
        </sprk-masthead-accordion>
        <ng-content select="[narrowNavFooter]"></ng-content>
      </nav>
    </header>
  `
})
export class SparkMastheadComponent {
  constructor(private renderer: Renderer2, router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.closeNarrowNav();
      }
    });
  }

  @Input()
  logoHref = '/';
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
  @Input()
  narrowSelector: object;

  iconType = 'chevron-down';
  componentID = _.uniqueId();
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;
  isScrolled = false;

  @HostListener('window:orientationchange')
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    window.scrollY >= 10 ? (this.isScrolled = true) : (this.isScrolled = false);
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

    if (this.isScrolled) {
      classArray.push('sprk-c-Masthead--scroll');
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
      'sprk-o-Stack--misc-a',
      'sprk-o-Stack--center-row',
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
      this.closeNarrowNav();
    } else {
      this.openNarrowNav();
    }
  }

  openNarrowNav(): void {
    this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.addClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden'
    );
    this.renderer.addClass(document.body, 'sprk-u-Height--100');
    this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
    this.isNarrowNavOpen = true;
  }

  closeNarrowNav(): void {
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
  }
}
