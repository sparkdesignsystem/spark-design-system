import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkToggleComponent } from './sprk-toggle.component';

describe('SparkToggleComponent', () => {
  let component: SparkToggleComponent;
  let fixture: ComponentFixture<SparkToggleComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkToggleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkToggleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the icon', () => {
    let icon = element.querySelector('div');
    fixture.detectChanges();
    expect(icon.classList.toString()).toEqual(component.getClasses());
  });

  it('getClasses should match what gets set on the container', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if toggleType is not set', () => {
    component.toggleType = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack');
  });

  it('should add the correct class if toggleType is split', () => {
    component.toggleType = 'success';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--split@m');
  });

  it('should add the correct classes if toggleType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if toggleType and additionalClasses have values', () => {
    component.toggleType = 'split';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--split@m sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClasses is set on container', () => {
    component.additionalClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-u-pam');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringImgOne Input', () => {
    const str = 'One';
    component.analyticsString= str;
    fixture.detectChanges();
    expect(element.getAttribute('data-analytics')).toEqual(str);
  });
});
