import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkAwardComponent } from './sprk-award.component';
import { SprkToggleComponent } from '../sprk-toggle/sprk-toggle.component';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SprkStackItemDirective } from '../../directives/sprk-stack-item/sprk-stack-item.directive';
import { Component } from '@angular/core';

import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';

// @Component({
//   selector: `sprk-test`,
//   template: ` <sprk-award [title]="title" [heading]="heading"></sprk-award>`,
// })
// class WrappedAwardComponent {
//   title: string; // = '';
//   heading: string; // = '';
// }

describe('SprkAwardComponent', () => {
  let component: SprkAwardComponent;
  let fixture: ComponentFixture<SprkAwardComponent>;
  let element: HTMLElement;

  // let wrappedComponent: WrappedAwardComponent;
  // let wrappedFixture: ComponentFixture<WrappedAwardComponent>;
  // let wrappedElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        SprkAwardComponent,
        SprkLinkDirective,
        SprkToggleComponent,
        SprkStackComponent,
        SprkStackItemDirective,
        SprkIconComponent,
        // WrappedAwardComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAwardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();

    // wrappedFixture = TestBed.createComponent(WrappedAwardComponent);
    // wrappedComponent = wrappedFixture.componentInstance;
    // wrappedElement = wrappedFixture.nativeElement.querySelector('div');
    // wrappedFixture.detectChanges();
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

  it('should respond to updates to title', () => {
    let testString = 'initTitle';
    component.title = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toEqual(testString);

    testString = 'updatedTitle';

    component.title = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toEqual(testString);
  });

  it('should respond to updates to heading', () => {
    let testString = 'initHeading';
    component.heading = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toEqual(testString);

    testString = 'updatedHeading';

    component.heading = testString;
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toEqual(testString);
  });

  it('should prefer heading over title', () => {
    component.title = 'title2';
    component.heading = 'heading2';
    fixture.detectChanges();
    expect(element.querySelector('h2').textContent).toEqual('heading2');
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

  // it('should prefer imgOneAnalyticsString over analyticsStringImgOne', () => {
  //   component.imgOneAnalyticsString = 'testNewInput';
  //   component.analyticsStringImgOne = 'testOldInput';
  //   fixture.detectChanges;
  //   console.log(element.outerHTML)
  //   expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
  //     'testNewInput',
  //   );
  // });

  it('should respond to updates to analyticsStringImgTwo', () => {});

  it('should prefer imgTwoAnalyticsString over analyticsStringImgTwo', () => {});

  // it('should respond to updates to analyticsStringDisclaimer', () => {
  //   let testString = "testDisclaimer";
  //   // disclaimer inputs aren't showing up?
  //   component.disclaimerCopy="foo";
  //   component.disclaimerTitle="bar";
  //   component.analyticsStringDisclaimer = testString;
  //   fixture.detectChanges;
  //   console.log(element.outerHTML);
  //   expect(element.querySelector('button').getAttribute('data-analytics')).toEqual(
  //     testString,
  //   );
  // });

  it('should prefer disclaimerAnalyticsString over analyticsStringDisclaimer', () => {});

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
