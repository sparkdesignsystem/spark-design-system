/* global document beforeEach afterEach describe it window */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkTooltipComponent } from './sprk-tooltip.component';
import { Component } from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: ` <sprk-tooltip
    [triggerIconName]="triggerIconName"
    [triggerIconType]="triggerIconType"
    >"tooltipText"</sprk-tooltip
  >`,
})
class WrappedTooltipComponent {
  triggerIconName: string;
  triggerIconType: string;
  tooltipText: string = 'tooltip content';
}

describe('SprkTooltipComponent', () => {
  let component: SprkTooltipComponent;
  let fixture: ComponentFixture<SprkTooltipComponent>;
  let containerElement: HTMLElement;
  let triggerElement;
  let tooltipElement;

  let wrappedComponent: WrappedTooltipComponent;
  let wrappedFixture: ComponentFixture<WrappedTooltipComponent>;
  let wrappedContainerElement: HTMLElement;
  let wrappedTriggerElement;

  let spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkTooltipComponent,
        SprkIconComponent,
        WrappedTooltipComponent,
      ],
    }).compileComponents();

    spy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkTooltipComponent);
    component = fixture.componentInstance;
    containerElement = fixture.nativeElement.querySelector('span');
    triggerElement = containerElement.querySelector('button');
    tooltipElement = containerElement.querySelector('span');
    fixture.detectChanges();

    wrappedFixture = TestBed.createComponent(WrappedTooltipComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedContainerElement = wrappedFixture.nativeElement.querySelector(
      'span',
    );
    wrappedTriggerElement = wrappedContainerElement.querySelector('button');
    wrappedFixture.detectChanges();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle aria-expanded on activation', () => {
    expect(triggerElement.getAttribute('aria-expanded')).toEqual('false');
    triggerElement.click();
    fixture.detectChanges();
    expect(triggerElement.getAttribute('aria-expanded')).toEqual('true');
  });

  it('should toggle on activation', () => {
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);
    triggerElement.click();
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(1);
  });

  it('should close on document click', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(1);
    containerElement.ownerDocument.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);
  });

  it('should not close on document click if its not open', (done) => {
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);

    let closedEventEmitted = false;

    component.closedEvent.subscribe((g) => {
      closedEventEmitted = true;
      done();
    });

    containerElement.ownerDocument.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);
    expect(closedEventEmitted).toEqual(false);
    done();
  });

  it('should close on Escape key', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(1);
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      }),
    );
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);
  });

  it('should not close on Escape key if it is not open', (done) => {
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);

    let closedEventEmitted = false;

    component.closedEvent.subscribe((g) => {
      closedEventEmitted = true;
      done();
    });

    document.dispatchEvent(new KeyboardEvent('keydown'));

    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(0);
    expect(closedEventEmitted).toEqual(false);
    done();
  });

  it('should not close on non-Escape key', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(1);
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'a',
      }),
    );
    fixture.detectChanges();
    expect(
      containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length,
    ).toEqual(1);
  });

  it('should add additional classes', () => {
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(false);
    component.additionalClasses = 'sprk-test';
    fixture.detectChanges();
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(true);
  });

  it('should add vertical align middle', () => {
    component.verticalAlignment = 'middle';
    fixture.detectChanges();
    expect(
      containerElement.classList.contains('sprk-c-Tooltip__container--middle'),
    ).toEqual(true);
  });

  it('should add vertical align top', () => {
    component.verticalAlignment = 'top';
    fixture.detectChanges();
    expect(
      containerElement.classList.contains('sprk-c-Tooltip__container--top'),
    ).toEqual(true);
    expect(containerElement.classList.length).toEqual(2);
  });

  it('should add vertical align bottom', () => {
    component.verticalAlignment = 'bottom';
    fixture.detectChanges();
    expect(
      containerElement.classList.contains('sprk-c-Tooltip__container--bottom'),
    ).toEqual(true);
    expect(containerElement.classList.length).toEqual(2);
  });

  it('should add vertical align baseline', () => {
    component.verticalAlignment = 'baseline';
    fixture.detectChanges();
    expect(
      containerElement.classList.contains(
        'sprk-c-Tooltip__container--baseline',
      ),
    ).toEqual(true);
    expect(containerElement.classList.length).toEqual(2);
  });

  it('should generate an id if needed', () => {
    const foundLabelledBy = triggerElement.getAttribute('aria-labelledby');
    const foundId = tooltipElement.id;

    expect(foundLabelledBy.length > 0).toBeTruthy();
    expect(foundId.length > 0).toBeTruthy();
    expect(foundLabelledBy).toEqual(foundId);
  });

  it('should not generate an id if one is provided', () => {
    component.id = 'test_string';
    fixture.detectChanges();

    expect(triggerElement.getAttribute('aria-labelledby')).toEqual(
      'test_string',
    );
    expect(tooltipElement.id).toEqual('test_string');
  });

  it('should emit an open event when toggled', (done) => {
    let eventEmitted = false;

    component.openedEvent.subscribe((g) => {
      eventEmitted = true;
      done();
    });

    triggerElement.click();

    expect(eventEmitted).toEqual(true);
  });

  it('should emit a closed event when toggled', (done) => {
    let eventEmitted = false;

    component.closedEvent.subscribe((g) => {
      eventEmitted = true;
      done();
    });

    triggerElement.click();
    expect(eventEmitted).toEqual(false);

    triggerElement.click();
    expect(eventEmitted).toEqual(true);
  });

  it('should recalculate position on trigger focusin', () => {
    const spy = jest.spyOn(component, 'setPositioningClass');

    expect(spy).not.toHaveBeenCalled();

    fixture.nativeElement.dispatchEvent(new Event('focusin'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should recalculate position on trigger focusin', () => {
    const spy = jest.spyOn(component, 'setPositioningClass');

    expect(spy).not.toHaveBeenCalled();

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the correct positioning class on large window', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 800,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 75 };
    };

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-right')).toBe(
      true,
    );
  });

  it('should add the top left positioning class', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 75 };
    };

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-left')).toBe(
      true,
    );
  });

  it('should add the top right positioning class', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 25 };
    };

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-right')).toBe(
      true,
    );
  });

  it('should add the bottom left positioning class', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    triggerElement.getBoundingClientRect = () => {
      return { top: 25, left: 75 };
    };

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(
      tooltipElement.classList.contains('sprk-c-Tooltip--bottom-left'),
    ).toBe(true);
  });

  it('should add the bottom right positioning class', () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 100,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      value: 100,
    });

    triggerElement.getBoundingClientRect = () => {
      return { top: 25, left: 25 };
    };

    fixture.nativeElement.dispatchEvent(new Event('mouseover'));
    fixture.detectChanges();

    expect(
      tooltipElement.classList.contains('sprk-c-Tooltip--bottom-right'),
    ).toBe(true);
  });

  it('should correctly use the deprecated icon property', () => {
    wrappedComponent.triggerIconType = 'access';
    wrappedFixture.detectChanges();

    expect(
      wrappedTriggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#access');

    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should correctly use the new icon property', () => {
    wrappedComponent.triggerIconName = 'email';
    wrappedFixture.detectChanges();

    expect(
      wrappedTriggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#email');

    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should prefer the new property over the deprecated property', () => {
    wrappedComponent.triggerIconName = 'email';
    wrappedComponent.triggerIconType = 'access';
    wrappedFixture.detectChanges();

    expect(
      wrappedTriggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#email');

    expect(console.warn).toHaveBeenCalledTimes(2);
  });

  it('should use the correct default icon', () => {
    fixture.detectChanges();

    expect(
      triggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#question-filled');
  });

  it('should not change the icon if the input has not changed', () => {
    wrappedComponent.triggerIconName = 'email';
    wrappedFixture.detectChanges();

    expect(
      wrappedTriggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#email');

    wrappedComponent.tooltipText = 'asdf';
    wrappedFixture.detectChanges();

    expect(
      wrappedTriggerElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#email');

    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});
