import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkBoxDirective } from './sprk-box.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkBox idString="test"></div>
    <div sprkBox spacing="flush"></div>
    <div sprkBox spacing="tiny"></div>
    <div sprkBox spacing="small"></div>
    <div sprkBox spacing="medium"></div>
    <div sprkBox spacing="large"></div>
    <div sprkBox spacing="huge"></div>
    <div sprkBox spacing="insetShortTiny"></div>
    <div sprkBox spacing="insetShortSmall"></div>
    <div sprkBox spacing="insetShortMedium"></div>
    <div sprkBox spacing="insetShortLarge"></div>
    <div sprkBox spacing="insetShortHuge"></div>
    <div sprkBox spacing="insetTallTiny"></div>
    <div sprkBox spacing="insetTallSmall"></div>
    <div sprkBox spacing="insetTallMedium"></div>
    <div sprkBox spacing="insetTallLarge"></div>
    <div sprkBox spacing="insetTallHuge"></div>
    <div sprkBox spacing="miscA"></div>
    <div sprkBox spacing="miscB"></div>
    <div sprkBox spacing="miscC"></div>
    <div sprkBox spacing="miscD"></div>
  `,
})
class TestComponent {}

describe('Spark Box Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let item0Element: HTMLElement;
  let item1Element: HTMLElement;
  let item2Element: HTMLElement;
  let item3Element: HTMLElement;
  let item4Element: HTMLElement;
  let item5Element: HTMLElement;
  let item6Element: HTMLElement;
  let item7Element: HTMLElement;
  let item8Element: HTMLElement;
  let item9Element: HTMLElement;
  let item10Element: HTMLElement;
  let item11Element: HTMLElement;
  let item12Element: HTMLElement;
  let item13Element: HTMLElement;
  let item14Element: HTMLElement;
  let item15Element: HTMLElement;
  let item16Element: HTMLElement;
  let item17Element: HTMLElement;
  let item18Element: HTMLElement;
  let item19Element: HTMLElement;
  let item20Element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkBoxDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    item0Element = fixture.nativeElement.querySelectorAll('div')[0];
    item1Element = fixture.nativeElement.querySelectorAll('div')[1];
    item2Element = fixture.nativeElement.querySelectorAll('div')[2];
    item3Element = fixture.nativeElement.querySelectorAll('div')[3];
    item4Element = fixture.nativeElement.querySelectorAll('div')[4];
    item5Element = fixture.nativeElement.querySelectorAll('div')[5];
    item6Element = fixture.nativeElement.querySelectorAll('div')[6];
    item7Element = fixture.nativeElement.querySelectorAll('div')[7];
    item8Element = fixture.nativeElement.querySelectorAll('div')[8];
    item9Element = fixture.nativeElement.querySelectorAll('div')[9];
    item10Element = fixture.nativeElement.querySelectorAll('div')[10];
    item11Element = fixture.nativeElement.querySelectorAll('div')[11];
    item12Element = fixture.nativeElement.querySelectorAll('div')[12];
    item13Element = fixture.nativeElement.querySelectorAll('div')[13];
    item14Element = fixture.nativeElement.querySelectorAll('div')[14];
    item15Element = fixture.nativeElement.querySelectorAll('div')[15];
    item16Element = fixture.nativeElement.querySelectorAll('div')[16];
    item17Element = fixture.nativeElement.querySelectorAll('div')[17];
    item18Element = fixture.nativeElement.querySelectorAll('div')[18];
    item19Element = fixture.nativeElement.querySelectorAll('div')[19];
    item20Element = fixture.nativeElement.querySelectorAll('div')[20];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(item0Element.classList.contains('sprk-o-Box')).toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(item0Element.getAttribute('data-id') === 'test').toBe(true);
  });

  it('should apply correct spacing classes for flush spacing', () => {
    expect(item1Element.classList.contains('sprk-o-Box--flush')).toBe(true);
  });

  it('should apply correct spacing classes for tiny spacing', () => {
    expect(item2Element.classList.contains('sprk-o-Box--tiny')).toBe(true);
  });

  it('should apply correct spacing classes for small spacing', () => {
    expect(item3Element.classList.contains('sprk-o-Box--small')).toBe(true);
  });

  it('should apply correct spacing classes for medium spacing', () => {
    expect(item4Element.classList.contains('sprk-o-Box--medium')).toBe(true);
  });

  it('should apply correct spacing classes for large spacing', () => {
    expect(item5Element.classList.contains('sprk-o-Box--large')).toBe(true);
  });

  it('should apply correct spacing classes for huge spacing', () => {
    expect(item6Element.classList.contains('sprk-o-Box--huge')).toBe(true);
  });

  it('should apply correct spacing classes for inset-short-tiny spacing', () => {
    expect(
      item7Element.classList.contains('sprk-o-Box--inset-short-tiny'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-short-small spacing', () => {
    expect(
      item8Element.classList.contains('sprk-o-Box--inset-short-small'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-short-medium spacing', () => {
    expect(
      item9Element.classList.contains('sprk-o-Box--inset-short-medium'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-short-large spacing', () => {
    expect(
      item10Element.classList.contains('sprk-o-Box--inset-short-large'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-short-huge spacing', () => {
    expect(
      item11Element.classList.contains('sprk-o-Box--inset-short-huge'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-tall-tiny spacing', () => {
    expect(
      item12Element.classList.contains('sprk-o-Box--inset-tall-tiny'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-tall-small spacing', () => {
    expect(
      item13Element.classList.contains('sprk-o-Box--inset-tall-small'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-tall-medium spacing', () => {
    expect(
      item14Element.classList.contains('sprk-o-Box--inset-tall-medium'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-tall-large spacing', () => {
    expect(
      item15Element.classList.contains('sprk-o-Box--inset-tall-large'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for inset-tall-huge spacing', () => {
    expect(
      item16Element.classList.contains('sprk-o-Box--inset-tall-huge'),
    ).toBe(true);
  });

  it('should apply correct spacing classes for misc-a spacing', () => {
    expect(item17Element.classList.contains('sprk-o-Box--misc-a')).toBe(true);
  });

  it('should apply correct spacing classes for misc-b spacing', () => {
    expect(item18Element.classList.contains('sprk-o-Box--misc-b')).toBe(true);
  });

  it('should apply correct spacing classes for misc-c spacing', () => {
    expect(item19Element.classList.contains('sprk-o-Box--misc-c')).toBe(true);
  });

  it('should apply correct spacing classes for misc-d spacing', () => {
    expect(item20Element.classList.contains('sprk-o-Box--misc-d')).toBe(true);
  });
});
