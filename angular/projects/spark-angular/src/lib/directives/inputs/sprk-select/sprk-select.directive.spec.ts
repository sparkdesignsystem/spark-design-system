import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkSelectDirective } from './sprk-select.directive';

@Component({
  selector: 'sprk-test-select',
  template: `
    <select sprkSelect id="default">
      <option value="1" id="default-option-1">Option 1</option>
    </select>
    <select sprkSelect variant="huge" id="huge"></select>
    <select sprkSelect variant="huge" id="huge-with-value">
      <option value="initial" selected>Initial</option>
    </select>
    <select sprkSelect variant="huge" id="huge-with-no-value">
      <option value="" disabled selected hidden id="hidden-option"></option>
      <option value="1" id="option-1">Option 1</option>
    </select>
  `,
})
class TestComponent {}

describe('Spark Select Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectElement: DebugElement;
  let selectOptionOneElement: DebugElement;
  let hugeSelectElement: DebugElement;
  let hugeSelectElementWithValue: DebugElement;
  let hugeSelectElementWithNoValue: DebugElement;
  let hugeSelectHiddenOptionElement: DebugElement;
  let hugeSelectOptionOneElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkSelectDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    selectElement = fixture.debugElement.query(By.css('#default'));
    selectOptionOneElement = fixture.debugElement.query(
      By.css('#default-option-1'),
    );
    hugeSelectElement = fixture.debugElement.query(By.css('#huge'));
    hugeSelectElementWithValue = fixture.debugElement.query(
      By.css('#huge-with-value'),
    );
    hugeSelectElementWithNoValue = fixture.debugElement.query(
      By.css('#huge-with-no-value'),
    );
    hugeSelectHiddenOptionElement = fixture.debugElement.query(
      By.css('#hidden-option'),
    );
    hugeSelectOptionOneElement = fixture.debugElement.query(
      By.css('#option-1'),
    );
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct class if a select element is used', () => {
    fixture.detectChanges();
    expect(selectElement.nativeElement.classList.toString()).toEqual(
      'sprk-b-Select sprk-u-Width-100',
    );
  });

  it('should add the has-floating-label class on load if the select has a value', () => {
    expect(
      hugeSelectElementWithValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it('should not add the floating label class on change if the select value is empty', () => {
    hugeSelectElement.nativeElement.value = '';
    hugeSelectElement.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      hugeSelectElement.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it("should add the floating label class on change if the select value isn't empty", () => {
    expect(
      hugeSelectElementWithNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
    hugeSelectHiddenOptionElement.nativeElement.selected = false;
    hugeSelectOptionOneElement.nativeElement.selected = true;
    hugeSelectElementWithNoValue.nativeElement.dispatchEvent(
      new Event('change'),
    );
    fixture.detectChanges();
    expect(
      hugeSelectElementWithNoValue.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(true);
  });

  it("should not add the floating label class on change if the select value isn't empty and the variant is not huge", () => {
    expect(
      selectElement.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
    selectOptionOneElement.nativeElement.selected = true;
    selectElement.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(
      selectElement.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should not add the floating label class on load if the select value is empty', () => {
    expect(
      hugeSelectElement.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });

  it('should not add the floating label class to selects that are not huge', () => {
    expect(
      selectElement.nativeElement.classList.contains(
        'sprk-b-Input--has-floating-label',
      ),
    ).toEqual(false);
  });
});
