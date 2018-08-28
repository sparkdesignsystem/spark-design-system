import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableHeadDirective } from './sprk-table-head.directive';

@Component({
  selector: 'sprk-test-component',
  template: `<thead additionalClasses="sprk-u-man" sprkTableHead></thead>`
})
class TestComponent {}

describe('SprkTableHeadDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTableHeadDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('thead');
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  });
});
