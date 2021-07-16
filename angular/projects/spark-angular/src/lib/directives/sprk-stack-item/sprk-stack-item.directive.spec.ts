import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkStackItemDirective } from './sprk-stack-item.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <div class="sprk-u-man s" sprkStackItem></div>
    <div sprkStackItem></div>
  `,
})
class TestComponent {}

describe('Spark Stack Item Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let item1Element: HTMLElement;
  let item2Element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkStackItemDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    item1Element = fixture.nativeElement.querySelectorAll('div')[0];
    item2Element = fixture.nativeElement.querySelectorAll('div')[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
