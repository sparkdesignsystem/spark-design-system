import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCardMediaDirective } from './sprk-card-media.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <img sprkCardMedia idString="test" />
    <img sprkCardMedia />
  `,
})
class TestComponent {}

describe('Spark Card Content Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let mediaElement0: HTMLElement;
  let mediaElement1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCardMediaDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    mediaElement0 = fixture.nativeElement.querySelector('img');
    mediaElement1 = fixture.nativeElement.querySelectorAll('img')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base class', () => {
    expect(mediaElement0.classList.contains('sprk-c-Card__media')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(mediaElement0.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should not apply data-id when idString is not set', () => {
    expect(mediaElement1.getAttribute('data-id')).toBe(null);
  });
});
