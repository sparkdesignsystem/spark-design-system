import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'sprk-test',
  template: `
  <input
    additionalClasses="sprk-u-man"
    sprkInput>`
})
class TestComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLElement;

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

  it('should add classes if additionalClasses has a value', () => {
    fixture.detectChanges();
    expect(inputElement.classList.toString()).toEqual(
      'sprk-b-TextInput sprk-u-Width-100 sprk-u-man'
    );
  });
});
