import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAwardComponent } from './sprk-award.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkToggleComponent } from '../sprk-toggle/sprk-toggle.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkAwardComponent', () => {
  let component: SparkAwardComponent;
  let fixture: ComponentFixture<SparkAwardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SparkAwardComponent,
        SparkToggleComponent,
        SparkIconComponent
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
    component.splitAt = 'huge';
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
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-pam');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringImgOne Input', () => {
    const str = 'One';
    component.splitAt = 'large';
    component.imgTwoHref = 'www.sparkdesignsystem.com';
    component.imgTwoSrc = 'www.sparkdesignsystem.com';
    component.imgTwoAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    component.analyticsStringImgOne = str;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(str);
  });

  it('should set the data-analytics attribute given a value in the analyticsStringImgTwo Input', () => {
    const str = 'Two';
    component.splitAt = 'medium';
    component.imgTwoHref = 'www.sparkdesignsystem.com';
    component.imgTwoSrc = 'www.sparkdesignsystem.com';
    component.imgTwoAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    component.analyticsStringImgTwo = str;
    fixture.detectChanges();
    const el = element.getElementsByTagName('a')[1];
    expect(el.getAttribute('data-analytics')).toEqual(str);
  });
});
