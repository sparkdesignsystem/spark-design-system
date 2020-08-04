import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDictionaryComponent } from './sprk-dictionary.component';

describe('SprkAngularDictionaryComponent', () => {
  let component: SprkDictionaryComponent;
  let fixture: ComponentFixture<SprkDictionaryComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkDictionaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkDictionaryComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
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
    component.dictionaryType = 'striped';
    component.ngOnInit();
    fixture.detectChanges();

    expect(element.classList.toString()).toContain(
      'sprk-c-Dictionary--striped',
    );
  });

  it('should add data correctly', () => {
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
    component.data = { key1: 'value1', key2: 'value2' };
    component.ngOnInit();
    fixture.detectChanges();

    expect(
      element.getElementsByClassName('sprk-c-Dictionary__key').length,
    ).toBe(2);
    expect(
      element.getElementsByClassName('sprk-c-Dictionary__value').length,
    ).toBe(2);
  });
});
