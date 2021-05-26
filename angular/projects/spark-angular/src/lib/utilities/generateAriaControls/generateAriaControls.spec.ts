import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ElementRef, Component, ViewChild } from '@angular/core';
import { generateAriaControls } from './generateAriaControls';

@Component({
  selector: 'sprk-test',
  template: `
    <div #triggerElement></div>
    <div #contentElement></div>
  `,
})
class Test1Component {
  @ViewChild('triggerElement', { static: false }) triggerElement: ElementRef;
  @ViewChild('contentElement', { static: false }) contentElement: ElementRef;
}

describe('generateAriaControls', () => {
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

  it('should generate id and aria-controls if needed', () => {
    component.triggerElement.nativeElement.removeAttribute('aria-controls');
    component.contentElement.nativeElement.removeAttribute('id');

    generateAriaControls(
      component.triggerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaControls = component.triggerElement.nativeElement.getAttribute(
      'aria-controls',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = 'sprk_test_content_1';

    expect(actualId).toEqual(expectedId);
    expect(actualAriaControls).toEqual(expectedId);
  });

  it('should match aria-controls to existing id if needed', () => {
    const providedId = 'testId';

    component.triggerElement.nativeElement.removeAttribute('aria-controls');
    component.contentElement.nativeElement.id = providedId;

    generateAriaControls(
      component.triggerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaControls = component.triggerElement.nativeElement.getAttribute(
      'aria-controls',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = providedId;

    expect(actualId).toEqual(expectedId);
    expect(actualAriaControls).toEqual(expectedId);
  });

  it('should do nothing if aria-controls and id exist but do not match', () => {
    const providedId = 'testId';
    const providedAriaControls = 'testControls';

    component.triggerElement.nativeElement.setAttribute(
      'aria-controls',
      providedAriaControls,
    );
    component.contentElement.nativeElement.id = providedId;

    generateAriaControls(
      component.triggerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaControls = component.triggerElement.nativeElement.getAttribute(
      'aria-controls',
    );
    const actualId = component.contentElement.nativeElement.id;
    const expectedId = providedId;

    expect(actualId).toEqual(expectedId);
    expect(actualAriaControls).toEqual(providedAriaControls);
    expect(actualId).not.toEqual(actualAriaControls);
  });

  it('should do nothing if aria-controls exists and id does not', () => {
    const providedAriaControls = 'testControls';

    component.triggerElement.nativeElement.setAttribute(
      'aria-controls',
      providedAriaControls,
    );
    component.contentElement.nativeElement.removeAttribute('id');

    generateAriaControls(
      component.triggerElement.nativeElement,
      component.contentElement.nativeElement,
      'test',
    );

    const actualAriaControls = component.triggerElement.nativeElement.getAttribute(
      'aria-controls',
    );
    const actualId = component.contentElement.nativeElement.id;

    expect(actualId).toEqual('');
    expect(actualAriaControls).toEqual(providedAriaControls);
    expect(actualId).not.toEqual(actualAriaControls);
  });
});
