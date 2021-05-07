import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadLinkDirective } from './sprk-masthead-link.directive';

@Component({
  selector: 'sprk-test',
  template: ` <a href="#" sprkMastheadLink idString="test">Test</a> `,
})
class TestComponent {}

describe('SprkMastheadLinkDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadLinkDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('a');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the link class', () => {
    expect(el.classList.contains('sprk-c-Masthead__link')).toBe(true);
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });
});
