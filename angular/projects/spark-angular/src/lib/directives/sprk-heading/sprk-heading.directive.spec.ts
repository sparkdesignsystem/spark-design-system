import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkHeadingDirective } from './sprk-heading.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <h1 sprkHeading idString="test" variant="displayOne">Heading One</h1>
    <h2 sprkHeading variant="displayTwo">Heading Two</h2>
    <h3 sprkHeading variant="displayThree">Heading Three</h3>
    <h4 sprkHeading variant="displayFour">Heading Four</h4>
    <h5 sprkHeading variant="displayFive">Heading Five</h5>
    <h6 sprkHeading variant="displaySix">Heading Six</h6>
    <h1 sprkHeading variant="displaySeven">Heading Seven</h1>
    <h1 sprkHeading variant="displayOne" isPageTitle="true">
      Heading One with page title
    </h1>
  `,
})
class TestComponent {}

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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkHeadingDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
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
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct idString value to data-id', () => {
    expect(el1.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should add the display one class if variant is displayOne', () => {
    expect(el1.classList.contains('sprk-b-TypeDisplayOne')).toBe(true);
  });

  it('should add the display two class if variant is displayTwo', () => {
    expect(el2.classList.contains('sprk-b-TypeDisplayTwo')).toBe(true);
  });

  it('should add the display three class if variant is displayThree', () => {
    expect(el3.classList.contains('sprk-b-TypeDisplayThree')).toBe(true);
  });

  it('should add the display four class if variant is displayFour', () => {
    expect(el4.classList.contains('sprk-b-TypeDisplayFour')).toBe(true);
  });

  it('should add the display five class if variant is displayFive', () => {
    expect(el5.classList.contains('sprk-b-TypeDisplayFive')).toBe(true);
  });

  it('should add the display six class if variant is displaySix', () => {
    expect(el6.classList.contains('sprk-b-TypeDisplaySix')).toBe(true);
  });

  it('should add the display seven class if variant is displaySeven', () => {
    expect(el7.classList.contains('sprk-b-TypeDisplaySeven')).toBe(true);
  });

  it('should add the display class and the page title class if isPageTitle is true', () => {
    expect(el8.classList.contains('sprk-b-TypeDisplayOne')).toBe(true);
    expect(el8.classList.contains('sprk-b-PageTitle')).toBe(true);
  });
});
