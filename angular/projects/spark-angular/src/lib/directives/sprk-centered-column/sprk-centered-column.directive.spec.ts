

import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCenteredColumnDirective } from './sprk-centered-column.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkCenteredColumn></div>
  `
})
class TestComponent {}

describe('Spark Centered Column Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCenteredColumnDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    element = fixture.nativeElement.querySelectorAll('div')[0];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(element.classList.contains('sprk-o-CenteredColumn')).toBe(true);
  });
});
