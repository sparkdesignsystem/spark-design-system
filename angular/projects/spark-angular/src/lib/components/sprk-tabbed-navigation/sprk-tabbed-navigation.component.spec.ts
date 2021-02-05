import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';
import { SprkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-tabbed-navigation>
      <button sprkTabbedNavigationTab>Tab 1</button>
      <button sprkTabbedNavigationTab [defaultActive]="true">Tab 2</button>
      <button sprkTabbedNavigationTab>Tab 3</button>
      <div sprkTabbedNavigationPanel>Tab1 Content</div>
      <div sprkTabbedNavigationPanel [defaultActive]="true">Tab2 Content</div>
      <div sprkTabbedNavigationPanel>Tab3 Content</div>
    </sprk-tabbed-navigation>
  `,
})
class TestComponent {}

@Component({
  selector: 'sprk-dynamic-test',
  template: `
    <div>
      <button class="changeButton" (click)="changeMe()">Change Content</button>
      <sprk-tabbed-navigation idString="tabs-1">
        <button
          *ngFor="let item of list; let i = index"
          sprkTabbedNavigationTab
          analyticsString="Tab: {{ i }}"
        >
          {{ item }}
        </button>
        <div sprkTabbedNavigationPanel *ngFor="let item of list; let i = index">
          <p>{{ item }}</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `,
})
class DynamicComponent {
  public list = ['Tab 33', 'Tab 2'];
  public newList = ['Tab 3'];
  changeMe(): void {
    this.list = this.newList;
  }
}

describe('SprkTabbedNavigationComponent', () => {
  let component: SprkTabbedNavigationComponent;
  let fixture: ComponentFixture<SprkTabbedNavigationComponent>;
  let element: HTMLElement;

  let dynamicTestComponent;
  let dynamicTestFixture;

  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;
  let testElement;
  let testTab1;
  let testTab2;
  let testTab3;
  let testPanel1;
  let testPanel2;
  let testPanel3;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkTabbedNavigationComponent,
        TestComponent,
        DynamicComponent,
        SprkTabbedNavigationPanelDirective,
        SprkTabbedNavigationTabDirective,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;

    fixture = TestBed.createComponent(SprkTabbedNavigationComponent);
    component = fixture.componentInstance;
    testFixture.detectChanges();

    element = fixture.nativeElement.querySelector('div');
    testElement = testFixture.nativeElement.querySelector(
      'sprk-tabbed-navigation',
    );

    testTab1 = testElement.querySelectorAll('.sprk-c-Tabs__button')[0];
    testTab2 = testElement.querySelectorAll('.sprk-c-Tabs__button')[1];
    testTab3 = testElement.querySelectorAll('.sprk-c-Tabs__button')[2];
    testPanel1 = testElement.querySelectorAll('.sprk-c-Tabs__content')[0];
    testPanel2 = testElement.querySelectorAll('.sprk-c-Tabs__content')[1];
    testPanel3 = testElement.querySelectorAll('.sprk-c-Tabs__content')[2];

    // Dynamic Test Component
    dynamicTestFixture = TestBed.createComponent(DynamicComponent);
    dynamicTestComponent = dynamicTestFixture.componentInstance;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-c-Tabs sprk-u-man');
  });

  it('should create an id for each tab', () => {
    expect(testTab1.id).toContain('tabbed-navigation');
    expect(testTab2.id).toContain('tabbed-navigation');
    expect(testTab3.id).toContain('tabbed-navigation');
    expect(testTab1.id).not.toEqual(testTab2.id);
  });

  it('should create an id for each panel', () => {
    expect(testPanel1.id).toContain('tabbed-navigation');
    expect(testPanel2.id).toContain('tabbed-navigation');
    expect(testPanel3.id).toContain('tabbed-navigation');
    expect(testPanel1.id).not.toEqual(testPanel2.id);
  });

  it('should set aria-controls on each tab', () => {
    expect(testTab1.getAttribute('aria-controls')).toEqual(testPanel1.id);
    expect(testTab2.getAttribute('aria-controls')).toEqual(testPanel2.id);
    expect(testTab3.getAttribute('aria-controls')).toEqual(testPanel3.id);
  });

  it('should set aria-labelledby on each panel', () => {
    expect(testPanel1.getAttribute('aria-labelledby')).toEqual(testTab1.id);
    expect(testPanel2.getAttribute('aria-labelledby')).toEqual(testTab2.id);
    expect(testPanel3.getAttribute('aria-labelledby')).toEqual(testTab3.id);
  });

  it('should change which tab / panel is active if a non-active tab is clicked', () => {
    testTab1.click();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('clicking the panel should do nothing to the active state', () => {
    expect(testTab2.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel2.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
    testPanel1.click();
    expect(testTab2.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel2.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('resizing should set the aria-orientation correctly when window is >= 736', () => {
    component.ariaOrientation(800, testElement);
    expect(testElement.getAttribute('aria-orientation')).toEqual('horizontal');
  });

  it('resizing should set the aria-orientation correctly when <= 736', () => {
    component.ariaOrientation(700, testElement);
    expect(testElement.getAttribute('aria-orientation')).toEqual('vertical');
  });

  it('resizing should set the aria-orientation correctly', () => {
    jest.spyOn(component, 'ariaOrientation').mockImplementation(() => {});
    window.dispatchEvent(new Event('resize'));
    expect(component.ariaOrientation).toHaveBeenCalled();
  });

  it('should move focus into the active panel when tab is pressed and the target is a button', () => {
    testTab2.click();
    jest.spyOn(testPanel2, 'focus').mockImplementation(() => {});
    const event: Event = new Event('keydown');
    event['keyCode'] = 9;
    testElement.classList.add('sprk-c-Tabs__button');
    testElement.setAttribute('role', 'tab');
    testElement.dispatchEvent(event);
    expect(testPanel2.focus).toHaveBeenCalled();
  });

  it('should return null if tab does not contain active class', () => {
    const test = component.getActiveTabIndex(
      [document.createElement('div')],
      'hello',
    );
    expect(test).toBe(null);
  });

  it('should move focus into the active panel when tab is pressed and the target is not role=tab', () => {
    testTab2.click();
    jest.spyOn(testPanel2, 'focus').mockImplementation(() => {});
    const event: Event = new Event('keydown');
    event['keyCode'] = 9;
    testElement.classList.add('sprk-c-Tabs__button');
    testElement.setAttribute('role', 'test');
    testElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(testPanel2.focus).toBeCalledTimes(0);
  });

  it('should not focus into the active panel when tab is pressed and the target is not a button', () => {
    testTab2.click();
    jest.spyOn(testPanel2, 'focus').mockImplementation(() => {});
    const event: Event = new Event('keydown');
    event['keyCode'] = 9;
    testElement.dispatchEvent(event);
    expect(testPanel2.focus).not.toHaveBeenCalled();
  });

  it('should do nothing if an unexpected key is pressed', () => {
    testTab2.click();
    jest.spyOn(testPanel2, 'focus').mockImplementation(() => {});
    const event: Event = new Event('keydown');
    event['keyCode'] = 8;
    testElement.dispatchEvent(event);
    expect(testPanel2.focus).not.toHaveBeenCalled();
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });

  it('the right arrow key should do nothing if all tabs to the right are disabled', () => {
    testTab1.click();
    fixture.detectChanges();
    testTab2.setAttribute('disabled', 'true');
    testTab3.setAttribute('disabled', 'true');

    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 39;
    testTab1.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
  });

  it('the left arrow key should do nothing if all tabs to the left are disabled', () => {
    testTab3.click();
    fixture.detectChanges();
    testTab1.setAttribute('disabled', 'true');
    testTab2.setAttribute('disabled', 'true');
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 37;
    testTab3.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('true');
  });

  it('the right arrow key should advance the tab', () => {
    testTab2.click();
    fixture.detectChanges();
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel3.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 39;
    fixture.detectChanges();
    testTab2.dispatchEvent(event);
    expect(testTab3.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel3.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the left arrow key should retreat the tab', () => {
    testTab2.click();
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 37;
    fixture.detectChanges();
    testTab2.dispatchEvent(event);
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the home key should bring active to the first tab', () => {
    testTab2.click();
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 36;
    testTab2.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the end key should bring active to the last tab', () => {
    testTab1.click();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 35;
    testTab1.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab3.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel3.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('should ignore key events that are not in the list of events', () => {
    jest.spyOn(component, 'goToEndTab').mockImplementation(() => {});
    jest.spyOn(component, 'incrementTab').mockImplementation(() => {});
    testTab1.click();
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 10;
    testElement.dispatchEvent(event);
    expect(component.incrementTab).toBeCalledTimes(0);
    expect(component.goToEndTab).toBeCalledTimes(0);
  });

  it('the right arrow key should skip disabled tabs', () => {
    testTab1.click();
    testTab2.setAttribute('disabled', 'true');
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 39;
    testTab1.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('true');
  });

  it('the left arrow key should skip disabled tabs', () => {
    testTab3.click();
    testTab2.setAttribute('disabled', 'true');
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 37;
    testTab3.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
  });

  it('the right arrow key should loop back to the beginning if the right-most tab is selected', () => {
    testTab3.click();
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 39;
    testTab3.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
  });

  it('the left arrow key should loop back to the end if the left-most tab is selected', () => {
    testTab1.click();
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 37;
    testTab1.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testTab2.getAttribute('aria-selected')).toEqual('false');
    expect(testTab3.getAttribute('aria-selected')).toEqual('true');
  });

  it('the home key should pay attention to disabled tabs', () => {
    testTab3.click();
    testTab1.setAttribute('disabled', 'true');
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 36;
    testTab3.dispatchEvent(event);
    fixture.detectChanges();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testTab2.getAttribute('aria-selected')).toEqual('true');
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
  });

  it('the end key should pay attention to disabled tabs', () => {
    testTab1.click();
    testTab3.setAttribute('disabled', 'true');
    fixture.detectChanges();
    const event: Event = new Event('keydown', { bubbles: true });
    event['keyCode'] = 35;
    testTab1.dispatchEvent(event);
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testTab2.getAttribute('aria-selected')).toEqual('true');
    expect(testTab3.getAttribute('aria-selected')).toEqual('false');
  });

  it('should assign relationships on subscribed content change', () => {
    dynamicTestFixture.detectChanges();
    const dynamicTestElement = dynamicTestFixture.nativeElement;
    const changeButton = dynamicTestElement.querySelector('.changeButton');

    changeButton.click();
    dynamicTestFixture.detectChanges();

    const dynamicTab1 = dynamicTestElement.querySelectorAll(
      '.sprk-c-Tabs__button',
    )[0];
    const dynamicPanel1 = dynamicTestElement.querySelectorAll(
      '.sprk-c-Tabs__content',
    )[0];

    expect(dynamicPanel1.getAttribute('aria-labelledby')).toEqual(
      dynamicTab1.id,
    );
    expect(dynamicTab1.getAttribute('aria-controls')).toEqual(dynamicPanel1.id);
  });
});
