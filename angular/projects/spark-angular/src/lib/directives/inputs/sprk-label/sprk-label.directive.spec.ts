import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkLabelDirective } from './sprk-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkLabel>
      Label!
    </label>
    <label sprkLabel hasIcon="true">
      Label!
    </label>
    <label sprkLabel isDisabled="true">
      Label!
    </label>
  `,
})
class TestComponent {}

describe('SprkLabelDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let label: DebugElement;
  let labelHasIcon: HTMLElement;
  let labelDisabled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkLabelDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    label = fixture.debugElement.query(By.css('label'));
    labelHasIcon = fixture.nativeElement.querySelectorAll('label')[1];
    labelDisabled = fixture.nativeElement.querySelectorAll('label')[2];
  }));

  it('should add the correct label classes to the applied element', () => {
    expect(label.nativeElement.classList.contains('sprk-b-Label')).toEqual(
      true,
    );
  });

  it('should add the icon label class if hasIcon is true', () => {
    expect(labelHasIcon.classList.contains('sprk-b-Label--with-icon')).toEqual(
      true,
    );
  });

  it('should add the disabled class if isDisabled is true', () => {
    expect(labelDisabled.classList.contains('sprk-b-Label--disabled')).toEqual(
      true,
    );
  });
});
