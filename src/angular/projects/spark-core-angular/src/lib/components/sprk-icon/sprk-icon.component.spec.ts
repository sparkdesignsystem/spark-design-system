import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from './sprk-icon.component';

describe('SparkIconComponent', () => {
  let component: SparkIconComponent;
  let fixture: ComponentFixture<SparkIconComponent>;
  let iconElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkIconComponent);
    component = fixture.componentInstance;
    iconElement = fixture.nativeElement.querySelector('svg');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(iconElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if iconType is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Icon');
  });

  it('should add the correct icon based on the icon type set', () => {
    component.iconType = 'bell';
    fixture.detectChanges();
    expect(
      iconElement.querySelector('use').hasAttribute('xlink:href')
    ).toBeTruthy();
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell'
    );
  });

  it('should add the correct classes if iconType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if iconType and additionalClasses have values', () => {
    component.iconType = 'bell';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });
});
