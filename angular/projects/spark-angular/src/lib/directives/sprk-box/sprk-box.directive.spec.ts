import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkBoxDirective } from './sprk-box.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div sprkBox></div>
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
  `
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkBoxDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
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


  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(item0Element).toHaveClass('sprk-o-Box');
  });

  it('should apply correct spacing classes for flush spacing', () => {
    expect(item1Element).toHaveClass('sprk-o-Box--flush');
  });

  it('should apply correct spacing classes for tiny spacing', () => {
    expect(item2Element).toHaveClass('sprk-o-Box--tiny');
  });

  it('should apply correct spacing classes for small spacing', () => {
    expect(item3Element).toHaveClass('sprk-o-Box--small');
  });

  it('should apply correct spacing classes for medium spacing', () => {
    expect(item4Element).toHaveClass('sprk-o-Box--medium');
  });

  it('should apply correct spacing classes for large spacing', () => {
    expect(item5Element).toHaveClass('sprk-o-Box--large');
  });

  it('should apply correct spacing classes for huge spacing', () => {
    expect(item6Element).toHaveClass('sprk-o-Box--huge');
  });

  it('should apply correct spacing classes for inset-short-tiny spacing', () => {
    expect(item7Element).toHaveClass('sprk-o-Box--inset-short-tiny');
  });

  it('should apply correct spacing classes for inset-short-small spacing', () => {
    expect(item8Element).toHaveClass('sprk-o-Box--inset-short-small');
  });

  it('should apply correct spacing classes for inset-short-medium spacing', () => {
    expect(item9Element).toHaveClass('sprk-o-Box--inset-short-medium');
  });

  it('should apply correct spacing classes for inset-short-large spacing', () => {
    expect(item10Element).toHaveClass('sprk-o-Box--inset-short-large');
  });

  it('should apply correct spacing classes for inset-short-huge spacing', () => {
    expect(item11Element).toHaveClass('sprk-o-Box--inset-short-huge');
  });

  it('should apply correct spacing classes for inset-tall-tiny spacing', () => {
    expect(item12Element).toHaveClass('sprk-o-Box--inset-tall-tiny');
  });

  it('should apply correct spacing classes for inset-tall-small spacing', () => {
    expect(item13Element).toHaveClass('sprk-o-Box--inset-tall-small');
  });

  it('should apply correct spacing classes for inset-tall-medium spacing', () => {
    expect(item14Element).toHaveClass('sprk-o-Box--inset-tall-medium');
  });

  it('should apply correct spacing classes for inset-tall-large spacing', () => {
    expect(item15Element).toHaveClass('sprk-o-Box--inset-tall-large');
  });

  it('should apply correct spacing classes for inset-tall-huge spacing', () => {
    expect(item16Element).toHaveClass('sprk-o-Box--inset-tall-huge');
  });

  it('should apply correct spacing classes for misc-a spacing', () => {
    expect(item17Element).toHaveClass('sprk-o-Box--misc-a');
  });

  it('should apply correct spacing classes for misc-b spacing', () => {
    expect(item18Element).toHaveClass('sprk-o-Box--misc-b');
  });

  it('should apply correct spacing classes for misc-c spacing', () => {
    expect(item19Element).toHaveClass('sprk-o-Box--misc-c');
  });

  it('should apply correct spacing classes for misc-d spacing', () => {
    expect(item20Element).toHaveClass('sprk-o-Box--misc-d');
  });
});
