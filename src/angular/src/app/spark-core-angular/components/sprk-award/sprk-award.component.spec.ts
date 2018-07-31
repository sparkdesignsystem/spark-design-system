import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAwardComponent } from './sprk-award.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkToggleComponent } from '../sprk-toggle/sprk-toggle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkStackComponent } from '../sprk-stack/sprk-stack.component';

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
        SparkIconComponent,
        SparkStackComponent
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
    expect(element.querySelector('div').classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if splitAt is not set', () => {
    component.splitAt = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium');
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'tiny';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@xs');
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s');
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
