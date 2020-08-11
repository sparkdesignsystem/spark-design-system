import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDictionaryComponent } from './sprk-dictionary.component';
import { Component } from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: `<sprk-dictionary
    [dictionaryType]="dictionaryType"
    [data]="data"
  ></sprk-dictionary>`,
})
class TestComponent {
  data = {};
  dictionaryType = '';
}

describe('SprkAngularDictionaryComponent', () => {
  let component: SprkDictionaryComponent;
  let fixture: ComponentFixture<SprkDictionaryComponent>;
  let element: HTMLElement;

  let wrappedComponent: TestComponent;
  let wrappedFixture: ComponentFixture<TestComponent>;
  let wrappedElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkDictionaryComponent, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkDictionaryComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();

    wrappedFixture = TestBed.createComponent(TestComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedElement = wrappedFixture.nativeElement.querySelector('div');
    wrappedFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });

  it('should add additionalClasses', () => {
    component.additionalClasses = 'spark design';
    fixture.detectChanges();
    expect(element.classList.toString()).toContain('spark');
    expect(element.classList.toString()).toContain('design');
  });

  it('should add keysAdditionalClasses', () => {
    component.keysAdditionalClasses = 'keysClass';
    component.keyValuePairs = { key: 'value', key2: 'value2' };
    fixture.detectChanges();

    const keys = element.getElementsByClassName('sprk-c-Dictionary__key');

    Array.prototype.forEach.call(keys, (key) => {
      expect(key.classList.toString()).toContain('keysClass');
    });
  });

  it('should add valuesAdditionalClasses', () => {
    component.valuesAdditionalClasses = 'valuesClass';
    component.keyValuePairs = { key: 'value', key2: 'value2' };
    fixture.detectChanges();

    const values = element.getElementsByClassName('sprk-c-Dictionary__value');

    Array.prototype.forEach.call(values, (value) => {
      expect(value.classList.toString()).toContain('valuesClass');
    });
  });

  it('should correctly add striped class', () => {
    component.variant = 'striped';

    fixture.detectChanges();
    expect(element.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });

  it('should correctly add striped class with deprecated Input', () => {
    wrappedComponent.dictionaryType = 'striped';
    wrappedFixture.detectChanges();

    expect(wrappedElement.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });

  it('should add keyValuePairs correctly', () => {
    component.keyValuePairs = { key1: 'value1', key2: 'value2' };
    fixture.detectChanges();

    expect(
      element.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);
    expect(
      element.getElementsByClassName('sprk-c-Dictionary__value').length,
    ).toBe(2);
  });

  it('should add data correctly with deprecated Input', () => {
    wrappedComponent.data = { key1: 'value1', key2: 'value2' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);
    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__value').length,
    ).toBe(2);
  });

  it('should correctly respond to changes to data Input', () => {
    wrappedComponent.data = { key1: 'value1', key2: 'value2' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);

    wrappedComponent.data = { key1: 'value1', key2: 'value2', key3: 'value3' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(3);
  });

  it('should correctly respond to changes to dictionaryType Input', () => {
    wrappedComponent.dictionaryType = '';
    wrappedFixture.detectChanges();

    expect(wrappedElement.classList.toString()).toBe('sprk-c-Dictionary');

    wrappedComponent.dictionaryType = 'striped';
    wrappedFixture.detectChanges();

    expect(wrappedElement.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });
});
