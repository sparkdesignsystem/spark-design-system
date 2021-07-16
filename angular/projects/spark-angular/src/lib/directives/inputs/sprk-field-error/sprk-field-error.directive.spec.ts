import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFieldErrorDirective } from './sprk-field-error.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <span sprkFieldError idString="test-str" analyticsString="test">
      Error Message
    </span>
  `,
})
class TestComponent {}

describe('Spark Field Error Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spanElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkFieldErrorDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanElement = fixture.nativeElement.querySelector('span');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element', () => {
    expect(spanElement.classList.contains('sprk-b-ErrorContainer')).toEqual(
      true,
    );
    expect(spanElement.classList.length).toEqual(1);
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(spanElement.getAttribute('data-id')).toEqual('test-str');
  });

  it('should set the data-analytics attribute to the value of analyticsString', () => {
    expect(spanElement.getAttribute('data-analytics')).toEqual('test');
  });
});
