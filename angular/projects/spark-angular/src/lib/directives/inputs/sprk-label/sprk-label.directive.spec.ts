import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkLabelDirective } from './sprk-label.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <label sprkLabel idString="test-str">
      Label!
    </label>
    <label sprkLabel hasIcon="true">
      Label!
    </label>
    <label sprkLabel isDisabled="true">
      Label!
    </label>
    <label sprkLabel isHidden="true">
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
  let labelHidden: HTMLElement;

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
    labelHidden = fixture.nativeElement.querySelectorAll('label')[3];
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

  it('should add the screen reader class if isHidden is true', () => {
    expect(labelHidden.classList.contains('sprk-u-ScreenReaderText')).toEqual(
      true,
    );
    expect(labelHidden.classList.length).toBe(2);
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(label.nativeElement.getAttribute('data-id')).toEqual('test-str');
  });
});
