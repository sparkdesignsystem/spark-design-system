import {
  Component,
  HostListener,
  Input,
  Renderer2,
  AfterContentInit,
  ContentChild,
  ElementRef,
} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { uniqueId, throttle } from 'lodash';
import { SprkMastheadNavCollapsibleDirective } from './directives/sprk-masthead-nav-collapsible/sprk-masthead-nav-collapsible.directive';
import { SprkMastheadBrandingDirective } from './directives/sprk-masthead-branding/sprk-masthead-branding.directive';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header [ngClass]="getClasses()" role="banner" [attr.data-id]="idString">
      <sprk-stack
        sprkStackItem
        splitAt="extraTiny"
        additionalClasses="sprk-c-Masthead__content"
        *ngIf="branding"
      >
        <div
          sprkStackItem
          *ngIf="collapsibleNavDirective"
          class="sprk-c-Masthead__menu sprk-o-Stack__item--center-column@xxs"
        >
          <sprk-masthead-nav-collapsible-button
            [collapsibleNavId]="collapsibleNavDirective.id"
            (sprkCollapsibleNavButtonClicked)="toggleCollapsibleNav($event)"
          ></sprk-masthead-nav-collapsible-button>
        </div>

        <ng-content select="[sprkMastheadBranding]"></ng-content>
        <ng-content select="[sprkMastheadNavItem]"></ng-content>
        <ng-content select="[sprkMastheadNavItems]"></ng-content>
      </sprk-stack>
      <ng-content></ng-content>
    </header>
  `,
})
export class SprkMastheadComponent implements AfterContentInit {
  /**
   * @ignore
   */
  constructor(private renderer: Renderer2, router: Router) {
    router.events.subscribe((event: Event) => {
      /**
       * If page is changed by the router
       * and they have a collapsibleNav
       * we want to make sure it is closed
       * when the new page loads if it is open.
       */
      if (!this.collapsibleNavDirective) {
        return;
      }
      if (
        event instanceof NavigationEnd &&
        !this.collapsibleNavDirective.isCollapsed
      ) {
        this.closeCollapsibleNav();
      }
    });
  }

  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;

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

  @ContentChild(SprkMastheadNavCollapsibleDirective, {
    static: false,
  })
  collapsibleNavDirective: SprkMastheadNavCollapsibleDirective;

  @ContentChild(SprkMastheadBrandingDirective, {
    static: false,
    read: ElementRef,
  })
  branding: ElementRef;

  /**
   * @ignore
   */
  isPageScrolled = false;
  /**
   * @ignore
   */
  isNarrowViewport = false;
  /**
   * @ignore
   */
  currentScrollDirection = 'up';
  /**
   * @ignore
   */
  isMastheadHidden = false;
  /**
   * @ignore
   */
  isNarrowViewportOnResize = false;
  /**
   * @ignore
   */
  currentScrollPosition = 0;
  /**
   * @ignore
   */
  throttledUpdateScrollDirection = throttle(this.updateScrollDirection, 500);
  /**
   * @ignore
   */
  throttledUpdateLayoutState = throttle(this.updateLayoutState, 500);

  /**
   * Closes the collapsible navigation
   * if it is left open when
   * the viewport is expanded.
   */
  @HostListener('window:orientationchange')
  handleResizeEvent() {
    if (!this.collapsibleNavDirective.isCollapsed) {
      this.closeCollapsibleNav();
    }
  }
  /**
   * @ignore
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    window.scrollY >= 10
      ? (this.isPageScrolled = true)
      : (this.isPageScrolled = false);
    if (this.isNarrowViewport) {
      this.throttledUpdateScrollDirection();
    }
  }

  /**
   * Handles when viewport size changes to
   * large while narrow nav is hidden.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (this.collapsibleNavDirective) {
      this.isNarrowViewportOnResize = this.isElementVisible(
        '.sprk-c-Masthead__menu',
      );
      this.throttledUpdateLayoutState();
    }
  }

  /**
   * If the viewport goes from small to large
   * then make sure to show the Masthead.
   */
  updateLayoutState() {
    if (this.isNarrowViewport !== this.isNarrowViewportOnResize) {
      this.isNarrowViewport = this.isNarrowViewportOnResize;

      if (!this.isNarrowViewport) {
        this.isMastheadHidden = false;
      }
    }
  }

  /**
   * @ignore
   */
  ngAfterContentInit() {
    this.isNarrowViewport = this.isElementVisible('.sprk-c-Masthead__menu');
  }

  /**
   * Takes in a selector and checks the document for that element.
   * If found, it checks the computed styles for display and visibility and returns
   * wheter or the element is shown on the page.
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
   * @returns 'up' || 'down'
   * This returns whether or not
   * there was an up or down scrolling
   * action.
   */
  getVerticalScrollDirection() {
    if (typeof window !== 'undefined') {
      const newScrollPos = window.scrollY;
      if (newScrollPos < 0) {
        return;
      }
      const diff = newScrollPos - this.currentScrollPosition;
      const direction = diff > 0 ? 'down' : 'up';
      this.currentScrollPosition = newScrollPos;
      return direction;
    }
  }

  /**
   * This gets the direction of the scroll that occurred last
   * and updates the `isMastheadHidden` tracker value. If the user
   * scrolled down, we update `isMastheadHidden` to `true` (hide the Masthead).
   * If the scroll direction is up, we update `isMastheadHidden` to `false` (show the Masthead).
   */
  updateScrollDirection() {
    const newlyScrolledDirection = this.getVerticalScrollDirection();
    if (this.currentScrollDirection !== newlyScrolledDirection) {
      this.currentScrollDirection = newlyScrolledDirection;
      this.currentScrollDirection === 'down'
        ? (this.isMastheadHidden = true)
        : (this.isMastheadHidden = false);
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

    if (
      this.collapsibleNavDirective &&
      !this.collapsibleNavDirective.isCollapsed
    ) {
      classArray.push('sprk-c-Masthead--open');
    }

    if (this.isPageScrolled) {
      classArray.push('sprk-c-Masthead--scroll');
    }

    if (this.isMastheadHidden) {
      classArray.push('sprk-c-Masthead--hidden');
    }

    return classArray.join(' ');
  }

  /**
   * When the button for the collapsible nav
   * is clicked this will check if the collapsible
   * nav is open. If it is open, then it will close it. If it
   * is closed then it will open it.
   */
  toggleCollapsibleNav(): void {
    if (!this.collapsibleNavDirective) {
      return;
    }
    if (!this.collapsibleNavDirective.isCollapsed) {
      this.closeCollapsibleNav();
    } else {
      this.openCollapsibleNav();
    }
  }

  /**
   * Adds the correct styles to the body and HTML elements
   * in order for the collapsible nav to be open.
   * Sets the isCollapsed input on the collapsible nav
   * to be false so that the directive adds the CSS styles
   * to show the nav.
   */
  openCollapsibleNav(): void {
    if (!this.collapsibleNavDirective) {
      return;
    }
    this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.addClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden',
    );
    this.renderer.addClass(document.body, 'sprk-u-Height--100');
    this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
    this.collapsibleNavDirective.isCollapsed = false;
  }

  /**
   * Removes the styles that were added to
   * the body and HTML elements when the nav was open.
   * Sets the isCollapsed input on the collapsed nav to be true
   * so that the directive adds the collapsed CSS class.
   */
  closeCollapsibleNav(): void {
    if (!this.collapsibleNavDirective) {
      return;
    }
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
    this.collapsibleNavDirective.isCollapsed = true;
  }
}
