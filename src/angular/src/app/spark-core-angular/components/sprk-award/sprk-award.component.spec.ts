import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAwardComponent } from './sprk-award.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkAwardComponent', () => {
  let component: SparkAwardComponent;
  let fixture: ComponentFixture<SparkAwardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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

  it('getClasses should match what gets set', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if splitAt is not set', () => {
    component.splitAt = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--medium');
  });

  it('should add the correct classes if splitAt has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--medium sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if splitAt and additionalClasses have values', () => {
    component.splitAt = 'tiny';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClasses is set on container', () => {
    component.additionalClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--medium sprk-u-pam');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringImgOne Input', () => {
    const str = 'One';
    component.analyticsStringImgOne = str;
    fixture.detectChanges();
    expect(element.getAttribute('data-analytics')).toEqual(str);
  });

  it('should set the data-analytics attribute given a value in the analyticsStringImgTwo Input', () => {
    const str = 'Two';
    component.analyticsStringImgTwo = str;
    fixture.detectChanges();
    expect(element.getAttribute('data-analytics')).toEqual(str);
  });
});
