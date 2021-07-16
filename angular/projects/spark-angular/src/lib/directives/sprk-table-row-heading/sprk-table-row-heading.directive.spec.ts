import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableRowHeadingDirective } from './sprk-table-row-heading.directive';

@Component({
  selector: 'sprk-test-component',
  template: `
    <th additionalClasses="sprk-u-man" sprkTableRowHeading></th>
    <th sprkTableRowHeading></th>
  `,
})
class TestComponent {}

describe('SprkTableRowHeadingDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element1: HTMLElement;
  let element2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTableRowHeadingDirective],
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
    expect(element2.classList.toString()).toEqual('sprk-b-Table__row-heading');
  });
});
