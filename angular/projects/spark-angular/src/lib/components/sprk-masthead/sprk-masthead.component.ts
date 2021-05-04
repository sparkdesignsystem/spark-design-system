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
          *ngIf="collapsibleNav"
          class="sprk-c-Masthead__menu sprk-o-Stack__item--center-column@xxs"
        >
          <sprk-masthead-nav-collapsible-button
            [collapsibleNavId]="collapsibleNavId"
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
       * when the new page loads.
       */
      if (!this.collapsibleNav) {
        return;
      }
      if (event instanceof NavigationEnd) {
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
   * Represents the initial state of the
   * narrow nav element of the Masthead component.
   */
  @Input()
  isCollapsibleNavOpen = false;

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
    read: ElementRef,
  })
  collapsibleNav: ElementRef;

  @ContentChild(SprkMastheadBrandingDirective, {
    static: false,
    read: ElementRef,
  })
  branding: ElementRef;

  /**
   * @ignore
   */
  componentID = uniqueId();
  /**
   * @ignore
   */
  controls_id = `sprk-collapsible-nav-item__${this.componentID}`;
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
  collapsibleNavId: string;
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
   * @ignore
   * Closes the collapsible navigation
   * if it is left open when
   * the viewport is expanded.
   */
  @HostListener('window:orientationchange')
  handleResizeEvent() {
    if (this.collapsibleNav) {
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
   * @ignore
   * Handles when viewport size changes to
   * large while narrow nav is hidden.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (this.collapsibleNav) {
      this.isNarrowViewportOnResize = this.isElementVisible(
        '.sprk-c-Masthead__menu',
      );
      this.throttledUpdateLayoutState();
    }
  }

  /**
   * If there is a collapsbile nav and it has an ID
   * then get the value else get a
   * custom ID from the uniqueId method.
   */
  getCollapsibleNavId() {
    if (!this.collapsibleNav) {
      return;
    }
    this.collapsibleNav.nativeElement.id.length > 0
      ? (this.collapsibleNavId = this.collapsibleNav.nativeElement.id)
      : (this.collapsibleNavId = uniqueId(`sprk_masthead_collapsible_nav_`));
  }

  /**
   * @ignore
   */
  updateLayoutState() {
    if (this.isNarrowViewport !== this.isNarrowViewportOnResize) {
      this.isNarrowViewport = this.isNarrowViewportOnResize;

      // If the viewport is not narrow on
      // resize update, show the Masthead.
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

    // Check for existing ID on collapsible navigation
    this.getCollapsibleNavId();
  }

  /**
   * @ignore
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
   * @ignore
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
   * @ignore
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

    if (this.collapsibleNav && this.isCollapsibleNavOpen) {
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
   * @ignore
   * When the button for the collapsible nav
   * is clicked this will check the value of
   * the isCollapsibleNavOpen boolen tracker
   * to determine when to open or close
   * the collapsible navigation.
   */
  toggleCollapsibleNav(event): void {
    if (!this.collapsibleNav) {
      return;
    }
    if (this.isCollapsibleNavOpen) {
      this.closeCollapsibleNav();
    } else {
      this.openCollapsibleNav();
    }
  }

  /**
   * @ignore
   * Adds the correct styles to the body and HTML elements
   * in order for the collapsible nav to be open. This also removes
   * the display none class from the collapsible nav to show it and updates
   * the tracker isCollapsibleNavOpen boolen to be `true`.
   */
  openCollapsibleNav(): void {
    if (!this.collapsibleNav) {
      return;
    }
    this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.addClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden',
    );
    this.renderer.addClass(document.body, 'sprk-u-Height--100');
    this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
    this.isCollapsibleNavOpen = true;
    this.renderer.removeClass(
      this.collapsibleNav.nativeElement,
      'sprk-u-Display--none',
    );
  }

  /**
   * @ignore
   * Removes the styles that were added to
   * the body and HTML elements when the nav was open.
   * This also adds the display none class
   * to the collapsible nav to hide it and updates
   * the tracker isCollapsibleNavOpen boolen to be `false`.
   */
  closeCollapsibleNav(): void {
    if (!this.collapsibleNav) {
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
    this.isCollapsibleNavOpen = false;
    this.renderer.addClass(
      this.collapsibleNav.nativeElement,
      'sprk-u-Display--none',
    );
  }
}
