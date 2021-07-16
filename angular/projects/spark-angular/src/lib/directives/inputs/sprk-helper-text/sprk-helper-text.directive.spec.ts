import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkHelperTextDirective } from './sprk-helper-text.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <span sprkHelperText idString="test-str" analyticsString="test">
      Helper Text
    </span>
  `,
})
class TestComponent {}

describe('Spark Helper Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spanElement1: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkHelperTextDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanElement1 = fixture.nativeElement.querySelectorAll('span')[0];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element', () => {
    expect(spanElement1.classList.contains('sprk-b-HelperText')).toEqual(true);
    expect(spanElement1.classList.length).toEqual(1);
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(spanElement1.getAttribute('data-id')).toEqual('test-str');
  });

  it('should set the data-analytics attribute to the value of analyticsString', () => {
    expect(spanElement1.getAttribute('data-analytics')).toEqual('test');
  });
});
