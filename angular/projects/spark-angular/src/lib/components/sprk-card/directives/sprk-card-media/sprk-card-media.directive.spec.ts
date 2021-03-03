import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkCardMediaDirective } from './sprk-card-media.directive';

@Component({
  selector: 'sprk-test',
  template: ` <img sprkCardMedia idString="test" /> `,
})
class TestComponent {}

describe('Spark Card Content Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let mediaElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkCardMediaDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    mediaElement = fixture.nativeElement.querySelector('img');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(mediaElement.classList.contains('sprk-c-Card__media')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(mediaElement.getAttribute('data-id') === 'test').toBe(true);
  });
});
