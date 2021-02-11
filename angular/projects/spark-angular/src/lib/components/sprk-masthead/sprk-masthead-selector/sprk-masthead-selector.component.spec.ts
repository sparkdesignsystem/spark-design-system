import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SprkIconComponent } from '../../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../../directives/sprk-link/sprk-link.directive';
import { SprkMastheadSelectorComponent } from './sprk-masthead-selector.component';
import { ISprkMastheadSelectorChoice } from './sprk-masthead-selector.interfaces';

@Component({
  template: `
    <sprk-masthead-selector
      [triggerText]="triggerText"
      [choices]="choices"
      [triggerIconName]="triggerIconName"
      [idString]="idString"
      [analyticsString]="analyticsString"
      [selector]="selector"
    >
    </sprk-masthead-selector>
  `,
})
class TestWrapperComponent {
  triggerText: string;
  choices: ISprkMastheadSelectorChoice[];
  idString: string;
  triggerIconName: string;
  analyticsString: string;
  selector: string;
}

describe('SprkMastheadSelectorComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let wrapperComponent: TestWrapperComponent;
  let dropdownElement: HTMLElement;
  let dropdownIconElement: HTMLElement;
  let dropdownComponent: SprkMastheadSelectorComponent;
  let dropdownTriggerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SprkMastheadSelectorComponent,
        SprkIconComponent,
        SprkLinkDirective,
        TestWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    fixture.detectChanges();
    wrapperComponent = fixture.componentInstance;

    dropdownComponent = fixture.debugElement.query(
      By.directive(SprkMastheadSelectorComponent),
    ).componentInstance;
    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
    dropdownIconElement = fixture.nativeElement.querySelector('svg');
    dropdownElement = fixture.nativeElement.querySelector('div');

    dropdownComponent = fixture.debugElement.query(
      By.directive(SprkMastheadSelectorComponent),
    ).componentInstance;
    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
  });

  it('should create', () => {
    expect(dropdownComponent).toBeTruthy();
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    wrapperComponent.idString = testString;
    fixture.detectChanges();
    expect(dropdownTriggerElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    wrapperComponent.idString = null;
    fixture.detectChanges();
    expect(dropdownTriggerElement.getAttribute('data-id')).toBeNull();
  });

  it('should add data-analytics when analyticsString has a value', () => {
    const testString = 'element-id';
    wrapperComponent.analyticsString = testString;
    fixture.detectChanges();
    expect(dropdownTriggerElement.getAttribute('data-analytics')).toEqual(
      testString,
    );
  });

  it('should not add data-analytics when analyticsString has no value', () => {
    wrapperComponent.analyticsString = null;
    fixture.detectChanges();
    expect(dropdownTriggerElement.getAttribute('data-analytics')).toBeNull();
  });

  it('should open the dropdown on click', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    dropdownElement = fixture.nativeElement.querySelector('div');
    expect(dropdownElement).not.toBeNull();
  });

  it('should close the dropdown on click outside the element', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    dropdownElement = fixture.nativeElement.querySelector('div');
    expect(dropdownElement).not.toBeNull();
    dropdownElement.ownerDocument.dispatchEvent(new Event('click'));
    expect(dropdownComponent.isOpen).toEqual(false);
  });

  it('should close the dropdown on focusin outside the element', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    dropdownElement = fixture.nativeElement.querySelector('div');
    expect(dropdownComponent.isOpen).toEqual(true);
    dropdownElement.ownerDocument.dispatchEvent(new Event('focusin'));
    expect(dropdownComponent.isOpen).toEqual(false);
  });

  it('should set active on click', () => {
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    dropdownTriggerElement.click();
    fixture.detectChanges();
    fixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const isInformational = dropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(true);
  });

  it('should set href value if routerLink is set on choice item', () => {
    fixture.detectChanges();
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
        routerLink: '/router-test',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
      },
    ];
    dropdownTriggerElement.click();
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    // TODO: #3835 Create separate classes for sprk-masthead-selector
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    expect(listLink.getAttribute('href')).toEqual('/router-test');
  });

  it('should set href value if href is set on choice item', () => {
    fixture.detectChanges();
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
        href: '/test',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
      },
    ];
    dropdownTriggerElement.click();
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    // TODO: #3835 Create separate classes for sprk-masthead-selector
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    expect(listLink.getAttribute('href')).toEqual('/test');
  });

  it('should apply aria-label when triggerText is provided', () => {
    wrapperComponent.triggerText = 'test';
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('a').getAttribute('aria-label'),
    ).toEqual('test');
  });

  it('should apply a default aria-label when none is provided', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('a').getAttribute('aria-label'),
    ).toEqual('Choose One');
  });

  it('should apply a default aria-label to listbox when none is provided', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('My Choices');
  });

  it('should change trigger text if default choice option specified', () => {
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
        isDefault: true,
      },
    ];

    fixture.detectChanges();

    const triggerTextElement = fixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).toEqual(
      dropdownComponent.choices[1].value,
    );
  });

  it('should change trigger text if choices changed', () => {
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
        isDefault: true,
      },
    ];
    fixture.detectChanges();

    wrapperComponent.choices = [
      {
        text: 'First Option',
        value: 'First Option',
      },
      {
        text: 'Second Option',
        value: 'Second Option',
        isDefault: true,
      },
    ];

    fixture.detectChanges();

    const triggerTextElement = fixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).toEqual(
      dropdownComponent.choices[1].value,
    );
  });

  it('should set active: true for default choice', () => {
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
        active: true,
      },
      {
        text: 'Option 2',
        value: 'Option 2',
        active: false,
        isDefault: true,
      },
    ];
    dropdownTriggerElement.click();
    fixture.detectChanges();

    const triggerTextElement = fixture.nativeElement.querySelector(
      '[aria-selected="true"]',
    );
    expect(triggerTextElement.textContent.trim()).toEqual(
      dropdownComponent.choices[1].value,
    );
  });

  it('should add icon type from triggerIconName', () => {
    wrapperComponent.triggerIconName = 'access';
    fixture.detectChanges();

    expect(
      dropdownIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  it('should not render empty paragraphs', () => {
    fixture.detectChanges();
    wrapperComponent.choices = [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information',
        },
        value: 'Choice Title 1',
        active: false,
      },
    ];
    fixture.detectChanges();
    dropdownTriggerElement.click();
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    let paragraphs = fixture.nativeElement.querySelectorAll('p');
    expect(paragraphs.length).toEqual(3);

    wrapperComponent.choices = [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
        },
        value: 'Choice Title 1',
        active: false,
      },
    ];
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    paragraphs = fixture.nativeElement.querySelectorAll('p');
    expect(paragraphs.length).toEqual(2);
  });

  it('should set dropdown title to selector', () => {
    wrapperComponent.selector = 'test';
    fixture.detectChanges();
    dropdownTriggerElement.click();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.sprk-c-Dropdown__title')
        .textContent,
    ).toEqual('test');
  });
});
