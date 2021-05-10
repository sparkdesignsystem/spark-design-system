import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkMastheadNavCollapsibleButtonComponent } from './sprk-masthead-nav-collapsible-button.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-masthead-nav-collapsible-button
      idString="test"
      analyticsString="test-str"
      [isOpen]="true"
      additionalClasses="sprk-u-mbm"
      iconAdditionalClasses="sprk-u-mbs"
      collapsibleNavId="1"
      >Test</sprk-masthead-nav-collapsible-button
    >
    <sprk-masthead-nav-collapsible-button
      >Test</sprk-masthead-nav-collapsible-button
    >
  `,
})
class TestComponent {}

describe('SprkMastheadNavCollapsibleButtonComponent', () => {
  let component: TestComponent;
  let component2: SprkMastheadNavCollapsibleButtonComponent;
  let fixture: ComponentFixture<TestComponent>;
  let fixture2: ComponentFixture<SprkMastheadNavCollapsibleButtonComponent>;
  let el: HTMLElement;
  let el2: HTMLElement;
  let el3: HTMLElement;
  let svgEl: SVGSVGElement;
  let svgEl2: SVGSVGElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkMastheadNavCollapsibleButtonComponent, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture2 = TestBed.createComponent(
      SprkMastheadNavCollapsibleButtonComponent,
    );
    component = fixture.componentInstance;
    component2 = fixture2.componentInstance;
    fixture.detectChanges();
    fixture2.detectChanges();
    el = fixture.nativeElement.querySelector('button');
    el2 = fixture.nativeElement.querySelectorAll('button')[1];
    el3 = fixture2.nativeElement.querySelector('button');
    svgEl = el.querySelector('svg');
    svgEl2 = el2.querySelector('svg');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the button clicked event when clicked', (done: () => void) => {
    let clickEmitted = false;
    component2.collapsibleNavButtonEvent.subscribe((g) => {
      clickEmitted = true;
      done();
    });
    el3.click();
    expect(clickEmitted).toEqual(true);
  });

  it('should add the collapsible nav button class', () => {
    expect(el2.classList.toString()).toBe('sprk-c-Menu');
  });

  it('should add additionalClasses if present', () => {
    expect(el.classList.toString()).toBe('sprk-c-Menu sprk-u-mbm');
  });

  it('should add the collapsible nav open svg classes when isOpen is true', () => {
    expect(svgEl.classList.toString()).toBe(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Menu__icon sprk-u-mbs sprk-c-Menu__icon--is-open',
    );
  });

  it('should add the collapsible nav svg classes and not add open class when isOpen is false', () => {
    expect(svgEl2.classList.toString()).toBe(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Menu__icon',
    );
  });

  it('should add additionalClasses to the svg icon when present', () => {
    expect(svgEl.classList.toString()).toBe(
      'sprk-c-Icon sprk-c-Icon--xl sprk-c-Menu__icon sprk-u-mbs sprk-c-Menu__icon--is-open',
    );
  });

  it('should add data-id if value is supplied', () => {
    expect(el.getAttribute('data-id')).toBe('test');
  });

  it('should not add data-id if no value is supplied', () => {
    expect(el2.getAttribute('data-id')).toBe(null);
  });

  it('should add data-analytics if value is supplied', () => {
    expect(el.getAttribute('data-analytics')).toBe('test-str');
  });

  it('should not add data-analytics if no value is supplied', () => {
    expect(el2.getAttribute('data-analytics')).toBe(null);
  });

  it('should add aria-expanded set to true if isOpen is true', () => {
    expect(el.getAttribute('aria-expanded')).toBe('true');
  });

  it('should add aria-expanded set to false if isOpen is false or unset', () => {
    expect(el2.getAttribute('aria-expanded')).toBe('false');
  });

  // This is because we don't want to associate the button with a control if none exists
  it('should not add aria-controls if collapsibleNavId does not have a value', () => {
    expect(el2.getAttribute('aria-controls')).toBe(null);
  });

  it('should add aria-expanded set to false if isOpen is false or unset', () => {
    expect(el2.getAttribute('aria-expanded')).toBe('false');
  });
});
