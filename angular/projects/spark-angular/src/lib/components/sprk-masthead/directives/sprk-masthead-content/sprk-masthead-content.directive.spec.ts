import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadContentDirective } from './sprk-masthead-content.directive';

@Component({
  selector: 'sprk-test',
  template: ` <div sprkMastheadContent idString="test">Test</div> `,
})
class TestComponent {}

describe('SprkMastheadContentDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadContentDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('div');
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
});
