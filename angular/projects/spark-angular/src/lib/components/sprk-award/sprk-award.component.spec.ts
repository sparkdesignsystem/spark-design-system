import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkLinkComponent } from '../sprk-link/sprk-link.component';
import { SprkAwardComponent } from './sprk-award.component';
import { SprkToggleComponent } from '../sprk-toggle/sprk-toggle.component';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SprkStackItemDirective } from '../../directives/sprk-stack-item/sprk-stack-item.directive';

import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SprkAwardComponent', () => {
  let component: SprkAwardComponent;
  let fixture: ComponentFixture<SprkAwardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [
        SprkAwardComponent,
        SprkLinkComponent,
        SprkToggleComponent,
        SprkStackComponent,
        SprkStackItemDirective,
        SprkIconComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAwardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set', () => {
    component.splitAt = 'huge';
    fixture.detectChanges();
    expect(element.querySelector('div').classList.toString()).toEqual(
      component.getClasses()
    );
  });

  it('should add the correct class if splitAt is not set', () => {
    component.splitAt = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column'
    );
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'tiny';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-o-Stack--split@xs'
    );
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-o-Stack--split@s'
    );
  });

  it('should add the additionalClasses to imgOne', () => {
    component.additionalClassesImgOne = 'test-img-one';
    fixture.detectChanges();
    expect(element.querySelector('img').classList.toString()).toEqual(
      component.getClassesImgOne()
    );
  });

  it('should add the additionalClasses to imgTwo', () => {
    component.additionalClassesImgTwo = 'test-img-two';
    fixture.detectChanges();
    expect(element.querySelectorAll('img')[1].classList.toString()).toEqual(
      component.getClassesImgTwo()
    );
  });

  it('should add the correct class to images if splitAt is set', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getImgContainerClasses()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--flex@s'
    );
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
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      str
    );
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

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('h2');
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    const testString = null;
    component.idString = testString;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('h2');
    expect(element.getAttribute('data-id')).toBeNull();
  });
});
