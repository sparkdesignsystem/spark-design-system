import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkHelperTextDirective } from './sprk-helper-text.directive';

@Component({
  selector: 'test',
  template: `
  <span 
    additionalClasses="sprk-u-man"
    sprk-helper-text>Helper Text</span>`
})
class TestComponent {}

describe('Spark Helper Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let spanElement: HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ SprkHelperTextDirective, TestComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spanElement = fixture.nativeElement.querySelector('span');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    fixture.detectChanges();
    expect(spanElement.classList.toString()).toEqual('sprk-b-HelperText sprk-u-man');
  });
});
