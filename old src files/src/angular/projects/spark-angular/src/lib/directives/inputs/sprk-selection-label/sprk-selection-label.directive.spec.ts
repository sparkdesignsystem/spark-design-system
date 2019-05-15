import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkSelectionLabelDirective } from './sprk-selection-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkSelectionLabel>Label</label>
  `
})
class TestComponent {}

describe('Spark Helper Text Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let labelElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkSelectionLabelDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    labelElement = fixture.nativeElement.querySelector('label');
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
