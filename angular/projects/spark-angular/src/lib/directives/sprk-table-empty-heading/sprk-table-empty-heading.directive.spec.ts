import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableEmptyHeadingDirective } from './sprk-table-empty-heading.directive';

@Component({
  selector: 'sprk-test-component',
  template: `
    <th additionalClasses="sprk-u-man" sprkTableEmptyHeading></th>
    <th sprkTableEmptyHeading></th>
  `,
})
class TestComponent {}

describe('SprkTableEmptyHeadingDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element1: HTMLElement;
  let element2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTableEmptyHeadingDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element1 = fixture.nativeElement.querySelectorAll('th')[0];
    element2 = fixture.nativeElement.querySelectorAll('th')[1];
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element1.classList.contains('sprk-u-man')).toEqual(true);
    expect(element2.classList.toString()).toEqual(
      'sprk-b-Table__empty-heading',
    );
  });
});
