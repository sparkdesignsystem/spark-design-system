import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkComponent } from '../sprk-link/sprk-link.component';
import { SprkDropdownComponent } from './sprk-dropdown.component';

describe('SprkDropdownComponent', () => {
  let component: SprkDropdownComponent;
  let fixture: ComponentFixture<SprkDropdownComponent>;
  let dropdownElement: HTMLElement;
  let dropdownTriggerElement: HTMLElement;
  let dropdownTriggerTextElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SprkDropdownComponent,
        SprkIconComponent,
        SprkLinkComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dropdownTriggerElement = fixture.nativeElement.querySelector('a');
    dropdownTriggerTextElement = fixture.nativeElement.querySelector('span');
    dropdownElement = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes if additionalClasses are supplied', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual(
      'sprk-c-Dropdown sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(dropdownTriggerElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
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
    expect(component.isOpen).toEqual(false);
  });

  it('should close the dropdown on focusin outside the element', () => {
    dropdownTriggerElement.click();
    fixture.detectChanges();
    dropdownElement = fixture.nativeElement.querySelector('div');
    expect(component.isOpen).toEqual(true);
    dropdownElement.ownerDocument.dispatchEvent(new Event('focusin'));
    expect(component.isOpen).toEqual(false);
  });

  it('should set active on click of a choice on an informational dropdown', () => {
    fixture.autoDetectChanges();
    component.dropdownType = 'informational';
    component.choices = [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1',
        active: false
      }
    ];
    dropdownTriggerElement.click();
    expect(component.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    expect(component.choices[0]['active']).toEqual(true);
  });

  it('should set active on click of a choice on a base dropdown if active isnt defined initially', () => {
    fixture.autoDetectChanges();
    component.dropdownType = 'informational';
    component.choices = [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1'
      }
    ];
    dropdownTriggerElement.click();
    expect(component.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    expect(component.choices[0]['active']).toEqual(true);
  });

  it('should not set active on click of a choice on a base dropdown', () => {
    fixture.autoDetectChanges();
    component.choices = [
      {
        text: 'Option 1',
        value: 'Option 1'
      },
      {
        text: 'Option 2',
        value: 'Option 2'
      }
    ];
    dropdownTriggerElement.click();
    expect(component.isOpen).toEqual(true);
    const listElement = fixture.nativeElement.querySelectorAll('li')[0];
    listElement.dispatchEvent(new Event('click'));
    expect(component.choices[0]['active']).toEqual(false);
  });

  it('should set a value if additionalTriggerClasses has a value', () => {
    component.additionalTriggerClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerElement.classList.contains('sprk-u-man')).toEqual(
      true
    );
  });

  it('should set a value if additionalTriggerTextClasses has a value', () => {
    component.additionalTriggerTextClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dropdownTriggerTextElement.classList.contains('sprk-u-man')).toEqual(
      true
    );
  });
});
