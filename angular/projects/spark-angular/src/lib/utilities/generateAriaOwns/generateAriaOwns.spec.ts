import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ElementRef, Component, ViewChild } from '@angular/core';
import { generateAriaOwns } from './generateAriaOwns';

@Component({
  selector: 'sprk-test',
  template: `
    <div #ownerElement></div>
    <div #contentElement></div>
  `,
})
class Test1Component {
  @ViewChild('ownerElement', { static: false }) ownerElement: ElementRef;
  @ViewChild('contentElement', { static: false }) contentElement: ElementRef;
}

describe('generateAriaOwns', () => {
  let component: Test1Component;
  let componentFixture: ComponentFixture<Test1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Test1Component);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should generate id and aria-owns if needed', () => {
    component.ownerElement.nativeElement.removeAttribute('aria-owns');
    component.contentElement.nativeElement.removeAttribute('id');

    generateAriaOwns(
      component.ownerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaOwns = component.ownerElement.nativeElement.getAttribute(
      'aria-owns',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = 'sprk_test_content_1';

    expect(actualId).toEqual(expectedId);
    expect(actualAriaOwns).toEqual(expectedId);
  });

  it('should match aria-owns to existing id if needed', () => {
    const providedId = 'testId';

    component.ownerElement.nativeElement.removeAttribute('aria-owns');
    component.contentElement.nativeElement.id = providedId;

    generateAriaOwns(
      component.ownerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaOwns = component.ownerElement.nativeElement.getAttribute(
      'aria-owns',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = providedId;

    expect(actualId).toEqual(expectedId);
    expect(actualAriaOwns).toEqual(expectedId);
  });

  it('should do nothing if aria-owns and id exist but do not match', () => {
    const providedId = 'testId';
    const providedAriaOwns = 'testOwns';

    component.ownerElement.nativeElement.setAttribute(
      'aria-owns',
      providedAriaOwns,
    );
    component.contentElement.nativeElement.id = providedId;

    generateAriaOwns(
      component.ownerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaOwns = component.ownerElement.nativeElement.getAttribute(
      'aria-owns',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = providedId;

    expect(actualId).toEqual(expectedId);
    expect(actualAriaOwns).toEqual(providedAriaOwns);
    expect(actualId).not.toEqual(actualAriaOwns);
  });

  it('should do nothing if aria-owns exists and id does not', () => {
    const providedAriaOwns = 'testOwns';

    component.ownerElement.nativeElement.setAttribute(
      'aria-owns',
      providedAriaOwns,
    );
    component.contentElement.nativeElement.removeAttribute('id');

    generateAriaOwns(
      component.ownerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaOwns = component.ownerElement.nativeElement.getAttribute(
      'aria-owns',
    );
    const actualId = component.contentElement.nativeElement.id;

    expect(actualId).toEqual('');
    expect(actualAriaOwns).toEqual(providedAriaOwns);
    expect(actualId).not.toEqual(actualAriaOwns);
  });
});
