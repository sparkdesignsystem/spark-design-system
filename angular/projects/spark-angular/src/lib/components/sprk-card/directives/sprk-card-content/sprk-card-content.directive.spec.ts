import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCardContentDirective } from './sprk-card-content.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkCardContent idString="test"></div>
    <div sprkCardContent></div>
  `,
})
class TestComponent {}

describe('Spark Card Content Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let contentElement0: HTMLElement;
  let contentElement1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCardContentDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    contentElement0 = fixture.nativeElement.querySelector('div');
    contentElement1 = fixture.nativeElement.querySelectorAll('div')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(contentElement0.classList.contains('sprk-c-Card__content')).toBe(
      true,
    );
  });

  it('should apply correct idString value to data-id', () => {
    expect(contentElement0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should not apply data-id when idString is not set', () => {
    expect(contentElement1.getAttribute('data-id')).toBe(null);
  });
});
