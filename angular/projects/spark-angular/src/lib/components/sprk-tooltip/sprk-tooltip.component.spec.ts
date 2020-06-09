/* global document beforeEach afterEach describe it window */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
// import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkTooltipComponent } from './sprk-tooltip.component';
import { IterableDiffers } from '@angular/core';

describe('SprkTooltipComponent', () => {
  let component: SprkTooltipComponent;
  let fixture: ComponentFixture<SprkTooltipComponent>;
  let element: HTMLElement;
  let triggerElement;
  let contentElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        SprkTooltipComponent,
        SprkIconComponent,
        // SprkLinkDirective
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkTooltipComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('span');
    triggerElement = element.querySelector('.sprk-c-Tooltip__trigger');
    contentElement = element.querySelector('.sprk-c-Tooltip');
  });

  afterEach(() => {
    if (element.querySelectorAll('.sprk-c-Tooltip--toggled').length !== 0){
      triggerElement.click();
      fixture.detectChanges();
    }
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  // it('should toggle aria-expanded on activation', () => {
  //   // expect(triggerElement.getAttribute('aria-expanded')).toEqual('false');
  //   triggerElement.click();
  //   fixture.detectChanges();
  //   expect(triggerElement.getAttribute('aria-expanded')).toEqual('true');
  // });

  // it('should toggle on activation', () => {
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
  //   triggerElement.click();
  //   fixture.detectChanges();
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
  // });

  // it('should close on document click', () => {
  //   triggerElement.click();
  //   fixture.detectChanges();
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
  //   element.ownerDocument.dispatchEvent(new Event('click'));
  //   fixture.detectChanges();
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
  // });

  // it('should close on Escape key', () => {
  //   triggerElement.click();
  //   fixture.detectChanges();
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(1);
  //   document.dispatchEvent(new KeyboardEvent('keydown', {
  //     key: 'Escape'
  //   }));
  //   fixture.detectChanges();
  //   expect(element.querySelectorAll('.sprk-c-Tooltip--toggled').length).toEqual(0);
  // });

  // it('should recalculate position on hover', () => {
  // });

  // it('should recalculate position on focus', () => {
  // });

  // it('should emit an event when toggled by click', () => {
  // });

  // it('should emit an event when toggled by Enter', () => {
  // });

});
