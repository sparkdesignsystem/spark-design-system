import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTabsButtonDirective } from './sprk-tabs-button.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sprk-test-component',
  template: `
    <button
      analyticsString="Tab 1"
      idString="Tab idString"
      isDefaultActive="true"
      id="123"
      additionalClasses="sprk-u-man"
      sprkTabsButton
    >
      Tab 1
    </button>
  `,
})
class TestComponent {}

describe('Spark Tabs Button Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;
  let directiveElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTabsButtonDirective, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('button');
    directiveElement = fixture.debugElement
      .query(By.directive(SprkTabsButtonDirective))
      .injector.get(SprkTabsButtonDirective) as SprkTabsButtonDirective;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should add role=tab to the element', () => {
    expect(element.getAttribute('role')).toEqual('tab');
  });

  it('should add a value for data-analytics if analyticsString has a value', () => {
    expect(element.getAttribute('data-analytics')).toEqual('Tab 1');
  });

  it('should add a value for data-id if idString has a value', () => {
    expect(element.getAttribute('data-id')).toEqual('Tab idString');
  });

  it('should call custom button click event', (done) => {
    let called = false;
    directiveElement.tabClick.subscribe((g) => {
      called = true;
      done();
    });
    element.click();
    expect(called).toEqual(true);
  });
});
