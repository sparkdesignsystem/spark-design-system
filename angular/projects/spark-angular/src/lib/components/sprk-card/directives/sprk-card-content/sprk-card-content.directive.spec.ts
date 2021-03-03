import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCardContentDirective } from './sprk-card-content.directive';

@Component({
  selector: 'sprk-test',
  template: ` <div sprkCardContent idString="test"></div> `,
})
class TestComponent {}

describe('Spark Card Content Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let contentElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCardContentDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    contentElement = fixture.nativeElement.querySelector('div');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(contentElement.classList.contains('sprk-c-Card__content')).toBe(
      true,
    );
  });

  it('should apply correct idString value to data-id', () => {
    expect(contentElement.getAttribute('data-id') === 'test').toBe(true);
  });
});
