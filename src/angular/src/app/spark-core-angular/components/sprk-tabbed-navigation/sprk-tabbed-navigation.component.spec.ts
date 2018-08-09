import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';
import { SprkTabbedNavigationPanelDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-panel/sprk-tabbed-navigation-panel.directive';
import { SprkTabbedNavigationTabDirective } from '../../directives/tabbed-navigation/sprk-tabbed-navigation-tab/sprk-tabbed-navigation-tab.directive';

@Component({
  selector: 'test',
  template: `
    <sprk-tabbed-navigation>
      <button sprk-tabbed-navigation-tab>Tab 1</button>
      <div sprk-tabbed-navigation-panel>Tab1 Content</div>
    </sprk-tabbed-navigation>`
})

export class TestComponent {}

fdescribe('SparkTabbedNavigationComponent', () => {
  let component: SparkTabbedNavigationComponent;
  let fixture: ComponentFixture<SparkTabbedNavigationComponent>;
  let element: HTMLElement;

  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;
  let testElement;
  let testTab;
  let testPanel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkTabbedNavigationComponent,
        TestComponent,
        SprkTabbedNavigationPanelDirective,
        SprkTabbedNavigationTabDirective
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;

    fixture = TestBed.createComponent(SparkTabbedNavigationComponent);
    component = fixture.componentInstance;
    component.ngAfterContentInit();
    testFixture.detectChanges();

    element = fixture.nativeElement.querySelector('div');
    testElement = testFixture.nativeElement.querySelector('sprk-tabbed-navigation');

    testTab = testElement.querySelector('.sprk-c-Tabs__button');
    testPanel = testElement.querySelector('.sprk-c-Tabs__content');

  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-c-Tabs sprk-u-man');
  });

  it('should set aria-orientation to the incoming orientation value', () => {
    component.orientation = 'vertical';
    fixture.detectChanges();
    expect(element.getAttribute('aria-orientation')).toEqual('vertical');
  });

  it('should create an id for each tab', () => {
    expect(testTab.id).toContain('tabbed-navigation');
  });

  it('should create an id for each panel', () => {
    expect(testPanel.id).toContain('tabbed-navigation');
  });

  it('should set aria-controls on each tab', () => {
    expect(testTab.getAttribute('aria-controls')).toEqual(testPanel.id);
  });

  it('should set aria-labelledby on each panel', () => {
    expect(testPanel.getAttribute('aria-labelledby')).toEqual(testTab.id);
  });
});
