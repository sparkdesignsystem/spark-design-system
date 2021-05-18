import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkMastheadAccordionComponent } from './components/sprk-masthead-accordion/sprk-masthead-accordion.component';
import { SprkMastheadAccordionItemComponent } from './components/sprk-masthead-accordion-item/sprk-masthead-accordion-item.component';
import { SprkMastheadSelectorComponent } from './components/sprk-masthead-selector/sprk-masthead-selector.component';
import { SprkMastheadComponent } from './sprk-masthead.component';
import { SprkMastheadNavCollapsibleDirective } from './directives/sprk-masthead-nav-collapsible/sprk-masthead-nav-collapsible.directive';
import { SprkMastheadContentDirective } from './directives/sprk-masthead-content/sprk-masthead-content.directive';
import { SprkMastheadBrandingDirective } from './directives/sprk-masthead-branding/sprk-masthead-branding.directive';
import { SprkMastheadNavItemsDirective } from './directives/sprk-masthead-nav-items/sprk-masthead-nav-items.directive';
import { SprkMastheadNavItemDirective } from './directives/sprk-masthead-nav-item/sprk-masthead-nav-item.directive';
import { SprkMastheadNavCollapsibleButtonComponent } from './components/sprk-masthead-nav-collapsible-button/sprk-masthead-nav-collapsible-button.component';
import { SprkDropdownComponent } from '../sprk-dropdown/sprk-dropdown.component';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SprkStackItemDirective } from '../../directives/sprk-stack-item/sprk-stack-item.directive';
import { SprkMastheadLinkDirective } from './directives/sprk-masthead-link/sprk-masthead-link.directive';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-masthead>
      <div
        sprkMastheadBranding
        sprkStackItem
        class="sprk-o-Stack__item--center-column@xxs"
      >
        <a sprkLink href="#nogo" variant="unstyled">
          <svg
            class="sprk-c-Masthead__logo"
            xmlns="http://www.w3.org/2000/svg"
            width="365.4"
            height="48"
            viewBox="0 0 365.4 101.35"
          >
            Test
          </svg>
        </a>
      </div>

      <div
        sprkMastheadNavItem
        sprkStackItem
        class="sprk-o-Stack__item--center-column@xxs"
      >
        <a sprkMastheadLink href="#nogo">
          Sign In
        </a>
      </div>

      <nav
        sprkMastheadNavItems
        sprkStackItem
        role="navigation"
        class="sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row"
      >
        <div sprkStackItem class="sprk-o-Stack__item--flex@xxs">
          <sprk-stack
            additionalClasses="sprk-o-Stack--center-column sprk-o-Stack--center-row"
          >
            <div sprkStackItem class="sprk-u-Position--relative">
              <sprk-masthead-selector
                triggerText="Choose One"
                heading="Choose One"
                triggerIconName="chevron-down"
                [choices]="selectorDropdown"
              >
                <div
                  class="sprk-c-Masthead__selector-footer"
                  sprkMastheadSelectorFooter
                >
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact"
                  >
                    Placeholder
                  </a>
                </div>
              </sprk-masthead-selector>
            </div>
          </sprk-stack>
        </div>

        <ul
          sprkStackItem
          class="
            sprk-o-HorizontalList
            sprk-o-HorizontalList--spacing-medium
            sprk-o-Stack--center-column
          "
        >
          <li>
            <a sprkMastheadLink href="#nogo">
              Talk To Us
            </a>
          </li>

          <li>
            <sprk-dropdown
              [choices]="talkToUsDropdownChoices"
              heading="My Account"
              triggerIconName="user"
              triggerAdditionalClasses="sprk-b-Link--plain sprk-c-Masthead__link"
              iconAdditionalClasses="sprk-c-Icon--xl"
              additionalClasses="sprk-u-Right--zero sprk-u-mrm"
              screenReaderText="User Account"
            >
            </sprk-dropdown>
          </li>
        </ul>
      </nav>

      <div sprkStackItem>
        <nav sprkMastheadNavBar sprkStackItem role="navigation" idString="cats">
          <ul
            class="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare"
          >
            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-1"
                href="#nogo"
              >
                Item One
              </a>
            </li>

            <li
              sprkStackItem
              class="sprk-c-Masthead__big-nav-item"
              aria-haspopup="true"
            >
              <sprk-dropdown
                [choices]="item2NavBarDropdownChoices"
                triggerAdditionalClasses="sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                additionalClasses="sprk-u-TextAlign--left"
                triggerIconName="chevron-down"
                analyticsString="cats"
                triggerText="Item Two"
              ></sprk-dropdown>
            </li>

            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-3"
                href="#nogo"
              >
                Item Three
              </a>
            </li>

            <li
              sprkStackItem
              class="sprk-c-Masthead__big-nav-item"
              aria-haspopup="true"
            >
              <sprk-dropdown
                [choices]="item2NavBarDropdownChoices"
                triggerAdditionalClasses="sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                additionalClasses="sprk-u-TextAlign--left"
                triggerIconName="chevron-down"
                analyticsString="cats"
                triggerText="Item Four"
              ></sprk-dropdown>
            </li>

            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-5"
                href="#nogo"
              >
                Item Five
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        sprkMastheadNavCollapsible
        role="navigation"
        idString="collapsible-nav"
      >
        <sprk-masthead-selector
          triggerText="Choose One"
          heading="Choose One"
          triggerIconName="chevron-down"
          [choices]="narrowSelectorDropdown"
          isFlush="true"
        >
          <div
            class="sprk-c-Masthead__selector-footer"
            sprkMastheadSelectorFooter
          >
            <a
              sprkLink
              variant="unstyled"
              analyticsString="cats"
              href="#nogo"
              class="sprk-c-Button sprk-c-Button--secondary"
            >
              Placeholder
            </a>
          </div>
        </sprk-masthead-selector>

        <sprk-masthead-accordion>
          <sprk-masthead-accordion-item heading="Item 1">
            <ul
              class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details"
            >
              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 1
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 2
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 3
                </a>
              </li>
            </ul>
          </sprk-masthead-accordion-item>

          <li
            class="sprk-c-MastheadAccordion__item sprk-c-MastheadAccordion__item--active"
          >
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">Item 2</span>
            </a>
          </li>

          <sprk-masthead-accordion-item heading="Item 3">
            <ul
              class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details"
            >
              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 1
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 2
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Item 3
                </a>
              </li>
            </ul>
          </sprk-masthead-accordion-item>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">Item 4</span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">Item 5</span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                <sprk-icon
                  iconName="landline"
                  additionalClasses="
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-c-Icon--xl
                    sprk-u-mrs
                  "
                ></sprk-icon>
                (555) 555-5555
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                <sprk-icon
                  iconName="call-team-member"
                  additionalClasses="
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-c-Icon--xl
                    sprk-u-mrs
                  "
                ></sprk-icon>
                Talk To Us
              </span>
            </a>
          </li>

          <li class="sprk-c-MastheadAccordion__item">
            <a
              sprkLink
              variant="unstyled"
              class="sprk-c-MastheadAccordion__summary"
              analyticsString="dogs"
            >
              <span class="sprk-c-MastheadAccordion__heading">
                <sprk-icon
                  iconName="settings"
                  additionalClasses="
                    sprk-c-Icon--filled-current-color
                    sprk-c-Icon--stroke-current-color
                    sprk-c-Icon--xl
                    sprk-u-mrs
                  "
                ></sprk-icon>
                Settings
              </span>
            </a>
          </li>

          <sprk-masthead-accordion-item heading="My Account" leadingIcon="user">
            <ul
              class="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details"
            >
              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Change Username
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Change Password
                </a>
              </li>

              <li class="sprk-c-MastheadAccordion__item">
                <a
                  sprkLink
                  variant="unstyled"
                  class="sprk-c-MastheadAccordion__summary"
                  href="#nogo"
                  analyticsString="dogs"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </sprk-masthead-accordion-item>
        </sprk-masthead-accordion>
      </nav>
    </sprk-masthead>
  `,
})
class Test1Component {
  @ViewChild(SprkMastheadComponent, {
    static: false,
  })
  masthead: SprkMastheadComponent;
}

@Component({
  selector: 'sprk-test-2',
  template: `
    <sprk-masthead>
      <div
        sprkMastheadBranding
        sprkStackItem
        class="sprk-o-Stack__item--center-column@xxs"
      >
        <a sprkLink href="#nogo" variant="unstyled">
          <svg
            class="sprk-c-Masthead__logo"
            xmlns="http://www.w3.org/2000/svg"
            width="365.4"
            height="48"
            viewBox="0 0 365.4 101.35"
          >
            Test
          </svg>
        </a>
      </div>

      <div
        sprkMastheadNavItem
        sprkStackItem
        class="sprk-o-Stack__item--center-column@xxs"
      >
        <a sprkMastheadLink href="#nogo">
          Sign In
        </a>
      </div>

      <nav
        sprkMastheadNavItems
        sprkStackItem
        role="navigation"
        class="sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row"
      >
        <div sprkStackItem class="sprk-o-Stack__item--flex@xxs">
          <sprk-stack
            additionalClasses="sprk-o-Stack--center-column sprk-o-Stack--center-row"
          >
            <div sprkStackItem class="sprk-u-Position--relative">
              <sprk-masthead-selector
                triggerText="Choose One"
                heading="Choose One"
                triggerIconName="chevron-down"
                [choices]="selectorDropdown"
              >
                <div
                  class="sprk-c-Masthead__selector-footer"
                  sprkMastheadSelectorFooter
                >
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact"
                  >
                    Placeholder
                  </a>
                </div>
              </sprk-masthead-selector>
            </div>
          </sprk-stack>
        </div>

        <ul
          sprkStackItem
          class="
            sprk-o-HorizontalList
            sprk-o-HorizontalList--spacing-medium
            sprk-o-Stack--center-column
          "
        >
          <li>
            <a sprkMastheadLink href="#nogo">
              Talk To Us
            </a>
          </li>

          <li>
            <sprk-dropdown
              [choices]="talkToUsDropdownChoices"
              heading="My Account"
              triggerIconName="user"
              triggerAdditionalClasses="sprk-b-Link--plain sprk-c-Masthead__link"
              iconAdditionalClasses="sprk-c-Icon--xl"
              additionalClasses="sprk-u-Right--zero sprk-u-mrm"
              screenReaderText="User Account"
            >
            </sprk-dropdown>
          </li>
        </ul>
      </nav>

      <div sprkStackItem>
        <nav sprkMastheadNavBar sprkStackItem role="navigation" idString="cats">
          <ul
            class="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare"
          >
            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-1"
                href="#nogo"
              >
                Item One
              </a>
            </li>

            <li
              sprkStackItem
              class="sprk-c-Masthead__big-nav-item"
              aria-haspopup="true"
            >
              <sprk-dropdown
                [choices]="item2NavBarDropdownChoices"
                triggerAdditionalClasses="sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                additionalClasses="sprk-u-TextAlign--left"
                triggerIconName="chevron-down"
                analyticsString="cats"
                triggerText="Item Two"
              ></sprk-dropdown>
            </li>

            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-3"
                href="#nogo"
              >
                Item Three
              </a>
            </li>

            <li
              sprkStackItem
              class="sprk-c-Masthead__big-nav-item"
              aria-haspopup="true"
            >
              <sprk-dropdown
                [choices]="item2NavBarDropdownChoices"
                triggerAdditionalClasses="sprk-b-Link--simple sprk-c-Masthead__link sprk-c-Masthead__link--big-nav"
                additionalClasses="sprk-u-TextAlign--left"
                triggerIconName="chevron-down"
                analyticsString="cats"
                triggerText="Item Four"
              ></sprk-dropdown>
            </li>

            <li sprkStackItem class="sprk-c-Masthead__big-nav-item">
              <a
                sprkMastheadLink
                variant="navBar"
                analyticsString="nav-bar-item-5"
                href="#nogo"
              >
                Item Five
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </sprk-masthead>
  `,
})
class Test2Component {
  @ViewChild(SprkMastheadComponent, {
    static: false,
  })
  masthead: SprkMastheadComponent;
}

describe('SprkMastheadComponent', () => {
  let component: Test1Component;
  let componentFixture: ComponentFixture<Test1Component>;
  let componentElement: HTMLElement;
  let collapsibleNavButton: HTMLElement;
  let collapsibleNavEl: HTMLElement;

  let componentNoCollapsibleNav: Test1Component;
  let componentFixtureNoCollapsibleNav: ComponentFixture<Test2Component>;
  let componentElementNoCollapsibleNav: HTMLElement;
  let collapsibleNavButtonNoCollapsibleNav: HTMLElement;
  let collapsibleNavElNoCollapsibleNav: HTMLElement;
  let eventsSub = new ReplaySubject<RouterEvent>(1);
  const routerStub = {
    events: eventsSub,
    url: '/test',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: Router, useValue: routerStub }],
      declarations: [
        SprkMastheadComponent,
        SprkIconComponent,
        SprkLinkDirective,
        SprkDropdownComponent,
        SprkMastheadAccordionComponent,
        SprkMastheadAccordionItemComponent,
        SprkMastheadSelectorComponent,
        SprkStackComponent,
        Test1Component,
        Test2Component,
        SprkStackItemDirective,
        SprkMastheadContentDirective,
        SprkMastheadNavItemsDirective,
        SprkMastheadNavItemDirective,
        SprkMastheadLinkDirective,
        SprkMastheadNavCollapsibleDirective,
        SprkMastheadNavCollapsibleButtonComponent,
        SprkMastheadBrandingDirective,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Test1Component);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
    componentElement = componentFixture.nativeElement.querySelector(
      '.sprk-c-Masthead',
    );
    collapsibleNavEl = componentFixture.nativeElement.querySelector(
      '.sprk-c-Masthead__nav-collapsible',
    );
    collapsibleNavButton = componentFixture.debugElement.nativeElement.querySelector(
      'button',
    );

    componentFixtureNoCollapsibleNav = TestBed.createComponent(Test2Component);
    componentNoCollapsibleNav =
      componentFixtureNoCollapsibleNav.componentInstance;
    componentFixtureNoCollapsibleNav.detectChanges();
    componentElementNoCollapsibleNav = componentFixtureNoCollapsibleNav.nativeElement.querySelector(
      '.sprk-c-Masthead',
    );
    collapsibleNavElNoCollapsibleNav = componentFixtureNoCollapsibleNav.nativeElement.querySelector(
      '.sprk-c-Masthead__nav-collapsible',
    );
    collapsibleNavButtonNoCollapsibleNav = componentFixtureNoCollapsibleNav.debugElement.nativeElement.querySelector(
      'button',
    );
  });

  afterEach(() => {
    component.masthead.currentScrollDirection = 'up';
    component.masthead.isMastheadHidden = false;
    component.masthead.isPageScrolled = false;
    component.masthead.isNarrowViewport = false;
    component.masthead.isNarrowViewportOnResize = false;
    window.document.body.style.minHeight = '800px';
    window.document.body.style.minWidth = '1024px';
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.masthead.additionalClasses = 'sprk-u-man';
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-u-man',
    );
  });

  it('should show the menu icon if a collapsible nav is present', () => {
    expect(collapsibleNavButton).toBeTruthy();
  });

  it('should not show the menu icon if there is no collapsible nav', () => {
    expect(collapsibleNavButtonNoCollapsibleNav).toBeNull();
    expect(collapsibleNavElNoCollapsibleNav).toBeNull();
  });

  it('should pass the collapsible nav ID to the collapsible nav button component aria-controls attribute', () => {
    const buttonId = collapsibleNavButton.getAttribute('aria-controls');
    const navId = collapsibleNavEl.id;
    expect(buttonId).toEqual(navId);
  });

  it('should set the collapsible nav isCollapsed prop to false when button is clicked and was closed before clicked', () => {
    // expect the collapsible nav to be closed at first with having the is-collapsed class
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    // click the collapsible nav button which runs the open method
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // child directive isCollapsed should now be false, which opens the collapsbile nav
    expect(component.masthead.collapsibleNavDirective.isCollapsed).toBe(false);
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
  });

  it('should close the collapsible nav when the collapsible nav button is clicked and was open before clicked', () => {
    // click the collapsible nav button which runs the open method
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // expect the collapsible nav to be open at first without having the is-collapsed class
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
    // click the collapsible nav button which runs the close method
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // child directive isCollapsed should now be true, which close the collapsbile nav
    expect(component.masthead.collapsibleNavDirective.isCollapsed).toBe(true);
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
  });

  it(`
      should add the aria-expanded attribute to collapsbile nav button and
      show the collapsible nav when the icon is clicked
    `, () => {
    expect(collapsibleNavButton.getAttribute('aria-expanded')).toEqual('false');
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    expect(collapsibleNavButton.getAttribute('aria-expanded')).toEqual('true');
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
  });

  it('should add a class to body and show the collapsible nav when the collapsible button is clicked', () => {
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      true,
    );
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      false,
    );
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
  });

  it('should remove class from body and hide the collapsible nav when the collapsible nav is closed', () => {
    // Open it
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // Should be open now
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
    expect(document.body.classList.toString()).toEqual(
      'sprk-u-Overflow--hidden sprk-u-Height--100',
    );
    expect(document.documentElement.classList.toString()).toEqual(
      'sprk-u-Overflow--hidden sprk-u-Height--100',
    );
    // We click to close it
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // Classes on the body and HTML should be removed
    expect(document.body.classList.toString()).toEqual('');
    expect(document.documentElement.classList.toString()).toEqual('');
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
  });

  it('should close the collapsible nav on orientationchange', () => {
    // Should be closed first
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    // Set it to open
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // we expect it to be open
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
    // We expect the overflow class to be added to the body tag
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      true,
    );
    // Fire the event on the window
    window.dispatchEvent(new Event('orientationchange'));
    componentFixture.detectChanges();
    // We expect the component to detect the event and close the collapsible nav
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    // We expect the class that was added to the body to be removed
    expect(document.body.classList.contains('sprk-u-Overflow--hidden')).toEqual(
      false,
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.masthead.idString = testString;
    componentFixture.detectChanges();
    expect(componentElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.masthead.idString = null;
    componentFixture.detectChanges();
    expect(componentElement.getAttribute('data-id')).toBeNull();
  });

  it('should add the scroll class when state isPageScrolled is true', () => {
    component.masthead.isPageScrolled = true;
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-c-Masthead--is-scrolled',
    );
  });

  it('should remove the scroll class when state isPageScrolled is false', () => {
    component.masthead.isPageScrolled = false;
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack',
    );
  });

  it("should not add the scrolled class if they don't scroll past 10 in the scrollY position", () => {
    Object.defineProperty(window, 'scrollY', { value: 9, writable: true });
    window.dispatchEvent(new Event('scroll'));
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-c-Masthead--is-hidden',
    );
  });

  it('should add the scrolled class if they scroll past 10 in the scrollY position', () => {
    Object.defineProperty(window, 'scrollY', { value: 11, writable: true });
    window.dispatchEvent(new Event('scroll'));
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-c-Masthead--is-scrolled sprk-c-Masthead--is-hidden',
    );
  });

  it('should not add the scrolled class if the scroll position is less than 0', () => {
    Object.defineProperty(window, 'scrollY', { value: -1, writable: true });
    window.dispatchEvent(new Event('scroll'));
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack',
    );
  });

  it('should add the hidden class when state isPageScrolled is true and isMastheadHidden is true and on small viewports', () => {
    component.masthead.isMastheadHidden = true;
    component.masthead.isPageScrolled = true;
    window.document.body.style.minWidth = '320px';
    componentFixture.detectChanges();
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-c-Masthead--is-scrolled sprk-c-Masthead--is-hidden',
    );
  });

  it('should not add the hidden class when state isPageScrolled is true and isMastheadHidden is false and on small viewports', () => {
    component.masthead.isMastheadHidden = false;
    component.masthead.isPageScrolled = true;
    componentFixture.detectChanges();
    window.document.body.style.minWidth = '320px';
    expect(componentElement.classList.toString()).toEqual(
      'sprk-c-Masthead sprk-o-Stack sprk-c-Masthead--is-scrolled',
    );
  });

  it('should update state isMastheadHidden to true when currentScrollDirection is equal to down', () => {
    // Expect masthead to be shown originally
    expect(component.masthead.isMastheadHidden).toBe(false);
    // Scroll down the page
    const scrollEvent = document.createEvent('CustomEvent');
    scrollEvent.initCustomEvent('scroll', false, false, null);
    Object.defineProperty(window, 'scrollY', { value: 456, writable: true });
    window.dispatchEvent(scrollEvent);
    componentFixture.detectChanges();
    expect(component.masthead.currentScrollDirection).toBe('down');
    expect(component.masthead.isMastheadHidden).toBe(true);
  });

  it('should call throttledUpdateLayoutState on resize', () => {
    const spyOnResize = jest.spyOn(
      component.masthead,
      'throttledUpdateLayoutState',
    );
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should have isPageScrolled as false upon load', () => {
    expect(component.masthead.isPageScrolled).toBe(false);
  });

  it('should have isMastheadHidden as false upon load', () => {
    expect(component.masthead.isMastheadHidden).toBe(false);
  });

  it('should have isNarrowViewportOnResize as false upon load', () => {
    expect(component.masthead.isNarrowViewportOnResize).toBe(false);
  });

  it('should have currentScrollDirection as "up" upon load', () => {
    expect(component.masthead.currentScrollDirection).toBe('up');
  });

  it('should have currentScrollDirection as 0 upon load', () => {
    expect(component.masthead.currentScrollPosition).toBe(0);
  });

  it('should close the open collapsible nav when user goes to a new page', () => {
    // We expect it to be closed and have the collapsed CSS class
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
    expect(component.masthead.collapsibleNavDirective.isCollapsed).toBe(true);
    // We open the collapsible nav
    collapsibleNavButton.click();
    componentFixture.detectChanges();
    // We expect it to be open and not have the collapsed CSS class
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible',
    );
    expect(component.masthead.collapsibleNavDirective.isCollapsed).toBe(false);
    // We use the router to navigate the page and fire the navigation end event
    const navigate = new NavigationEnd(1, 'old-route', 'new-route');
    eventsSub.next(navigate);
    componentFixture.detectChanges();
    // We expect the collapsible nav to be collapsed since we are on a new page
    expect(collapsibleNavEl.classList.toString()).toEqual(
      'sprk-c-Masthead__nav-collapsible sprk-c-Masthead__nav-collapsible--is-collapsed',
    );
  });
});
