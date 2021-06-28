import { Component, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkTextareaDirective } from './sprk-textarea.directive';

@Component({
  selector: 'sprk-test',
  template: `
    <textarea
      sprkTextarea
      id="textarea"
      idString="test-str"
      analyticsString="test-str"
    ></textarea>
  `,
})
class TestComponent {}

describe('Spark Textarea Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let textareaElement: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkTextareaDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();

      textareaElement = fixture.debugElement.query(By.css('#textarea'));
    }),
  );

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct class on load', () => {
    expect(
      textareaElement.nativeElement.classList.contains('sprk-b-TextArea'),
    ).toEqual(true);
    expect(textareaElement.nativeElement.classList.length).toEqual(1);
  });

  it('should set the data-analytics attribute to the value of analyticsString', () => {
    expect(
      textareaElement.nativeElement.getAttribute('data-analytics'),
    ).toEqual('test-str');
  });

  it('should set the data-id attribute to the value of idString', () => {
    expect(textareaElement.nativeElement.getAttribute('data-id')).toEqual(
      'test-str',
    );
  });
});
