import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkDividerComponent } from './sprk-divider.component';

describe('SparkDividerComponent', () => {
  let component: SparkDividerComponent;
  let fixture: ComponentFixture<SparkDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkDividerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
