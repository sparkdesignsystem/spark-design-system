import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFieldsetDirective } from './sprk-fieldset.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <fieldset
      sprkFieldset
      idString="test-id-str"
      analyticsString="test-analytics-str"
    >
      Content
    </fieldset>
  `,
})
class TestComponent {}

describe('SprkFieldsetDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let fieldsetElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkFieldsetDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      fieldsetElement = fixture.nativeElement.querySelector('fieldset');
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element', () => {
    expect(fieldsetElement.classList.contains('sprk-b-Fieldset')).toBe(true);
  });

  it('should add the value of idString to data-id on the element', () => {
    expect(fieldsetElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of analyticsString to data-analytics on the element', () => {
    expect(fieldsetElement.getAttribute('data-analytics')).toBe(
      'test-analytics-str',
    );
  });
});
