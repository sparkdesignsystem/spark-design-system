import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { ISprkDropdownChoice } from './sprk-dropdown.interfaces';
@Component({
  template: `
    <sprk-dropdown
      [dropdownType]="dropdownType"
      [variant]="variant"
      [triggerText]="triggerText"
      [choices]="choices"
      [additionalClasses]="additionalClasses"
      [idString]="idString"
      [additionalTriggerClasses]="additionalTriggerClasses"
      [triggerAdditionalClasses]="triggerAdditionalClasses"
      [additionalTriggerTextClasses]="additionalTriggerTextClasses"
      [triggerTextAdditionalClasses]="triggerTextAdditionalClasses"
      [additionalIconClasses]="additionalIconClasses"
      [iconAdditionalClasses]="iconAdditionalClasses"
      [screenReaderText]="screenReaderText"
      [triggerIconType]="triggerIconType"
      [triggerIconName]="triggerIconName"
      [title]="title"
      [heading]="heading"
    >
    </sprk-dropdown>
  `,
})
class TestWrapperComponent {
  dropdownType: string;
  variant: string;
  triggerText: string;
  choices: ISprkDropdownChoice[];
  additionalClasses: string;
  idString: string;
  additionalTriggerClasses: string;
  additionalTriggerTextClasses: string;
  triggerAdditionalClasses: string;
  triggerTextAdditionalClasses: string;
  additionalIconClasses: string;
  iconAdditionalClasses: string;
  triggerIconType: string;
  triggerIconName: string;
  screenReaderText: string;
  title: string;
  heading: string;
}

