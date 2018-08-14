import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableGroupedColumnDirective } from './sprk-table-grouped-column.directive';

@Component({
  selector: 'test-component',
  template: `<th additionalClasses="sprk-u-man" sprk-table-grouped-column></th>`
})

class TestComponent {}

describe('SprkTableGroupedColumnDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SprkTableGroupedColumnDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('th');
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  })
});
