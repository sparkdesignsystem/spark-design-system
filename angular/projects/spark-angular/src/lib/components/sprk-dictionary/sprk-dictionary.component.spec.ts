import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDictionaryComponent } from './sprk-dictionary.component';
import { Component } from '@angular/core';

@Component({
  selector: `sprk-test`,
  template: ` <sprk-dictionary
    [keyValuePairs]="keyValuePairs"
    [data]="data"
    [dictionaryType]="dictionaryType"
    [variant]="variant"
    [keysAdditionalClasses]="keysAdditionalClasses"
    [valuesAdditionalClasses]="valuesAdditionalClasses"
  ></sprk-dictionary>`,
})
class WrappedDictionaryComponent {
  data: object = {};
  keyValuePairs: object = {};
  dictionaryType: string = '';
  variant: string = '';
  keysAdditionalClasses: string = '';
  valuesAdditionalClasses: string = '';
}

describe('SprkAngularDictionaryComponent', () => {
  let component: SprkDictionaryComponent;
  let fixture: ComponentFixture<SprkDictionaryComponent>;
  let element: HTMLElement;

  let wrappedComponent: WrappedDictionaryComponent;
  let wrappedFixture: ComponentFixture<WrappedDictionaryComponent>;
  let wrappedElement: HTMLElement;

  let spy;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkDictionaryComponent, WrappedDictionaryComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {});
    fixture = TestBed.createComponent(SprkDictionaryComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();

    wrappedFixture = TestBed.createComponent(WrappedDictionaryComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedElement = wrappedFixture.nativeElement.querySelector('div');
    wrappedFixture.detectChanges();
  });

  afterEach(() => {
    spy.mockRestore();
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
    wrappedComponent.keysAdditionalClasses = 'spark keysClass';
    wrappedComponent.keyValuePairs = { key: 'value', key2: 'value2' };
    wrappedFixture.detectChanges();

    const keys = wrappedElement.getElementsByClassName(
      'sprk-c-Dictionary__key',
    );

    Array.prototype.forEach.call(keys, (key) => {
      expect(key.classList.toString()).toContain('spark');
      expect(key.classList.toString()).toContain('keysClass');
    });
  });

  it('should add valuesAdditionalClasses', () => {
    wrappedComponent.valuesAdditionalClasses = 'spark valuesClass';
    wrappedComponent.keyValuePairs = { key: 'value', key2: 'value2' };
    wrappedFixture.detectChanges();

    const values = wrappedElement.getElementsByClassName(
      'sprk-c-Dictionary__value',
    );

    Array.prototype.forEach.call(values, (value) => {
      expect(value.classList.toString()).toContain('spark');
      expect(value.classList.toString()).toContain('valuesClass');
    });
  });

  it('should correctly add striped class', () => {
    wrappedComponent.variant = 'striped';

    wrappedFixture.detectChanges();
    expect(wrappedElement.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });

  it('should add keyValuePairs correctly', () => {
    wrappedComponent.keyValuePairs = { key1: 'value1', key2: 'value2' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);
    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__value').length,
    ).toBe(2);
  });

  it('should correctly add striped class with deprecated Input', () => {
    wrappedComponent.dictionaryType = 'striped';
    wrappedFixture.detectChanges();

    expect(wrappedElement.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
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

    expect(console.warn).toHaveBeenCalledTimes(2);
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

    expect(console.warn).toHaveBeenCalledTimes(2);
  });

  it('should correctly respond to changes to keyValuePairs Input', () => {
    wrappedComponent.keyValuePairs = { key1: 'value1', key2: 'value2' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);

    wrappedComponent.keyValuePairs = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(3);

    expect(console.warn).toHaveBeenCalledTimes(2);
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

    expect(console.warn).toHaveBeenCalledTimes(2);
  });

  it('should prefer keyValuePairs over data', () => {
    wrappedComponent.keyValuePairs = { key1: 'value1', key2: 'value2' };
    wrappedComponent.data = { key1: 'value1', key2: 'value2', key3: 'value3' };
    wrappedFixture.detectChanges();

    expect(console.warn).toHaveBeenCalledTimes(3);

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);

    wrappedComponent.keyValuePairs = { key1: 'value1' };
    wrappedComponent.data = { key1: 'value1', key2: 'value2' };
    wrappedFixture.detectChanges();

    expect(
      wrappedElement.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(1);

    expect(console.warn).toHaveBeenCalledTimes(4);
  });

  it('should prefer variant over dictionaryType', () => {
    wrappedComponent.variant = 'striped';
    wrappedComponent.dictionaryType = '';
    wrappedFixture.detectChanges();

    expect(console.warn).toHaveBeenCalledTimes(2);

    expect(wrappedElement.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });
});
