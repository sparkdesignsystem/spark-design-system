import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
  <input sprkInput>`
})
class TestComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkInputDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class to the element when focusin is triggered', () => {
    inputElement.dispatchEvent(new Event('focusin'));
    expect(inputElement.classList.contains('sprk-b-TextInput--focusin')).toBe(
      true
    );
  });

  it('should add a class to the element when focusout is triggered', () => {
    inputElement.dispatchEvent(new Event('focusout'));
    expect(inputElement.classList.contains('sprk-b-TextInput--focusout')).toBe(
      true
    );
  });

  it('should add a class to the element when input is triggered and has a value', () => {
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    expect(inputElement.classList.contains('sprk-b-TextInput--has-value')).toBe(
      true
    );
  });

  it('should add a class to the element when input is triggered and has no value', () => {
    inputElement.dispatchEvent(new Event('input'));
    expect(inputElement.classList.contains('sprk-b-TextInput--has-value')).toBe(
      false
    );
  });
});
