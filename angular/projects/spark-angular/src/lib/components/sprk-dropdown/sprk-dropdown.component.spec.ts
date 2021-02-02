import { Component } from '@angular/core';
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
  let wrappedFixture: ComponentFixture<TestWrapperComponent>;
  let wrapperComponent: TestWrapperComponent;
  let wrappedDropdownComponent: SprkDropdownComponent;
  let wrappedDropdownElement: HTMLElement;
  let wrappedDropdownTriggerElement: HTMLElement;
  let wrappedDropdownTriggerTextElement: HTMLElement;
  let wrappedDropdownIconElement: HTMLElement;

  let fixture: ComponentFixture<SprkDropdownComponent>;
  let component: SprkDropdownComponent;
  let dropdownComponent: SprkDropdownComponent;
  let dropdownElement: HTMLElement;
  let dropdownTriggerElement: HTMLElement;
  let dropdownTriggerTextElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkDropdownComponent,
        SprkIconComponent,
        SprkLinkDirective,
        TestWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    wrappedFixture = TestBed.createComponent(TestWrapperComponent);
    wrappedFixture.detectChanges();
    wrapperComponent = wrappedFixture.componentInstance;

    wrappedDropdownComponent = wrappedFixture.debugElement.query(
      By.directive(SprkDropdownComponent),
    ).componentInstance;
    wrappedDropdownTriggerElement = wrappedFixture.nativeElement.querySelector(
      'a',
    );
    wrappedDropdownIconElement = wrappedFixture.nativeElement.querySelector(
      'svg',
    );
    wrappedDropdownTriggerTextElement = wrappedFixture.nativeElement.querySelector(
      'span',
    );
    wrappedDropdownElement = wrappedFixture.nativeElement.querySelector('div');

    fixture = TestBed.createComponent(SprkDropdownComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    dropdownComponent = wrappedFixture.debugElement.query(
      By.directive(SprkDropdownComponent),
    ).componentInstance;
    dropdownTriggerElement = wrappedFixture.nativeElement.querySelector('a');
    dropdownTriggerTextElement = wrappedFixture.nativeElement.querySelector(
      'span',
    );
    dropdownElement = wrappedFixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(wrappedDropdownComponent).toBeTruthy();
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    wrapperComponent.additionalClasses = 'sprk-u-pam sprk-u-man';

    wrappedFixture.detectChanges();

    expect(wrappedDropdownComponent.getClasses()).toEqual(
      'sprk-c-Dropdown sprk-u-pam sprk-u-man',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    wrapperComponent.idString = testString;
    wrappedFixture.detectChanges();
    expect(wrappedDropdownTriggerElement.getAttribute('data-id')).toEqual(
      testString,
    );
  });

  it('should not add data-id when idString has no value', () => {
    wrapperComponent.idString = null;
    wrappedFixture.detectChanges();
    expect(wrappedDropdownTriggerElement.getAttribute('data-id')).toBeNull();
  });

  it('should open the dropdown on click', () => {
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedDropdownElement = wrappedFixture.nativeElement.querySelector('div');
    expect(wrappedDropdownElement).not.toBeNull();
  });

  it('should close the dropdown on click outside the element', () => {
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedDropdownElement = wrappedFixture.nativeElement.querySelector('div');
    expect(wrappedDropdownElement).not.toBeNull();
    wrappedDropdownElement.ownerDocument.dispatchEvent(new Event('click'));
    expect(wrappedDropdownComponent.isOpen).toEqual(false);
  });

  it('should close the dropdown on focusin outside the element', () => {
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedDropdownElement = wrappedFixture.nativeElement.querySelector('div');
    expect(wrappedDropdownComponent.isOpen).toEqual(true);
    wrappedDropdownElement.ownerDocument.dispatchEvent(new Event('focusin'));
    expect(wrappedDropdownComponent.isOpen).toEqual(false);
  });

  it('should set active on click of a choice on an informational dropdown', () => {
    wrappedFixture.detectChanges();
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
    wrappedFixture.detectChanges();
    dropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    expect(dropdownComponent.isOpen).toEqual(true);
    const listElement = wrappedFixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    expect(dropdownComponent.choices[0]['active']).toEqual(true);
  });

  it('should set active on click of a choice on a base dropdown if active isnt defined initially', () => {
    wrappedFixture.detectChanges();
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
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    expect(wrappedDropdownComponent.isOpen).toEqual(true);
    const listElement = wrappedFixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    expect(wrappedDropdownComponent.choices[0]['active']).toEqual(true);
  });

  it('should not set active on click of a choice on a base dropdown', () => {
    wrappedFixture.detectChanges();
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
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    expect(wrappedDropdownComponent.isOpen).toEqual(true);
    const listElement = wrappedFixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    expect(wrappedDropdownComponent.choices[0]['active']).toEqual(false);
  });

  // TODO: #3800 remove dropdownType tests
  it('should not set active on click with dropdownType="base" (matches default)', () => {
    wrapperComponent.dropdownType = 'base';
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedFixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    const isInformational = wrappedDropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(false);
  });

  it('should not set active on click with variant="default" (matches default)', () => {
    wrapperComponent.variant = 'default';
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedFixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    const isInformational = wrappedDropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(false);
  });

  // TODO: #3800 remove dropdownType tests
  it('should set active on click with dropdownType="informational"', () => {
    wrapperComponent.dropdownType = 'informational';
    wrapperComponent.variant = 'default';
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    wrappedFixture.detectChanges();
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedFixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    const isInformational = wrappedDropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(true);
  });

  // TODO: #3800 remove dropdownType tests
  it('should set active on click with dropdownType="base" and variant="informational"', () => {
    wrapperComponent.dropdownType = 'base';
    wrapperComponent.variant = 'informational';
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    wrappedFixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    wrappedFixture.detectChanges();
    const isInformational = wrappedDropdownComponent.choices[0]['active'];
    expect(isInformational).toEqual(true);
  });

  // TODO: #3800 Remove `additionalTriggerClasses` tests
  it('should set a value if additionalTriggerClasses has a value', () => {
    wrapperComponent.additionalTriggerClasses = 'sprk-u-man';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
  });

  it('should set a value if triggerAdditionalClasses has a value', () => {
    wrapperComponent.triggerAdditionalClasses = 'sprk-u-man';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
  });

  // TODO: #3800 Remove `additionalTriggerClasses` tests
  it('should prefer triggerAdditionalClasses over additionalTriggerClasses', () => {
    wrapperComponent.additionalTriggerClasses = 'oldClass';
    wrapperComponent.triggerAdditionalClasses = 'newClass';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerElement.classList.contains('newClass'),
    ).toEqual(true);
  });

  // TODO: #3800 Remove `additionalTriggerTextClasses` tests
  it('should set a value if additionalTriggerTextClasses has a value', () => {
    wrapperComponent.additionalTriggerTextClasses = 'sprk-u-man';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerTextElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
  });

  it('should set a value if triggerTextAdditionalClasses has a value', () => {
    wrapperComponent.triggerTextAdditionalClasses = 'sprk-u-man';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerTextElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
  });

  // TODO: #3800 Remove `additionalTriggerTextClasses` tests
  it('should prefer triggerTextAdditionalClasses over additionalTriggerTextClasses', () => {
    wrapperComponent.additionalTriggerTextClasses = 'oldClass';
    wrapperComponent.triggerTextAdditionalClasses = 'newClass';
    wrappedFixture.detectChanges();
    expect(
      wrappedDropdownTriggerTextElement.classList.contains('newClass'),
    ).toEqual(true);
  });

  it('should apply aria-label when triggerText is provided', () => {
    wrapperComponent.triggerText = 'test';
    wrapperComponent.screenReaderText = '';
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement
        .querySelector('a')
        .getAttribute('aria-label'),
    ).toEqual('test');
  });

  it('should apply aria-label when screenReaderText is provided', () => {
    wrapperComponent.triggerText = '';
    wrapperComponent.screenReaderText = 'test';
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement
        .querySelector('a')
        .getAttribute('aria-label'),
    ).toEqual('test');
  });

  it('should apply a default aria-label when none is provided', () => {
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement
        .querySelector('a')
        .getAttribute('aria-label'),
    ).toEqual('Choose One');
  });

  it('should apply an aria-label to listbox when title provided', () => {
    wrappedFixture.detectChanges();
    wrapperComponent.title = 'test';
    wrappedDropdownTriggerElement.click();

    wrappedFixture.detectChanges();
    const listBoxAria = wrappedFixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  // TODO: #3800 Remove `heading` tests
  it('should apply an aria-label to listbox when heading provided', () => {
    wrappedFixture.detectChanges();
    wrapperComponent.heading = 'test';
    wrappedDropdownTriggerElement.click();

    wrappedFixture.detectChanges();
    const listBoxAria = wrappedFixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  // TODO: #3800 Remove `heading` tests
  it('should prefer heading over title', () => {
    wrappedFixture.detectChanges();
    wrapperComponent.title = 'title';
    wrapperComponent.heading = 'heading';
    wrappedDropdownTriggerElement.click();

    wrappedFixture.detectChanges();
    const listBoxAria = wrappedFixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('heading');
  });

  it('should apply an aria-label to listbox when screenReaderText is provided', () => {
    wrappedFixture.detectChanges();
    wrapperComponent.screenReaderText = 'test';
    wrappedDropdownTriggerElement.click();

    wrappedFixture.detectChanges();
    const listBoxAria = wrappedFixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  it('should apply a default aria-label to listbox when none is provided', () => {
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();
    const listBoxAria = wrappedFixture.nativeElement
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
    wrappedFixture.detectChanges();

    const triggerTextElement = wrappedFixture.nativeElement.getElementsByTagName(
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
    wrappedFixture.detectChanges();

    const triggerTextElement = wrappedFixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).not.toEqual(
      wrappedDropdownComponent.choices[1].value,
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

    wrappedFixture.detectChanges();

    const triggerTextElement = wrappedFixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).toEqual(
      wrappedDropdownComponent.choices[1].value,
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
    wrappedFixture.detectChanges();

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

    wrappedFixture.detectChanges();

    const triggerTextElement = wrappedFixture.nativeElement.getElementsByTagName(
      'a',
    )[0].firstElementChild;
    expect(triggerTextElement.textContent).toEqual(
      wrappedDropdownComponent.choices[1].value,
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
    wrappedDropdownTriggerElement.click();
    wrappedFixture.detectChanges();

    const triggerTextElement = wrappedFixture.nativeElement.querySelector(
      '[aria-selected="true"]',
    );
    expect(triggerTextElement.textContent.trim()).toEqual(
      wrappedDropdownComponent.choices[1].value,
    );
  });

  // TODO: #3800 remove additionalIconClasses tests
  it('should correctly add classes from additionalIconClasses', () => {
    wrapperComponent.additionalIconClasses = 'testClass';
    wrappedFixture.detectChanges();

    expect(wrappedDropdownIconElement.classList.toString()).toContain(
      'testClass',
    );
  });

  it('should correctly add classes from iconAdditionalClasses', () => {
    wrapperComponent.iconAdditionalClasses = 'testClass';
    wrappedFixture.detectChanges();

    expect(wrappedDropdownIconElement.classList.toString()).toContain(
      'testClass',
    );
  });

  // TODO: #3800 remove additionalIconClasses tests
  it('should prefer iconAdditionalClasses over additionalIconClasses', () => {
    wrapperComponent.additionalIconClasses = 'oldClass';
    wrapperComponent.iconAdditionalClasses = 'newClass';
    wrappedFixture.detectChanges();

    expect(wrappedDropdownIconElement.classList.toString()).not.toContain(
      'oldClass',
    );
    expect(wrappedDropdownIconElement.classList.toString()).toContain(
      'newClass',
    );
  });

  // TODO: #3800 remove triggerIconType tests
  it('should add icon type from triggerIconType', () => {
    wrapperComponent.triggerIconType = 'access';
    wrappedFixture.detectChanges();

    expect(
      wrappedDropdownIconElement
        .querySelector('use')
        .getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  it('should add icon type from triggerIconName', () => {
    wrapperComponent.triggerIconName = 'access';
    wrappedFixture.detectChanges();

    expect(
      wrappedDropdownIconElement
        .querySelector('use')
        .getAttribute('xlink:href'),
    ).toEqual('#access');
  });

  // TODO: #3800 remove triggerIconType tests
  it('should prefer triggerIconName over triggerIconType', () => {
    wrapperComponent.triggerIconType = 'bell';
    wrapperComponent.triggerIconName = 'access';
    wrappedFixture.detectChanges();

    expect(
      wrappedDropdownIconElement
        .querySelector('use')
        .getAttribute('xlink:href'),
    ).toEqual('#access');
  });
});
