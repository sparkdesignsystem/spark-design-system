import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkDividerComponent } from './sprk-divider.component';

describe('SparkDividerComponent', () => {
  let component: SparkDividerComponent;
  let fixture: ComponentFixture<SparkDividerComponent>;
  let dividerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkDividerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dividerElement = fixture.nativeElement.querySelector('span');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual(
      'sprk-c-Divider sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(dividerElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(dividerElement.getAttribute('data-id')).toBeNull();
  });
});
