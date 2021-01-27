import {
  Component,
  HostListener,
  Input,
  Renderer2,
  AfterContentInit,
} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import {
  ISprkNarrowNavLink,
  ISprkNarrowSelector,
  ISprkBigNavLink,
} from './sprk-masthead.interfaces';

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
            [attr.aria-controls]="narrowNavId"
          >
            <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
            <svg
              [ngClass]="{
                'sprk-c-Icon': true,
                'sprk-c-Icon--xl': true,
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

        <div
          class="sprk-c-Masthead__nav-item sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs"
        >
          <ng-content select="[navItem-slot]"></ng-content>
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
                  additionalTriggerClasses="sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                  additionalClasses="sprk-u-TextAlign--left"
                  triggerIconType="chevron-down"
                  [analyticsString]="link.analyticsString"
                  [triggerText]="link.text"
                ></sprk-dropdown>
              </div>
              <div *ngIf="!link.subNav">
                <sprk-link
                  linkType="plain"
                  [analyticsString]="link.analyticsString"
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
        role="navigation"
        [id]="narrowNavId"
      >
        <sprk-dropdown
          *ngIf="narrowSelector"
          dropdownType="mastheadSelector"
          additionalClasses="sprk-c-Masthead__selector-dropdown"
          additionalTriggerClasses="
            sprk-c-Masthead__selector
            sprk-b-Link
            sprk-b-Link--plain
            sprk-o-Stack
            sprk-o-Stack--split@xxs
            sprk-o-Stack--center-column"
          additionalTriggerTextClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
          additionalIconClasses="sprk-Stack__item sprk-u-mrs"
          [triggerText]="narrowSelector['trigger'].text"
          selector="Select One"
          triggerIconType="chevron-down"
          [choices]="narrowSelector['choices']"
        >
          <div
            *ngIf="narrowSelector['footer']"
            class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
            sprkDropdownFooter
          >
            <sprk-link
              linkType="unstyled"
              [analyticsString]="narrowSelector['footer'].analyticsString"
              [href]="narrowSelector['footer'].href"
              additionalClasses="sprk-c-Button sprk-c-Button--tertiary"
            >
              {{ narrowSelector['footer'].text }}
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
                      [analyticsString]="subNavLink.analyticsString"
                    >
                      <sprk-icon
                        [iconType]="subNavLink.leadingIcon"
                        additionalClasses="
                          sprk-c-Icon--filled-current-color
                          sprk-c-Icon--stroke-current-color
                          sprk-c-Icon--xl
                          sprk-u-mrs
                        "
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
                  [analyticsString]="narrowLink.analyticsString"
                >
                  <span class="sprk-c-MastheadAccordion__heading">
                    <sprk-icon
                      [iconType]="narrowLink.leadingIcon"
                      additionalClasses="
                        sprk-c-Icon--filled-current-color
                        sprk-c-Icon--stroke-current-color
                        sprk-c-Icon--xl
                        sprk-u-mrs
                      "
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
  `,
})
export class SprkMastheadComponent implements AfterContentInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.closeNarrowNav();
      }
    });
  }

  /**
   *  The `href` value of the logo.
   */
  @Input()
  logoHref = '/';
  /**
   * The value supplied will be used as
   * screen reader text that is visually hidden
   * for the link that wraps the logo.
   */
  @Input()
  logoLinkScreenReaderText = 'Go to the homepage';
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * big navigation link container.
   */
  @Input()
  additionalBigNavClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * narrow navigation container.
   */
  @Input()
  additionalNarrowNavClasses: string;
  /**
   * Expects an array of
   * [ISprkNarrowNavLink](https://github.com/sparkdesignsystem/spark-design-system/blob/master/angular/projects/spark-angular/src/lib/components/sprk-masthead/sprk-masthead.interfaces.ts)
   *  to be
   * represented in the narrow nav element
   * of the Masthead component.
   */
  @Input()
  narrowNavLinks: ISprkNarrowNavLink[];
  /**
   * Represents the initial state of the
   * narrow nav element of the Masthead component.
   */
  @Input()
  isNarrowNavOpen = false;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * Expects an array of
   * [ISprkBigNavLink](https://github.com/sparkdesignsystem/spark-design-system/blob/master/angular/projects/spark-angular/src/lib/components/sprk-masthead/sprk-masthead.interfaces.ts)
   *  to be
   * used to create the Big Navigation of
   * the Masthead component.
   */
  @Input()
  bigNavLinks: ISprkBigNavLink[];
  /**
   * Expects a [ISprkNarrowSelector](https://github.com/sparkdesignsystem/spark-design-system/blob/master/angular/projects/spark-angular/src/lib/components/sprk-masthead/sprk-masthead.interfaces.ts)
   *  object that
   * represents dropdown choices inside the dropdown
   * rendered in the Narrow Navigation.
   */
  @Input()
  narrowSelector: ISprkNarrowSelector;
  /**
   * A string that is used to set the `id` on the narrow nav
   * and the `aria-controls` for the menu trigger button.
   */
  @Input()
  narrowNavId = _.uniqueId(`sprk_masthead_narrow_nav_`);

  /**
   * @ignore
   */
  iconType = 'chevron-down';
  /**
   * @ignore
   */
  componentID = _.uniqueId();
  /**
   * @ignore
   */
  controls_id = `sprk-narrow-navigation-item__${this.componentID}`;
  /**
   * @ignore
   */
  isScrolled = false;
  /**
   * @ignore
   */
  isNarrowLayout = false;
  /**
   * @ignore
   */
  scrollDirection = 'up';
  /**
   * @ignore
   */
  isHidden = false;
  /**
   * @ignore
   */
  isNarrowOnResize = false;
  /**
   * @ignore
   */
  scrollPosition = 0;
  /**
   * @ignore
   */
  throttledCheckScrollDirection = _.throttle(this.checkScrollDirection, 500);
  /**
   * @ignore
   */
  throttledUpdateLayoutState = _.throttle(this.updateLayoutState, 500);

  /**
   * @ignore
   * Closes the narrow navigation menu
   * if it is left open when
   * the viewport is expanded.
   */
  @HostListener('window:orientationchange')
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  /**
   * @ignore
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    window.scrollY >= 10 ? (this.isScrolled = true) : (this.isScrolled = false);
    if (this.isNarrowLayout) {
      this.throttledCheckScrollDirection();
    }
  }

  /**
   * @ignore
   * Handles when viewport size changes to
   * large while narrow nav is hidden.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.isNarrowOnResize = this.isElementVisible('.sprk-c-Masthead__menu');
    this.throttledUpdateLayoutState();
  }

  /**
   * @ignore
   */
  updateLayoutState() {
    if (this.isNarrowLayout !== this.isNarrowOnResize) {
      this.isNarrowLayout = this.isNarrowOnResize;

      // If is not narrow on resize update, make sure it's visible
      if (!this.isNarrowLayout) {
        this.isHidden = false;
      }
    }
  }

  /**
   * @ignore
   */
  ngAfterContentInit() {
    this.isNarrowLayout = this.isElementVisible('.sprk-c-Masthead__menu');
  }

  /**
   * @ignore
   */
  isElementVisible(selector) {
    if (typeof window === 'undefined') {
      return;
    }
    const element = document.querySelector(selector);
    if (!element) {
      return;
    }
    const elementDisplayValue = window.getComputedStyle(element).display;
    const elementVisibilityValue = window.getComputedStyle(element).visibility;
    const elementIsVisible =
      elementDisplayValue === 'none' || elementVisibilityValue === 'hidden'
        ? false
        : true;
    return elementIsVisible;
  }

  /**
   * @ignore
   */
  scrollYDirection() {
    if (typeof window !== 'undefined') {
      const newScrollPos = window.scrollY;
      if (newScrollPos < 0) {
        return;
      }
      const diff = newScrollPos - this.scrollPosition;
      const direction = diff > 0 ? 'down' : 'up';
      this.scrollPosition = newScrollPos;
      return direction;
    }
  }

  /**
   * @ignore
   */
  checkScrollDirection() {
    const newDirection = this.scrollYDirection();
    if (this.scrollDirection !== newDirection) {
      this.scrollDirection = newDirection;
      this.scrollDirection === 'down'
        ? (this.isHidden = true)
        : (this.isHidden = false);
    }
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Masthead', 'sprk-o-Stack'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.isNarrowNavOpen) {
      classArray.push('sprk-c-Masthead--open');
    }

    if (this.isScrolled) {
      classArray.push('sprk-c-Masthead--scroll');
    }

    if (this.isHidden) {
      classArray.push('sprk-c-Masthead--hidden');
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getNarrowNavClasses(): string {
    const classArray: string[] = [];

    if (this.additionalNarrowNavClasses) {
      this.additionalNarrowNavClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getSecondaryNavClasses(): string {
    const classArray: string[] = [
      'sprk-c-Masthead__big-nav-items',
      'sprk-o-Stack',
      'sprk-o-Stack--misc-a',
      'sprk-o-Stack--center-row',
      'sprk-o-Stack--split@xxs',
      'sprk-b-List',
      'sprk-b-List--bare',
    ];

    if (this.additionalBigNavClasses) {
      this.additionalBigNavClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  toggleNarrowNav(event): void {
    event.preventDefault();
    if (this.isNarrowNavOpen) {
      this.closeNarrowNav();
    } else {
      this.openNarrowNav();
    }
  }

  /**
   * @ignore
   */
  openNarrowNav(): void {
    this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.addClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden',
    );
    this.renderer.addClass(document.body, 'sprk-u-Height--100');
    this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
    this.isNarrowNavOpen = true;
  }

  /**
   * @ignore
   */
  closeNarrowNav(): void {
    this.renderer.removeClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.removeClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden',
    );
    this.renderer.removeClass(document.body, 'sprk-u-Height--100');
    this.renderer.removeClass(
      document.body.parentElement,
      'sprk-u-Height--100',
    );
    this.isNarrowNavOpen = false;
  }
}
