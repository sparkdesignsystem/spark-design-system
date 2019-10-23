import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkButtonDirective } from './sprk-button.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <button sprkButton></button>
    <button sprkButton [isSpinning]="true"></button>
  `
})
class TestComponent {}

describe('Spark Button Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let button1Element: HTMLElement;
  let button2Element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkButtonDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    button1Element = fixture.nativeElement.querySelectorAll('button')[0];
    button2Element = fixture.nativeElement.querySelectorAll('button')[1];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a spinner if isSpinning is true', () => {
    expect(button2Element.querySelectorAll('.sprk-c-Spinner').length).toBe(1);
  });
});
