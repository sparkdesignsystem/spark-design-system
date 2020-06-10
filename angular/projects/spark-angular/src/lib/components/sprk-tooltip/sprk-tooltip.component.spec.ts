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

  it('should add additional classes', () => {
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(false);
    component.additionalClasses = 'sprk-test';
    fixture.detectChanges();
    expect(tooltipElement.classList.contains('sprk-test')).toEqual(true);
  });

  // it('should emit an open event when toggled', () => {
  // });

  // it('should emit a closed event when toggled', () => {
  // });

  // it('should generate and add aria-labelledby', () => {
  // });

  // it('should recalculate position on hover', () => {
  // });

  // it('should recalculate position on focus', () => {
  // });

  // it('should emit an event when toggled by Enter', () => {
  // });
});
