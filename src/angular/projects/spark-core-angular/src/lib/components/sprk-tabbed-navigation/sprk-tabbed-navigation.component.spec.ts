import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';
import { SparkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-tabbed-navigation>
      <button sprkTabbedNavigationTab>Tab 1</button>
      <button sprkTabbedNavigationTab [defaultActive]="true">Tab 2</button>
      <div sprkTabbedNavigationPanel>Tab1 Content</div>
      <div sprkTabbedNavigationPanel [defaultActive]="true">Tab2 Content</div>
    </sprk-tabbed-navigation>
  `
})
export class TestComponent {}

describe('SparkTabbedNavigationComponent', () => {
  let component: SparkTabbedNavigationComponent;
  let fixture: ComponentFixture<SparkTabbedNavigationComponent>;
  let element: HTMLElement;

  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;
  let testElement;
  let testTab1;
  let testTab2;
  let testPanel1;
  let testPanel2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkTabbedNavigationComponent,
        TestComponent,
        SprkTabbedNavigationPanelDirective,
        SprkTabbedNavigationTabDirective
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;

    fixture = TestBed.createComponent(SparkTabbedNavigationComponent);
    component = fixture.componentInstance;
    component.ngAfterContentInit();
    testFixture.detectChanges();

    element = fixture.nativeElement.querySelector('div');
    testElement = testFixture.nativeElement.querySelector(
      'sprk-tabbed-navigation'
    );

    testTab1 = testElement.querySelectorAll('.sprk-c-Tabs__button')[0];
    testTab2 = testElement.querySelectorAll('.sprk-c-Tabs__button')[1];
    testPanel1 = testElement.querySelectorAll('.sprk-c-Tabs__content')[0];
    testPanel2 = testElement.querySelectorAll('.sprk-c-Tabs__content')[1];
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
    expect(testTab1.id).not.toEqual(testTab2.id);
  });

  it('should create an id for each panel', () => {
    expect(testPanel1.id).toContain('tabbed-navigation');
    expect(testPanel2.id).toContain('tabbed-navigation');
    expect(testPanel1.id).not.toEqual(testPanel2.id);
  });

  it('should set aria-controls on each tab', () => {
    expect(testTab1.getAttribute('aria-controls')).toEqual(testPanel1.id);
    expect(testTab2.getAttribute('aria-controls')).toEqual(testPanel2.id);
  });

  it('should set aria-labelledby on each panel', () => {
    expect(testPanel1.getAttribute('aria-labelledby')).toEqual(testTab1.id);
    expect(testPanel2.getAttribute('aria-labelledby')).toEqual(testTab2.id);
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

  it('resizing should set the aria-orientation correctly', () => {
    window.dispatchEvent(new Event('resize'));
    expect(testElement.hasAttribute('aria-orientation')).toEqual(true);
  });

  it('the right arrow key should advance the tab', () => {
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown');
    event['keyCode'] = 39;
    testElement.dispatchEvent(event);
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the left arrow key should retreat the tab', () => {
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown');
    event['keyCode'] = 37;
    testElement.dispatchEvent(event);
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the home key should bring active to the first tab', () => {
    testTab2.click();
    expect(testTab1.getAttribute('aria-selected')).toEqual('false');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(true);
    const event: Event = new Event('keydown');
    event['keyCode'] = 36;
    testElement.dispatchEvent(event);
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('the end key should bring active to the last tab', () => {
    testTab1.click();
    expect(testTab1.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel1.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
    const event: Event = new Event('keydown');
    event['keyCode'] = 35;
    testElement.dispatchEvent(event);
    expect(testTab2.getAttribute('aria-selected')).toEqual('true');
    expect(testPanel2.classList.contains('sprk-u-HideWhenJs')).toEqual(false);
  });

  it('should move focus into the active panel when tab is pressed and the target is a button', () => {
    testTab2.click();
    spyOn(testPanel2, 'focus');
    const event: Event = new Event('keydown');
    event['keyCode'] = 9;
    testElement.classList.add('sprk-c-Tabs__button');
    testElement.setAttribute('role', 'tab');
    testElement.dispatchEvent(event);
    expect(testPanel2.focus).toHaveBeenCalled();
  });

  it('should not focus into the active panel when tab is pressed and the target is not a button', () => {
    testTab2.click();
    spyOn(testPanel2, 'focus');
    const event: Event = new Event('keydown');
    event['keyCode'] = 9;
    testElement.dispatchEvent(event);
    expect(testPanel2.focus).not.toHaveBeenCalled();
  });

  it('should do nothing if an unexpected key is pressed', () => {
    testTab2.click();
    spyOn(testPanel2, 'focus');
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
});
