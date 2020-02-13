import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkHeadingDirective } from './sprk-heading.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <h1 sprkHeading variant="one">Heading One</h1>
    <h2 sprkHeading variant="two">Heading Two</h2>
    <h3 sprkHeading variant="three">Heading Three</h3>
    <h4 sprkHeading variant="four">Heading Four</h4>
    <h5 sprkHeading variant="five">Heading Five</h5>
    <h6 sprkHeading variant="six">Heading Six</h6>
    <h1 sprkHeading variant="seven">Heading Seven</h1>
    <h1 sprkHeading variant="one" isPageTitle="true">Heading One with page title</h1>
  `
})
class TestComponent { }

describe('Spark Heading Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el1: HTMLElement;
  let el2: HTMLElement;
  let el3: HTMLElement;
  let el4: HTMLElement;
  let el5: HTMLElement;
  let el6: HTMLElement;
  let el7: HTMLElement;
  let el8: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkHeadingDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el1 = fixture.nativeElement.querySelector('h1');
    el2 = fixture.nativeElement.querySelector('h2');
    el3 = fixture.nativeElement.querySelector('h3');
    el4 = fixture.nativeElement.querySelector('h4');
    el5 = fixture.nativeElement.querySelector('h5');
    el6 = fixture.nativeElement.querySelector('h6');
    el7 = fixture.nativeElement.querySelectorAll('h1')[1];
    el8 = fixture.nativeElement.querySelectorAll('h1')[2];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the display one class if variant is one', () => {
    expect(el1.classList.contains('sprk-b-TypeDisplayOne')).toBe(true);
  });

  it('should add the display two class if variant is two', () => {
    expect(el2.classList.contains('sprk-b-TypeDisplayTwo')).toBe(true);
  });

  it('should add the display three class if variant is three', () => {
    expect(el3.classList.contains('sprk-b-TypeDisplayThree')).toBe(true);
  });

  it('should add the display four class if variant is four', () => {
    expect(el4.classList.contains('sprk-b-TypeDisplayFour')).toBe(true);
  });

  it('should add the display five class if variant is five', () => {
    expect(el5.classList.contains('sprk-b-TypeDisplayFive')).toBe(true);
  });

  it('should add the display six class if variant is six', () => {
    expect(el6.classList.contains('sprk-b-TypeDisplaySix')).toBe(true);
  });

  it('should add the display seven class if variant is seven', () => {
    expect(el7.classList.contains('sprk-b-TypeDisplaySeven')).toBe(true);
  });

  it('should add the display class and the page title class if isPageTitle is true', () => {
    expect(el8.classList.contains('sprk-b-TypeDisplayOne')).toBe(true);
    expect(el8.classList.contains('sprk-b-PageTitle')).toBe(true);
  });
});
