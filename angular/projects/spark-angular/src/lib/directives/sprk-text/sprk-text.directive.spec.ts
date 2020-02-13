import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTextDirective } from './sprk-text.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <p sprkText variant="one">Text One</p>
    <h1 sprkText variant="two">Text Two</h1>
    <cite sprkText variant="three">Text Three</cite>
    <small sprkText variant="four">Text Four</small>
  `
})
class TestComponent { }

describe('Spark Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el1: HTMLElement;
  let el2: HTMLElement;
  let el3: HTMLElement;
  let el4: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTextDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el1 = fixture.nativeElement.querySelector('p');
    el2 = fixture.nativeElement.querySelector('h1');
    el3 = fixture.nativeElement.querySelector('cite');
    el4 = fixture.nativeElement.querySelector('small');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the display one class if variant is one', () => {
    expect(el1.classList.contains('sprk-b-TypeBodyOne')).toBe(true);
  });

  it('should add the display two class if variant is two', () => {
    expect(el2.classList.contains('sprk-b-TypeBodyTwo')).toBe(true);
  });

  it('should add the display three class if variant is three', () => {
    expect(el3.classList.contains('sprk-b-TypeBodyThree')).toBe(true);
  });

  it('should add the display four class if variant is four', () => {
    expect(el4.classList.contains('sprk-b-TypeBodyFour')).toBe(true);
  });
});
