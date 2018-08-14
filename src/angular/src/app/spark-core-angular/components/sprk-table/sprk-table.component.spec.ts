import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkTableComponent } from './sprk-table.component';

describe('Spark Table Component', () => {
  let fixture: ComponentFixture<SparkTableComponent>;
  let component: SparkTableComponent;
  let element: HTMLElement;
  let tableElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SparkTableComponent);
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
});
