import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkFooterComponent } from './sprk-footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkFooterComponent', () => {
  let component: SparkFooterComponent;
  let fixture: ComponentFixture<SparkFooterComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SparkFooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkFooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('footer');
  })

  it('should create itself', () => {
    fixture.detectChanges();
    expect(element).toBeTruthy();
  });

  it('getClasses should match what gets set on the footer', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should show routerLink href on img link if set', () => {
    component.footerType = 'base';
    component.imgHref = "www.sparkdesignsystem.com";
    fixture.detectChanges();
    let el = element.querySelector('.sprk-o-Stack__item a');
    expect(el.getAttribute('href')).toEqual('/www.sparkdesignsystem.com');
  });

  it('should add the correct class if footerType is not set', () => {
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Box sprk-o-Stack sprk-o-Stack--large');
  });

  it('should add the correct classes if footerType has no value, but additionalClasses does', () => {
    component.footerType = '';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Box sprk-o-Stack sprk-o-Stack--large sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if footerType and additionalClasses have values', () => {
    component.footerType = 'base';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Box sprk-o-Stack sprk-o-Stack--large sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value on the images', () => {
    component.footerType = 'base';
    component.imgHref = "www.sparkdesignsystem.com";
    component.imgAlt = "placeholder";
    component.imgSrc = "placeholder";
    component.analyticsImg = 'One';
    fixture.detectChanges();
    expect(element.querySelector('div div a').getAttribute('data-analytics')).toEqual('One');
  });

  it('should set the data-analytics attribute given a value on the links', () => {
    component.footerType = 'base';
    component.linkHref = "www.sparkdesignsystem.com";
    component.analyticsLink = 'One';
    fixture.detectChanges();
    expect(element.querySelector('ul li a').getAttribute('data-analytics')).toEqual('One');
  });
});