describe('SprkDropdownComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let wrapperComponent: TestWrapperComponent;
  let dropdownElement: HTMLElement;
  let dropdownTriggerTextElement: HTMLElement;
  let dropdownIconElement: HTMLElement;
  let dropdownComponent: SprkDropdownComponent;
  let dropdownTriggerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SprkDropdownComponent,
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
      By.directive(SprkDropdownComponent),
    ).componentInstance;
    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
    dropdownIconElement = fixture.nativeElement.querySelector('svg');
    dropdownTriggerTextElement = fixture.nativeElement.querySelector('span');
    dropdownElement = fixture.nativeElement.querySelector('div');

    dropdownComponent = fixture.debugElement.query(
      By.directive(SprkDropdownComponent),
    ).componentInstance;
    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
  });

  it('should create', () => {
    expect(dropdownComponent).toBeTruthy();
  });

  it('should have the correct base classes on dropdown content', () => {
    expect(dropdownComponent.getClasses()).toEqual('sprk-c-Dropdown');
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    wrapperComponent.additionalClasses = 'sprk-u-pam sprk-u-man';

    fixture.detectChanges();

    expect(dropdownComponent.getClasses()).toEqual(
      'sprk-c-Dropdown sprk-u-pam sprk-u-man',
    );
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

  it('should set active on click of a choice on an informational dropdown', () => {
    fixture.detectChanges();
    wrapperComponent.variant = 'informational';
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
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropdownComponent.choices[0]['active']).toEqual(true);
  });

  it('should set active on click of a choice on an informational dropdown if active is not defined initially', () => {
    fixture.detectChanges();
    wrapperComponent.variant = 'informational';
    wrapperComponent.choices = [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information',
        },
        value: 'Choice Title 1',
      },
    ];
    dropdownTriggerElement.click();
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropdownComponent.choices[0]['active']).toEqual(true);
  });

  it('should not set active on click of a choice on a base dropdown', () => {
    fixture.detectChanges();
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
      },
    ];
    dropdownTriggerElement.click();
    fixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropdownComponent.choices[0]['active']).toEqual(false);
  });

  // TODO: #3800 remove dropdownType tests
  it('should set active on click with dropdownType="informational"', () => {
    wrapperComponent.dropdownType = 'informational';
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    fixture.detectChanges();
    dropdownTriggerElement.click();
    fixture.detectChanges();
    fixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const isInformational = dropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(true);
  });

  // TODO: #3800 remove dropdownType tests
  it('should set active on click with dropdownType="base" and variant="informational"', () => {
    wrapperComponent.dropdownType = 'base';
    wrapperComponent.variant = 'informational';
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

  // TODO: #3800 Remove `additionalTriggerClasses` tests
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
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropdownComponent.choices[0]['active']).toEqual(false);
    expect(listLink.getAttribute('href')).toEqual('/test');
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
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    expect(listLink.getAttribute('href')).toEqual('/router-test');
  });

  it('should set a value if triggerAdditionalClasses has a value', () => {
    wrapperComponent.triggerAdditionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  // TODO: #3800 Remove `additionalTriggerClasses` tests
  it('should prefer triggerAdditionalClasses over additionalTriggerClasses', () => {
    wrapperComponent.additionalTriggerClasses = 'oldClass';
    wrapperComponent.triggerAdditionalClasses = 'newClass';
    fixture.detectChanges();
    expect(dropdownTriggerElement.classList.contains('newClass')).toEqual(true);
  });

  // TODO: #3800 Remove `additionalTriggerTextClasses` tests
  it('should set a value if additionalTriggerTextClasses has a value', () => {
    wrapperComponent.additionalTriggerTextClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerTextElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  it('should set a value if triggerTextAdditionalClasses has a value', () => {
    wrapperComponent.triggerTextAdditionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerTextElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  // TODO: #3800 Remove `additionalTriggerTextClasses` tests
  it('should prefer triggerTextAdditionalClasses over additionalTriggerTextClasses', () => {
    wrapperComponent.additionalTriggerTextClasses = 'oldClass';
    wrapperComponent.triggerTextAdditionalClasses = 'newClass';
    fixture.detectChanges();
    expect(dropdownTriggerTextElement.classList.contains('newClass')).toEqual(
      true,
    );
  });

  it('should apply aria-label when triggerText is provided', () => {
    wrapperComponent.triggerText = 'test';
    wrapperComponent.screenReaderText = '';
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('a').getAttribute('aria-label'),
    ).toEqual('test');
  });

  it('should apply aria-label when screenReaderText is provided', () => {
    wrapperComponent.triggerText = '';
    wrapperComponent.screenReaderText = 'test';
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

  // TODO: #3800 Remove `title` tests
  it('should apply an aria-label to listbox when title provided', () => {
    fixture.detectChanges();
    wrapperComponent.title = 'test';
    dropdownTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  it('should apply an aria-label to listbox when heading provided', () => {
    fixture.detectChanges();
    wrapperComponent.heading = 'test';
    dropdownTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  // TODO: #3800 Remove `title` tests
  it('should prefer heading over title', () => {
    fixture.detectChanges();
    wrapperComponent.title = 'title';
    wrapperComponent.heading = 'heading';
    dropdownTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('heading');
  });

  it('should apply an aria-label to listbox when screenReaderText is provided', () => {
    fixture.detectChanges();
    wrapperComponent.screenReaderText = 'test';
    dropdownTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  it('should apply a default aria-label to listbox when none is provided', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('My Choices');
  });

  it('should not change trigger text if default choice option was not set', () => {
    const expectedTriggerText = 'Make a selection...';

    wrapperComponent.variant = 'informational';
    wrapperComponent.choices = [
      {
        text: 'Option 1',
        value: 'Option 1',
      },
      {
        text: 'Option 2',
        value: 'Option 2',
      },
    ];
    wrapperComponent.triggerText = expectedTriggerText;
    fixture.detectChanges();

    const triggerTextElement = fixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).toEqual(expectedTriggerText);
  });

  it('should not change trigger text if default choice option specified, but type is not "informational"', () => {
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
    expect(triggerTextElement.textContent).not.toEqual(
      dropdownComponent.choices[1].value,
    );
  });

  it('should change trigger text if default choice option specified', () => {
    wrapperComponent.variant = 'informational';
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
    wrapperComponent.variant = 'informational';
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
    wrapperComponent.variant = 'informational';
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

  // TODO: #3800 remove additionalIconClasses tests
  it('should correctly add classes from additionalIconClasses', () => {
    wrapperComponent.additionalIconClasses = 'testClass';
    fixture.detectChanges();

    expect(dropdownIconElement.classList.toString()).toContain('testClass');
  });

  it('should correctly add classes from iconAdditionalClasses', () => {
    wrapperComponent.iconAdditionalClasses = 'testClass';
    fixture.detectChanges();

    expect(dropdownIconElement.classList.toString()).toContain('testClass');
  });

  // TODO: #3800 remove additionalIconClasses tests
  it('should prefer iconAdditionalClasses over additionalIconClasses', () => {
    wrapperComponent.additionalIconClasses = 'oldClass';
    wrapperComponent.iconAdditionalClasses = 'newClass';
    fixture.detectChanges();

    expect(dropdownIconElement.classList.toString()).not.toContain('oldClass');
    expect(dropdownIconElement.classList.toString()).toContain('newClass');
  });

  // TODO: #3800 remove triggerIconType tests
  it('should add icon type from triggerIconType', () => {
    wrapperComponent.triggerIconType = 'access';
    fixture.detectChanges();

    expect(
      dropdownIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  it('should add icon type from triggerIconName', () => {
    wrapperComponent.triggerIconName = 'access';
    fixture.detectChanges();

    expect(
      dropdownIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  // TODO: #3800 remove triggerIconType tests
  it('should prefer triggerIconName over triggerIconType', () => {
    wrapperComponent.triggerIconType = 'bell';
    wrapperComponent.triggerIconName = 'access';
    fixture.detectChanges();

    expect(
      dropdownIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  it('should not render empty paragraphs', () => {
    fixture.detectChanges();
    wrapperComponent.variant = 'informational';
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
});
