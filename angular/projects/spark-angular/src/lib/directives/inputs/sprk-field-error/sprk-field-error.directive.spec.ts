import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFieldErrorDirective } from './sprk-field-error.directive';

@Component({
  selector: 'sprk-test',
  template: ` <span sprkFieldError>Error Message</span> `,
})
class TestComponent {}

describe('Spark Field Error Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spanElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFieldErrorDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanElement = fixture.nativeElement.querySelector('span');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element', () => {
    expect(spanElement.classList.contains('sprk-b-ErrorContainer')).toEqual(
      true,
    );
  });
});
