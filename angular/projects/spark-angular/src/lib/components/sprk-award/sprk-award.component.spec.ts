import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkAwardComponent } from './sprk-award.component';
import { RouterTestingModule } from '@angular/router/testing';
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
      imports: [BrowserAnimationsModule, RouterTestingModule],
      declarations: [
        SprkAwardComponent,
        SprkLinkDirective,
        SprkToggleComponent,
        SprkStackComponent,
        SprkStackItemDirective,
        SprkIconComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set', () => {
    component.splitAt = 'huge';
    fixture.detectChanges();
    expect(element.querySelector('div').classList.toString()).toEqual(
      component.getClasses(),
    );
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'tiny';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-o-Stack--split@xs',
    );
  });

  it('should add the correct class if splitAt is set', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack__item sprk-o-Stack__item--center-column sprk-o-Stack--split@s',
    );
  });

  it('should add the additionalClasses to imgOne', () => {
    component.additionalClassesImgOne = 'test-img-one';
    fixture.detectChanges();
    expect(element.querySelector('img').classList.toString()).toEqual(
      component.getClassesImgOne(),
    );
  });

  it('should add the additionalClasses to imgTwo', () => {
    component.additionalClassesImgTwo = 'test-img-two';
    fixture.detectChanges();
    expect(element.querySelectorAll('img')[1].classList.toString()).toEqual(
      component.getClassesImgTwo(),
    );
  });

  it('should add the correct class to images if splitAt is set', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(component.getImgContainerClasses()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--flex@s',
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
      str,
    );
  });

  it('should set the href given a value in the imgTwoHref Input', () => {
    component.splitAt = 'large';
    component.imgTwoHref = 'https://www.sparkdesignsystem.com/two';
    component.imgTwoSrc = 'https://www.sparkdesignsystem.com/';
    component.imgTwoAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    fixture.detectChanges();
    expect(element.querySelectorAll('a')[1].getAttribute('href')).toEqual(
      'https://www.sparkdesignsystem.com/two',
    );
  });

  it('should set the href given a value in the imgTwoRouterLink Input', () => {
    component.splitAt = 'large';
    component.imgTwoRouterLink = '/test-two';
    component.imgTwoSrc = 'https://www.sparkdesignsystem.com/';
    component.imgTwoAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    fixture.detectChanges();
    expect(element.querySelectorAll('a')[1].getAttribute('href')).toEqual(
      '/test-two',
    );
  });

  it('should set the href given a value in the imgOneHref Input', () => {
    component.splitAt = 'large';
    component.imgOneHref = 'https://www.sparkdesignsystem.com/';
    component.imgOneSrc = 'https://www.sparkdesignsystem.com/';
    component.imgOneAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('href')).toEqual(
      'https://www.sparkdesignsystem.com/',
    );
  });

  it('should set the href given a value in the imgOneRouterLink Input', () => {
    component.splitAt = 'large';
    component.imgOneRouterLink = '/test';
    component.imgOneSrc = 'https://www.sparkdesignsystem.com/';
    component.imgOneAlt = 'placeholder';
    component.title = 'placeholder';
    component.disclaimerTitle = 'placeholder';
    component.disclaimerCopy = 'placeholder';
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('href')).toEqual('/test');
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
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    const testString = null;
    component.idString = testString;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toBeNull();
  });

  it('should respond to updates to title', () => {
    let testString = 'initTitle';
    component.title = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent.trim()).toEqual(testString);

    testString = 'updatedTitle';

    component.title = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent.trim()).toEqual(testString);
  });

  it('should respond to updates to heading', () => {
    let testString = 'initHeading';
    component.heading = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent.trim()).toEqual(testString);

    testString = 'updatedHeading';

    component.heading = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent.trim()).toEqual(testString);
  });

  it('should prefer heading over title', () => {
    component.title = 'title2';
    component.heading = 'heading2';
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent.trim()).toEqual('heading2');
  });

  it('should respond to updates to analyticsStringImgOne', () => {
    let testString = 'test1';
    component.analyticsStringImgOne = testString;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      testString,
    );

    testString = 'test2';
    component.analyticsStringImgOne = testString;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      testString,
    );
  });

  it('should prefer imgOneAnalyticsString over analyticsStringImgOne', () => {
    component.imgOneAnalyticsString = 'testNewInput';
    component.analyticsStringImgOne = 'testOldInput';
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      'testNewInput',
    );
  });

  it('should respond to updates to analyticsStringImgTwo', () => {
    let testString = 'test1';
    component.analyticsStringImgTwo = testString;
    fixture.detectChanges();
    expect(
      element.querySelectorAll('a')[1].getAttribute('data-analytics'),
    ).toEqual(testString);

    testString = 'test2';
    component.analyticsStringImgTwo = testString;
    fixture.detectChanges();
    expect(
      element.querySelectorAll('a')[1].getAttribute('data-analytics'),
    ).toEqual(testString);
  });

  it('should prefer imgTwoAnalyticsString over analyticsStringImgTwo', () => {
    component.imgTwoAnalyticsString = 'testNewInput';
    component.analyticsStringImgTwo = 'testOldInput';
    fixture.detectChanges();
    expect(
      element.querySelectorAll('a')[1].getAttribute('data-analytics'),
    ).toEqual('testNewInput');
  });

  it('should respond to updates to analyticsStringDisclaimer', () => {
    let testString = 'testDisclaimer';
    component.disclaimerCopy = 'foo';
    component.disclaimerTitle = 'bar';
    component.analyticsStringDisclaimer = testString;
    fixture.detectChanges();
    expect(
      element.querySelector('button').getAttribute('data-analytics'),
    ).toEqual(testString);
  });

  it('should prefer disclaimerAnalyticsString over analyticsStringDisclaimer', () => {
    const testOldProp = 'oldTest';
    const testNewProp = 'newTest';
    component.disclaimerCopy = 'foo';
    component.disclaimerTitle = 'bar';
    component.analyticsStringDisclaimer = testOldProp;
    component.disclaimerAnalyticsString = testNewProp;
    fixture.detectChanges();
    expect(
      element.querySelector('button').getAttribute('data-analytics'),
    ).toEqual(testNewProp);
  });

  it('should respond to updates to additionalClassesImgOne', () => {
    let testString = 'testClass';
    component.additionalClassesImgOne = testString;
    fixture.detectChanges();
    expect(element.querySelector('img').classList.contains(testString)).toBe(
      true,
    );

    testString = 'anotherClass';
    component.additionalClassesImgOne = testString;
    fixture.detectChanges();
    expect(element.querySelector('img').classList.contains(testString)).toBe(
      true,
    );
  });

  it('should prefer imgOneAdditionalClasses over additionalClassesImgOne', () => {
    const testOldProp = 'testClass';
    const testNewProp = 'testNewClass';
    component.additionalClassesImgOne = testOldProp;
    component.imgOneAdditionalClasses = testNewProp;
    fixture.detectChanges();
    expect(element.querySelector('img').classList.contains(testNewProp)).toBe(
      true,
    );
    expect(element.querySelector('img').classList.contains(testOldProp)).toBe(
      false,
    );
  });

  it('should respond to updates to additionalClassesImgTwo', () => {
    let testString = 'testClass';
    component.additionalClassesImgTwo = testString;
    fixture.detectChanges();
    expect(
      element.querySelectorAll('img')[1].classList.contains(testString),
    ).toBe(true);

    testString = 'anotherClass';
    component.additionalClassesImgTwo = testString;
    fixture.detectChanges();
    expect(
      element.querySelectorAll('img')[1].classList.contains(testString),
    ).toBe(true);
  });

  it('should prefer imgTwoAdditionalClasses over additionalClassesImgTwo', () => {
    const testOldProp = 'testClass';
    const testNewProp = 'testNewClass';
    component.imgTwoHref = '/test';
    component.additionalClassesImgTwo = testOldProp;
    component.imgTwoAdditionalClasses = testNewProp;
    fixture.detectChanges();
    expect(
      element.querySelectorAll('img')[1].classList.contains(testNewProp),
    ).toBe(true);
    expect(
      element.querySelectorAll('img')[1].classList.contains(testOldProp),
    ).toBe(false);
  });

  it('should only display the toggle if both Inputs are provided', () => {
    fixture.detectChanges();
    expect(element.querySelectorAll('.sprk-c-Toggle').length).toEqual(0);

    component.disclaimerCopy = 'copy';
    fixture.detectChanges();
    expect(element.querySelectorAll('.sprk-c-Toggle').length).toEqual(0);

    component.disclaimerCopy = 'copy';
    component.disclaimerTitle = 'title';
    fixture.detectChanges();
    expect(element.querySelectorAll('.sprk-c-Toggle').length).toEqual(1);
  });
});
