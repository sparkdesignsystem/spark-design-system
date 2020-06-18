import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkRadioLabelDirective } from './sprk-radio-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkRadioLabel>Label</label>
    <label sprkRadioLabel variant="huge">Label</label>
  `,
})
class TestComponent {}

describe('Spark Helper Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let labelElement: HTMLElement;
  let itemElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioLabelDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    labelElement = fixture.nativeElement.querySelector('label');
    itemElement = fixture.nativeElement.querySelectorAll('label')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes to the applied element when variant is huge', () => {
    expect(itemElement.classList.contains('sprk-b-Radio__label--huge')).toBe(
      true,
    );
  });
});
