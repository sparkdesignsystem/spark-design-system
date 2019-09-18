import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <input sprkInput value='Initial Value'/>
  `
})
class TestComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkInputDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    inputElement = fixture.debugElement.query(By.css('input'));
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the has-floating-label class on change if the input value is not empty', () => {
    inputElement.nativeElement.value = 'Test Value!';
    inputElement.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.classList.contains('sprk-b-Input--has-floating-label')).toEqual(true);
  });

  it('should not add the has-floating-label class on change if the input value is empty', () => {
    inputElement.nativeElement.value = '';
    inputElement.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(inputElement.nativeElement.classList.contains('sprk-b-Input--has-floating-label')).toEqual(false);
  });

  it('should add the has-floating-label class on load if the input value is not empty', () => {
    expect(inputElement.nativeElement.classList.contains('sprk-b-Input--has-floating-label')).toEqual(true);
  });

});
