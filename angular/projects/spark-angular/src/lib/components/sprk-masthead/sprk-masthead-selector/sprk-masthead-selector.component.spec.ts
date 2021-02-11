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
      [additionalClasses]="additionalClasses"
      [idString]="idString"
      [triggerAdditionalClasses]="triggerAdditionalClasses"
      [triggerTextAdditionalClasses]="triggerTextAdditionalClasses"
      [iconAdditionalClasses]="iconAdditionalClasses"
      [screenReaderText]="screenReaderText"
      [triggerIconName]="triggerIconName"
      [heading]="heading"
    >
    </sprk-masthead-selector>
  `,
})
class TestWrapperComponent {
  triggerText: string;
  choices: ISprkMastheadSelectorChoice[];
  additionalClasses: string;
  idString: string;
  triggerAdditionalClasses: string;
  triggerTextAdditionalClasses: string;
  iconAdditionalClasses: string;
  triggerIconName: string;
  screenReaderText: string;
  heading: string;
}

describe('SprkMastheadSelectorComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;
  let wrapperComponent: TestWrapperComponent;
  let mastheadSelectorElement: HTMLElement;
  let mastheadSelectorTriggerTextElement: HTMLElement;
  let mastheadSelectorIconElement: HTMLElement;
  let mastheadSelectorComponent: SprkMastheadSelectorComponent;
  let mastheadSelectorTriggerElement: HTMLElement;

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

    mastheadSelectorComponent = fixture.debugElement.query(
      By.directive(SprkMastheadSelectorComponent),
    ).componentInstance;
    mastheadSelectorTriggerElement = fixture.nativeElement.querySelector('a');
    mastheadSelectorIconElement = fixture.nativeElement.querySelector('svg');
    mastheadSelectorTriggerTextElement = fixture.nativeElement.querySelector(
      'span',
    );
    mastheadSelectorElement = fixture.nativeElement.querySelector('div');

    mastheadSelectorComponent = fixture.debugElement.query(
      By.directive(SprkMastheadSelectorComponent),
    ).componentInstance;
    mastheadSelectorTriggerElement = fixture.nativeElement.querySelector('a');
  });

  it('should create', () => {
    expect(mastheadSelectorComponent).toBeTruthy();
  });

  it('should have the correct base classes on Masthead Selector content', () => {
    expect(mastheadSelectorComponent.getClasses()).toEqual(
      'sprk-c-Dropdown sprk-c-Masthead__selector-dropdown',
    );
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    wrapperComponent.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(mastheadSelectorComponent.getClasses()).toEqual(
      'sprk-c-Dropdown sprk-c-Masthead__selector-dropdown sprk-u-pam sprk-u-man',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    wrapperComponent.idString = testString;
    fixture.detectChanges();
    expect(mastheadSelectorTriggerElement.getAttribute('data-id')).toEqual(
      testString,
    );
  });

  it('should not add data-id when idString has no value', () => {
    wrapperComponent.idString = null;
    fixture.detectChanges();
    expect(mastheadSelectorTriggerElement.getAttribute('data-id')).toBeNull();
  });

  it('should open the Masthead Selector on click', () => {
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    mastheadSelectorElement = fixture.nativeElement.querySelector('div');
    expect(mastheadSelectorElement).not.toBeNull();
  });

  it('should close the Masthead Selector on click outside the element', () => {
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    mastheadSelectorElement = fixture.nativeElement.querySelector('div');
    expect(mastheadSelectorElement).not.toBeNull();
    mastheadSelectorElement.ownerDocument.dispatchEvent(new Event('click'));
    expect(mastheadSelectorComponent.isOpen).toEqual(false);
  });

  it('should close the Masthead Selector on focusin outside the element', () => {
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    mastheadSelectorElement = fixture.nativeElement.querySelector('div');
    expect(mastheadSelectorComponent.isOpen).toEqual(true);
    mastheadSelectorElement.ownerDocument.dispatchEvent(new Event('focusin'));
    expect(mastheadSelectorComponent.isOpen).toEqual(false);
  });

  it('should set active on click', () => {
    wrapperComponent.choices = [{ text: 'asdf', value: 'asdf' }];
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    fixture.nativeElement
      .querySelectorAll('li')[0]
      .dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(mastheadSelectorComponent.choices[0]['active']).toEqual(true);
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
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    expect(mastheadSelectorComponent.isOpen).toEqual(true);
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

  it('should set a value if triggerAdditionalClasses has a value', () => {
    wrapperComponent.triggerAdditionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(
      mastheadSelectorTriggerElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
  });

  it('should set a value if triggerTextAdditionalClasses has a value', () => {
    wrapperComponent.triggerTextAdditionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(
      mastheadSelectorTriggerTextElement.classList.contains('sprk-u-man'),
    ).toEqual(true);
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

  it('should apply an aria-label to listbox when heading provided', () => {
    fixture.detectChanges();
    wrapperComponent.heading = 'test';
    mastheadSelectorTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  it('should apply an aria-label to listbox when screenReaderText is provided', () => {
    fixture.detectChanges();
    wrapperComponent.screenReaderText = 'test';
    mastheadSelectorTriggerElement.click();

    fixture.detectChanges();
    const listBoxAria = fixture.nativeElement
      .querySelector('.sprk-c-Dropdown__links')
      .getAttribute('aria-label');
    expect(listBoxAria).toEqual('test');
  });

  it('should apply a default aria-label to listbox when none is provided', () => {
    mastheadSelectorTriggerElement.click();
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
      mastheadSelectorComponent.choices[1].value,
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
      mastheadSelectorComponent.choices[1].value,
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
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();

    const triggerTextElement = fixture.nativeElement.querySelector(
      '[aria-selected="true"]',
    );
    expect(triggerTextElement.textContent.trim()).toEqual(
      mastheadSelectorComponent.choices[1].value,
    );
  });

  it('should correctly add classes from iconAdditionalClasses', () => {
    wrapperComponent.iconAdditionalClasses = 'testClass';
    fixture.detectChanges();

    expect(mastheadSelectorIconElement.classList.toString()).toContain(
      'testClass',
    );
  });

  it('should add icon type from triggerIconName', () => {
    wrapperComponent.triggerIconName = 'access';
    fixture.detectChanges();

    expect(
      mastheadSelectorIconElement
        .querySelector('use')
        .getAttribute('xlink:href'),
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
    mastheadSelectorTriggerElement.click();
    fixture.detectChanges();
    expect(mastheadSelectorComponent.isOpen).toEqual(true);
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
    expect(mastheadSelectorComponent.isOpen).toEqual(true);
    paragraphs = fixture.nativeElement.querySelectorAll('p');
    expect(paragraphs.length).toEqual(2);
  });
});
