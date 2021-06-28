import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkLegendDirective } from './sprk-legend.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <legend
      sprkLegend
      idString="test-id-str"
      analyticsString="test-analytics-str"
    >
      Legend
    </legend>
    <legend sprkLegend isDisabled="true">Legend</legend>
  `,
})
class TestComponent {}

describe('SprkLegendDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let legendElement: HTMLElement;
  let disabledLegendElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkLegendDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      legendElement = fixture.nativeElement.querySelector('legend');
      disabledLegendElement = fixture.nativeElement.querySelectorAll(
        'legend',
      )[1];
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element', () => {
    expect(legendElement.classList.contains('sprk-b-Legend')).toBe(true);
    expect(legendElement.classList.contains('sprk-b-Label')).toBe(true);
  });

  it('should add the correct classes to the applied element when isDisabled is true', () => {
    expect(
      disabledLegendElement.classList.contains('sprk-b-Label--disabled'),
    ).toBe(true);
  });

  it('should add the value of idString to data-id on the element', () => {
    expect(legendElement.getAttribute('data-id')).toBe('test-id-str');
  });

  it('should add the value of analyticsString to data-analytics on the element', () => {
    expect(legendElement.getAttribute('data-analytics')).toBe(
      'test-analytics-str',
    );
  });
});
