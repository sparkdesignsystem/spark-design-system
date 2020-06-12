/* global document beforeEach afterEach describe it window */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkTooltipComponent } from './sprk-tooltip.component';

describe('SprkTooltipComponent', () => {
  let component: SprkTooltipComponent;
  let fixture: ComponentFixture<SprkTooltipComponent>;
  let containerElement: HTMLElement;
  let triggerElement;
  let tooltipElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkTooltipComponent,
        SprkIconComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkTooltipComponent);
    component = fixture.componentInstance;
    containerElement = fixture.nativeElement.querySelector('span');
    triggerElement = containerElement.querySelector('button');
    tooltipElement = containerElement.querySelector('span');
    fixture.detectChanges();
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
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
    triggerElement.click();
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
  });

  it('should close on document click', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
    containerElement.ownerDocument.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
  });

  it('should not close on document click if its not open', (done) => {
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);

    let closedEventEmitted = false;

    component.closedEvent.subscribe(g => {
      closedEventEmitted = true;
      done();
    });

    containerElement.ownerDocument.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
    expect(closedEventEmitted).toEqual(false);
    done();
  });

  it('should close on Escape key', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape'
    }));
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
  });

  it('should not close on Escape key if it is not open', (done) => {
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);

    let closedEventEmitted = false;

    component.closedEvent.subscribe(g => {
      closedEventEmitted = true;
      done();
    });

    document.dispatchEvent(new KeyboardEvent('keydown'));

    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
    expect(closedEventEmitted).toEqual(false);
    done();
  });

  it('should not close on non-Escape key', () => {
    triggerElement.click();
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'a'
    }));
    fixture.detectChanges();
    expect(containerElement.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
  });

  it('should add additional classes', () => {
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(false);
    component.additionalClasses = 'sprk-test';
    fixture.detectChanges();
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(true);
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

    expect(triggerElement.getAttribute('aria-labelledby')).toEqual('test_string');
    expect(tooltipElement.id).toEqual('test_string');
  });

  it('should emit an open event when toggled', done => {
    let eventEmitted = false;

    component.openedEvent.subscribe(g => {
      eventEmitted = true;
      done();
    });

    triggerElement.click();

    expect(eventEmitted).toEqual(true);
  });

  it('should emit a closed event when toggled', done => {
    let eventEmitted = false;

    component.closedEvent.subscribe(g => {
      eventEmitted = true;
      done();
    });

    triggerElement.click();
    expect(eventEmitted).toEqual(false);

    triggerElement.click();
    expect(eventEmitted).toEqual(true);
  });

  it('should recalculate position on hover', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 75 }
    }

    const mouseover = new MouseEvent('mouseover');
    fixture.nativeElement.dispatchEvent(mouseover);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-left')).toBe(true);
  });

  it('should recalculate position on focus', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 75 }
    }

    const focusin = new Event('focusin');
    fixture.nativeElement.dispatchEvent(focusin);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-left')).toBe(true);
  });

  it('should calculate position for top left quadrant', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 25, left: 25 }
    }

    const focusin = new Event('focusin');
    fixture.nativeElement.dispatchEvent(focusin);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--bottom-right')).toBe(true);
  });

  it('should calculate position for top right quadrant', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 25, left: 75 }
    }

    const focusin = new Event('focusin');
    fixture.nativeElement.dispatchEvent(focusin);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--bottom-left')).toBe(true);
  });

  it('should calculate position for bottom left quadrant', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 25 }
    }

    const focusin = new Event('focusin');
    fixture.nativeElement.dispatchEvent(focusin);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-right')).toBe(true);
  });

  it('should calculate position for bottom right quadrant', () => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }

    window.resizeTo(100,100);

    triggerElement.getBoundingClientRect = () => {
      return { top: 75, left: 75 }
    }

    const focusin = new Event('focusin');
    fixture.nativeElement.dispatchEvent(focusin);
    fixture.detectChanges();

    expect(tooltipElement.classList.contains('sprk-c-Tooltip--top-left')).toBe(true);
  });
});
