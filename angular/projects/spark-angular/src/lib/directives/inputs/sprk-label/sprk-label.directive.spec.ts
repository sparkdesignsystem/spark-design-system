import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkLabelDirective } from './sprk-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkLabel>
      Label!
    </label>
  `
})
class TestComponent {}

describe('SprkLabelDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkLabelDirective, TestComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('label'));
    fixture.detectChanges();
  });

  it('should add the correct label classes to the applied element', () => {
    expect(
      inputElement.nativeElement.classList.contains('sprk-b-Label')
    ).toEqual(true);
  });
});
