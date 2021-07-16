import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCenteredColumnDirective } from './sprk-centered-column.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkCenteredColumn idString="asdf" analyticsString="test"></div>
  `,
})
class TestComponent {}

describe('Spark Centered Column Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkCenteredColumnDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element = fixture.nativeElement.querySelectorAll('div')[0];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(element.classList.contains('sprk-o-CenteredColumn')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(element.getAttribute('data-id') === 'asdf').toBe(true);
  });

  it('should add the value of analyticsString to data-analytics', () => {
    expect(element.getAttribute('data-analytics')).toBe('test');
  });
});
