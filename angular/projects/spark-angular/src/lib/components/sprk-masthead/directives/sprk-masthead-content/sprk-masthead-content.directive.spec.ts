import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadContentDirective } from './sprk-masthead-content.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkMastheadContent analyticsString="test-str" idString="test">
      Test
    </div>
    <div sprkMastheadContent>Test</div>
  `,
})
class TestComponent {}

describe('SprkMastheadContentDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadContentDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('div');
    el2 = fixture.nativeElement.querySelectorAll('div')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the content class', () => {
    expect(el.classList.contains('sprk-c-Masthead__content')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });

  it('should not add data-analytics if no value is supplied', () => {
    expect(el2.getAttribute('data-analytics')).toBe(null);
  });

  it('should add data-analytics if a value is supplied', () => {
    expect(el.getAttribute('data-analytics')).toBe('test-str');
  });

  it('should not add data-id if value is supplied', () => {
    expect(el2.getAttribute('data-id')).toBe(null);
  });
});
