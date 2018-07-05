import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from './sprk-icon.component';

describe('SparkAlertComponent', () => {
  let component: SparkIconComponent;
  let fixture: ComponentFixture<SparkIconComponent>;
  let linkElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkIconComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkIconComponent);
    component = fixture.componentInstance;
    linkElement = fixture.nativeElement.querySelector('button');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(linkElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if iconType is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Icon');
  });

  it('should add the correct class if iconType is bell', () => {
    component.iconType = 'bell';
    expect(component.getClasses()).toEqual('sprk-c-Icon');
  });

  it('should add the correct classes if iconType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if iconType and additionalClasses have values', () => {
    component.iconType = 'bell';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString='Product: Icon: Icon 1';
    fixture.detectChanges();
    expect(linkElement.hasAttribute('data-analytics')).toEqual(true);
    expect(linkElement.getAttribute('data-analytics')).toEqual('Product: Icon: Icon 1');
  });
});
