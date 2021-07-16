import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableHeadDirective } from './sprk-table-head.directive';

@Component({
  selector: 'sprk-test-component',
  template: `
    <thead additionalClasses="sprk-u-man" sprkTableHead></thead>
    <thead sprkTableHead></thead>
  `,
})
class TestComponent {}

describe('SprkTableHeadDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element1: HTMLElement;
  let element2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTableHeadDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element1 = fixture.nativeElement.querySelectorAll('thead')[0];
    element2 = fixture.nativeElement.querySelectorAll('thead')[1];
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element1.classList.contains('sprk-u-man')).toEqual(true);
    expect(element2.classList.toString()).toEqual('sprk-b-Table__head');
  });
});
