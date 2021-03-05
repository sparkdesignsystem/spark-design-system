import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCardHeaderDirective } from './sprk-card-header.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkCardHeader idString="test"></div>
    <div sprkCardHeader></div>
  `,
})
class TestComponent {}

describe('Spark Card Header Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let headerElement0: HTMLElement;
  let headerElement1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCardHeaderDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    headerElement0 = fixture.nativeElement.querySelector('div');
    headerElement1 = fixture.nativeElement.querySelectorAll('div')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(headerElement0.classList.contains('sprk-c-Card__header')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(headerElement0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should not apply data-id when idString is not set', () => {
    expect(headerElement1.getAttribute('data-id')).toBe(null);
  });
});
