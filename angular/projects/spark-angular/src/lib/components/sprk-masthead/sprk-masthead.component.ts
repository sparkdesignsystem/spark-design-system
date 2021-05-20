import {
  Component,
  HostListener,
  Input,
  Renderer2,
  ContentChild,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { throttle } from 'lodash';
import { SprkMastheadNavCollapsibleDirective } from './directives/sprk-masthead-nav-collapsible/sprk-masthead-nav-collapsible.directive';
import { SprkMastheadBrandingDirective } from './directives/sprk-masthead-branding/sprk-masthead-branding.directive';
import { SprkMastheadNavCollapsibleButtonComponent } from './components/sprk-masthead-nav-collapsible-button/sprk-masthead-nav-collapsible-button.component';
import { isElementVisible } from '../../utilities/isElementVisible/isElementVisible';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header [ngClass]="getClasses()" role="banner" [attr.data-id]="idString">
      <sprk-stack
        splitAt="extraTiny"
        isStackItem="true"
        additionalClasses="sprk-c-Masthead__content"
        *ngIf="branding"
      >
        <div
          sprkStackItem
          *ngIf="collapsibleNavDirective"
          #mastheadMenuContainer
          class="sprk-c-Masthead__menu sprk-o-Stack__item--center-column@xxs"
        >
          <sprk-masthead-nav-collapsible-button
            [collapsibleNavId]="collapsibleNavDirective.id"
            (collapsibleNavButtonEvent)="toggleCollapsibleNav($event)"
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
export class SprkMastheadComponent implements AfterViewInit {
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

  @ViewChild(SprkMastheadNavCollapsibleButtonComponent, {
    static: false,
  })
  collapsibleNavButtonComponent: SprkMastheadNavCollapsibleButtonComponent;

  @ViewChild('mastheadMenuContainer', { static: false })
  mastheadMenuContainer: ElementRef;

  @ContentChild(SprkMastheadBrandingDirective, {
    static: false,
    read: ElementRef,
  })
  branding: ElementRef;

  /**
   * Keeps state of if the page has been scrolled.
   */
  isPageScrolled = false;
  /**
   * Keeps state of if the Masthead is on a narrow viewport.
   */
  isNarrowViewport = false;
  /**
   * Keeps state of the scroll direction in order to apply
   * CSS classes or not.
   */
  currentScrollDirection = 'up';
  /**
   * Keeps state of if the Masthead is hidden in order to apply
   * CSS classes or not.
   */
  isMastheadHidden = false;
  /**
   * Keeps state of the viewport on resize.
   */
  isNarrowViewportOnResize = false;
  /**
   * Keeps state of the scroll position in
   * order to apply CSS classes or not.
   */
  currentScrollPosition = 0;
  /**
   * Throttles the updateScrollDirection function to prevent
   * it from impacting performance.
   */
  throttledUpdateScrollDirection = throttle(this.updateScrollDirection, 500);
  /**
   * Throttles the updateLayoutState function to prevent
   * it from impacting performance.
   */
  throttledUpdateLayoutState = throttle(this.updateLayoutState, 500);

  /**
   * Updates the scroll direction when the page is scrolled.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    window.scrollY >= 10
      ? (this.isPageScrolled = true)
      : (this.isPageScrolled = false);
    this.throttledUpdateScrollDirection();
  }

  /**
   * When page is resized or the orientation changes
   * we want to update the internal state to close
   * the collapsible nav if needed.
   */
  @HostListener('window:orientationchange')
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (!this.collapsibleNavDirective) {
      return;
    }
    // Update internal layout state
    this.isNarrowViewportOnResize = isElementVisible(
      this.mastheadMenuContainer,
    );
    this.throttledUpdateLayoutState();
  }

  /**
   * If the viewport size has changed then update
   * the isNarrowViewport state with true if
   * it is now a narrow viewport or false is it's
   * now a large viewport. If it's now a large viewport,
   * we want to make sure the Masthead is not hidden
   * and that we close the collapsible nav if it was open.
   */
  updateLayoutState() {
    // If the viewport didn't change then don't do anything
    if (this.isNarrowViewport === this.isNarrowViewportOnResize) {
      return;
    }
    // Update internal state to new viewport state on resize
    this.isNarrowViewport = this.isNarrowViewportOnResize;
    this.isMastheadHidden = false;
    this.closeCollapsibleNav();
  }

  /**
   * When the view initializes we set internal state
   * for if the viewport is narrow or not.
   */
  ngAfterViewInit() {
    // We say that it is a narrow viewport if
    // the collapisble nav button style is not set to display: none
    this.isNarrowViewport = isElementVisible(this.mastheadMenuContainer);
  }

  /**
   * @returns 'up' || 'down'
   * This returns whether or not
   * there was an up or down scrolling
   * action.
   */
  getVerticalScrollDirection(): string {
    if (typeof window === 'undefined') {
      return;
    }
    const newScrollPos = window.scrollY;
    if (newScrollPos < 0) {
      return;
    }
    const diff = newScrollPos - this.currentScrollPosition;
    const direction = diff > 0 ? 'down' : 'up';
    this.currentScrollPosition = newScrollPos;
    return direction;
  }

  /**
   * This gets the direction of the scroll that occurred last
   * and updates the `isMastheadHidden` tracker value. If the user
   * scrolled down, we update `isMastheadHidden` to `true` (hide the Masthead).
   * If the scroll direction is up, we update `isMastheadHidden` to `false` (show the Masthead).
   */
  updateScrollDirection(): void {
    const newlyScrolledDirection = this.getVerticalScrollDirection();
    if (this.currentScrollDirection !== newlyScrolledDirection) {
      this.currentScrollDirection = newlyScrolledDirection;
      this.currentScrollDirection === 'down'
        ? (this.isMastheadHidden = true)
        : (this.isMastheadHidden = false);
    }
  }

  /**
   * Gets any additional classes for the main Masthead element
   * and sets the default classes.
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
      !this.collapsibleNavDirective.isCollapsed &&
      this.isNarrowViewport
    ) {
      classArray.push('sprk-c-Masthead--is-open');
    }

    if (this.isPageScrolled) {
      classArray.push('sprk-c-Masthead--is-scrolled');
    }

    if (this.isMastheadHidden && this.isNarrowViewport) {
      classArray.push('sprk-c-Masthead--is-hidden');
    }

    return classArray.join(' ');
  }

  /**
   * When the button for the collapsible nav
   * is clicked this will check if the collapsible
   * nav is open. If it is open, then it will close it. If it
   * is closed then it will open it. We run this method
   * whenever the collapsible nav emits the isButtonOpen event.
   */
  toggleCollapsibleNav(isButtonOpen: boolean): void {
    if (!this.collapsibleNavDirective.isCollapsed) {
      this.closeCollapsibleNav();
    } else {
      // The button is now open and we want to open the nav too
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
    this.renderer.addClass(document.body, 'sprk-u-Overflow--hidden');
    this.renderer.addClass(
      document.body.parentElement,
      'sprk-u-Overflow--hidden',
    );
    this.renderer.addClass(document.body, 'sprk-u-Height--100');
    this.renderer.addClass(document.body.parentElement, 'sprk-u-Height--100');
    // Set the isCollapsed property on the collapsible nav to false to open it
    this.collapsibleNavDirective.isCollapsed = false;
    // Ensure the button styles are set to open
    this.collapsibleNavButtonComponent.isOpen = true;
  }

  /**
   * Removes the styles that were added to
   * the body and HTML elements when the nav was open.
   * Sets the isCollapsed input on the collapsed nav to be true
   * so that the directive adds the collapsed CSS class.
   */
  closeCollapsibleNav(): void {
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
    // Set the isCollapsed property on the collapsible nav to true to close it
    this.collapsibleNavDirective.isCollapsed = true;
    // Ensure the button styles are set to closed
    this.collapsibleNavButtonComponent.isOpen = false;
  }
}
