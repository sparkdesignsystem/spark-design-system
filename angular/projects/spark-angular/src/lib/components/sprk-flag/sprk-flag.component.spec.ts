import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFlagComponent } from './sprk-flag.component';

describe('SprkFlagComponent', () => {
  let component: SprkFlagComponent;
  let fixture: ComponentFixture<SprkFlagComponent>;
  let flagElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFlagComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkFlagComponent);
    component = fixture.componentInstance;
    flagElement = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add the correct classes if additionalClasses are supplied', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(flagElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(flagElement.getAttribute('data-id')).toBeNull();
  });

  it('should add the sprk-o-Flag--rev class when isReversed is true', () => {
    component.isReversed = true;
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Flag sprk-o-Flag--rev'
    );
  });
});
