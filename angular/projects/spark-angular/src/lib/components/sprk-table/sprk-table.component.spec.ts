import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkTableComponent } from './sprk-table.component';

describe('Spark Table Component', () => {
  let fixture: ComponentFixture<SprkTableComponent>;
  let component: SprkTableComponent;
  let element: HTMLElement;
  let tableElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprkTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkTableComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    tableElement = fixture.nativeElement.querySelector('table');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes to the container if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-u-man')).toEqual(true);
  });

  it('should add classes to the table if additionalTableClasses has a value', () => {
    component.additionalTableClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(tableElement.classList.contains('sprk-u-man')).toEqual(true);
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
});
