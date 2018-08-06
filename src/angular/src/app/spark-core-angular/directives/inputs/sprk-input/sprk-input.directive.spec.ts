import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkInputDirective } from './sprk-input.directive';

@Component({
  selector: 'test',
  template: `
  <input 
    additionalClasses="sprk-u-man"
    sprk-input>`
})
class TestComponent {}

@Component({
  selector: 'test-select',
  template: `
  <select
    additionalClasses="sprk-u-man"
    sprk-input></select>`
})
class TestSelectComponent {}

describe('Spark Input Directive', () => {
  let component: TestComponent;
  let selectComponent: TestSelectComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectFixture: ComponentFixture<TestSelectComponent>;
  let inputElement: HTMLElement;
  let selectElement: HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ SprkInputDirective, TestComponent, TestSelectComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    selectFixture = TestBed.createComponent(TestSelectComponent);
    selectComponent = selectFixture.componentInstance;

    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');

    selectElement = selectFixture.nativeElement.querySelector('select');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    fixture.detectChanges();
    expect(inputElement.classList.toString()).toEqual('sprk-b-TextInput sprk-u-Width-100 sprk-u-man');
  });

  it('should add the correct class if a select element is used', () => {
    selectFixture.detectChanges();
    expect(selectElement.classList.toString()).toEqual('sprk-b-Select sprk-u-man');

  });
});
