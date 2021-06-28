import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDividerComponent } from './sprk-divider.component';

describe('SprkDividerComponent', () => {
  let component: SprkDividerComponent;
  let fixture: ComponentFixture<SprkDividerComponent>;
  let dividerElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkDividerComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkDividerComponent);
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
      'sprk-c-Divider sprk-u-pam sprk-u-man',
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
