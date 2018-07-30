import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAwardComponent } from './sprk-award.component';

describe('SparkAwardComponent', () => {
  let component: SparkAwardComponent;
  let fixture: ComponentFixture<SparkAwardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkAwardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAwardComponent);
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

  it('should add the correct class if awardType is not set', () => {
    component.awardType = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack');
  });

  it('should add the correct class if awardType is split', () => {
    component.awardType = 'success';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--split@m');
  });

  it('should add the correct classes if awardType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if awardType and additionalClasses have values', () => {
    component.awardType = 'split';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--split@m sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClasses is set on container', () => {
    component.additionalClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-u-pam');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString = str;
    fixture.detectChanges();
    expect(element.getAttribute('data-analytics')).toEqual(str);
  });
});
