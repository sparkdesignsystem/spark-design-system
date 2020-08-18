import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SprkSelectDirective } from './sprk-select.directive';

@Component({
  selector: 'sprk-test-select',
  template: `
    <select sprkSelect id="default"></select>
    <select sprkSelect variant="huge" id="huge"></select>
  `,
})
class TestComponent {}

describe('Spark Select Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let selectElement: DebugElement;
  let hugeSelectElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkSelectDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    selectElement = fixture.debugElement.query(By.css('#default'));
    hugeSelectElement = fixture.debugElement.query(By.css('#huge'));
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

  // it('should add the floating label class on change if the select has a value', () => {
  //   hugeSelectElement.nativeElement.value = 'Test Value!';
  //   hugeSelectElement.nativeElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();
  //   console.log(hugeSelectElement.nativeElement.value, 'debug value')
  //   expect(
  //     hugeSelectElement.nativeElement.classList.contains(
  //       'sprk-b-Input--has-floating-label',
  //     ),
  //   ).toEqual(true);
  // });

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

  // it('should add the floating label class on load if the select has a value', () => {
  //   expect(
  //     hugeSelectElement.nativeElement.classList.contains(
  //       'sprk-b-Input--has-floating-label',
  //     ),
  //   ).toEqual(true);
  // });

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
