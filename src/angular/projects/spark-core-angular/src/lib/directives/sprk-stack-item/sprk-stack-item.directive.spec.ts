import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkStackItemDirective } from './sprk-stack-item.directive';

@Component({
  selector: 'sprk-test',
  template: `
  <div
    additionalClasses="sprk-u-man"
  sprkStackItem></div>
  <div
  sprkStackItem></div>`
})
class TestComponent {}

describe('Spark Stack Item Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let item1Element: HTMLElement;
  let item2Element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkStackItemDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    item1Element = fixture.nativeElement.querySelectorAll('div')[0];
    item2Element = fixture.nativeElement.querySelectorAll('div')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    fixture.detectChanges();
    expect(item1Element.classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-u-man'
    );
  });

  it('should not add classes if additionalClasses has no value', () => {
    fixture.detectChanges();
    expect(item2Element.classList.toString()).toEqual('sprk-o-Stack__item');
  });
});
