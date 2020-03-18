import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFlagComponent } from './sprk-flag.component';

describe('SprkFlagComponent', () => {
  let component: SprkFlagComponent;
  let fixture: ComponentFixture<SprkFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFlagComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkFlagComponent);
    component = fixture.componentInstance;
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
});
