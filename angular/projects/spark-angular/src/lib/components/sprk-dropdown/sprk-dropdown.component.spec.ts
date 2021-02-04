import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { ISprkDropdownChoice } from './sprk-dropdown.interfaces';

describe('SprkDropdownComponent', () => {
  let wrapperComponent: TestWrapperComponent;
  let dropDownComponent: SprkDropdownComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let dropdownElement: HTMLElement;
  let dropdownTriggerElement: HTMLElement;
  let dropdownTriggerTextElement: HTMLElement;

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
    dropDownComponent = fixture.debugElement.query(
      By.directive(SprkDropdownComponent),
    ).componentInstance;

    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
    dropdownTriggerTextElement = fixture.nativeElement.querySelector('span');
    dropdownElement = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(dropDownComponent).toBeTruthy();
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    wrapperComponent.additionalClasses = 'sprk-u-pam sprk-u-man';

    fixture.detectChanges();

    expect(dropDownComponent.getClasses()).toEqual(
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
    expect(dropDownComponent.isOpen).toEqual(false);
  });

  it('should close the dropdown on focusin outside the element', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    dropdownElement = fixture.nativeElement.querySelector('div');
    expect(dropDownComponent.isOpen).toEqual(true);
    dropdownElement.ownerDocument.dispatchEvent(new Event('focusin'));
    expect(dropDownComponent.isOpen).toEqual(false);
  });

  it('should set active on click of a choice on an informational dropdown', () => {
    fixture.detectChanges();
    wrapperComponent.dropdownType = 'informational';
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
    expect(dropDownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropDownComponent.choices[0]['active']).toEqual(true);
  });

  it('should set active on click of a choice on a base dropdown if active isnt defined initially', () => {
    fixture.detectChanges();
    wrapperComponent.dropdownType = 'informational';
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
    expect(dropDownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropDownComponent.choices[0]['active']).toEqual(true);
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
    expect(dropDownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropDownComponent.choices[0]['active']).toEqual(false);
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
    expect(dropDownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropDownComponent.choices[0]['active']).toEqual(false);
    expect(listLink.getAttribute('href')).toEqual('/test');
  });

  it('should href value if routerLink is set on choice item', () => {
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
    expect(dropDownComponent.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    const listLink = fixture.nativeElement.querySelector(
      '.sprk-c-Dropdown__link',
    );
    listElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(dropDownComponent.choices[0]['active']).toEqual(false);
    expect(listLink.getAttribute('href')).toEqual('/router-test');
  });

  it('should set a value if additionalTriggerClasses has a value', () => {
    wrapperComponent.additionalTriggerClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerElement.classList.contains('sprk-u-man')).toEqual(
      true,
    );
  });

  it('should set a value if additionalTriggerTextClasses has a value', () => {
    wrapperComponent.additionalTriggerTextClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerTextElement.classList.contains('sprk-u-man')).toEqual(
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

    wrapperComponent.dropdownType = 'informational';
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
      dropDownComponent.choices[1].value,
    );
  });

  it('should change trigger text if default choice option specified', () => {
    wrapperComponent.dropdownType = 'informational';
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
      dropDownComponent.choices[1].value,
    );
  });

  it('should change trigger text if choices changed', () => {
    wrapperComponent.dropdownType = 'informational';
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
      dropDownComponent.choices[1].value,
    );
  });

  it('should set active: true for default choice', () => {
    wrapperComponent.dropdownType = 'informational';
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
      dropDownComponent.choices[1].value,
    );
  });
});

@Component({
  template: `
    <sprk-dropdown
      [dropdownType]="dropdownType"
      [triggerText]="triggerText"
      [choices]="choices"
      [additionalClasses]="additionalClasses"
      [idString]="idString"
      [additionalTriggerClasses]="additionalTriggerClasses"
      [additionalTriggerTextClasses]="additionalTriggerTextClasses"
      [screenReaderText]="screenReaderText"
      [title]="title"
    >
    </sprk-dropdown>
  `,
})
class TestWrapperComponent {
  dropdownType: string;
  triggerText: string;
  choices: ISprkDropdownChoice[];
  additionalClasses: string;
  idString: string;
  additionalTriggerClasses: string;
  additionalTriggerTextClasses: string;
  screenReaderText: string;
  title: string;
}
