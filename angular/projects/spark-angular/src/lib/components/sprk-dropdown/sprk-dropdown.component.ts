import {
  Component,
  Input,
  Output,
  ElementRef,
  HostListener,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'sprk-dropdown',
  template: `
    <div
      [ngClass]="{
        'sprk-c-MastheadMask': isOpen && dropdownType === 'mastheadSelector'
      }"
    >
      <div [ngClass]="{ 'sprk-o-Box': dropdownType === 'mastheadSelector' }">
        <sprk-link
          [additionalClasses]="getTriggerClasses()"
          ariaHasPopUp="true"
          (click)="toggle($event)"
          [idString]="idString"
          [analyticsString]="analyticsString"
          role="combobox"
        >
          <span [ngClass]="getTriggerTextClasses()">{{ triggerText }}</span>
          <span class="sprk-u-ScreenReaderText">{{ screenReaderText }}</span>
          <sprk-icon
            [iconType]="triggerIconType"
            additionalClasses="sprk-u-mls sprk-c-Icon--stroke-current-color {{
              additionalIconClasses
            }}"
          ></sprk-icon>
        </sprk-link>
      </div>

      <div [ngClass]="getClasses()" *ngIf="isOpen">
        <div
          class="sprk-c-Dropdown__header"
          *ngIf="dropdownType === 'mastheadSelector' || title || selector"
        >
          <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo" *ngIf="title">
            {{ title }}
          </h2>

          <sprk-link
            *ngIf="selector && !title"
            linkType="plain"
            additionalClasses="sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
            ariaHasPopUp="true"
            (click)="toggle($event)"
          >
            <span
              class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
              >{{ selector }}</span
            >
            <sprk-icon
              [iconType]="triggerIconType"
              additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mls sprk-c-Icon--toggle sprk-Stack__item {{
                additionalIconClasses
              }}"
            ></sprk-icon>
          </sprk-link>
        </div>

        <ul class="sprk-c-Dropdown__links">
          <li
            class="sprk-c-Dropdown__item"
            *ngFor="let choice of choices; let i = index"
            [attr.data-sprk-dropdown-choice-index]="i"
            (click)="choiceClick($event)"
          >
            <div *ngIf="choice.content; then content; else link"></div>
            <ng-template #link>
              <sprk-link
                linkType="unstyled"
                [href]="choice.href"
                additionalClasses="sprk-c-Dropdown__link {{
                  choice.active && 'sprk-c-Dropdown__link--active'
                }}"
                role="option"
                >{{ choice.text }}
              </sprk-link>
            </ng-template>
            <ng-template #content>
              <sprk-link
                linkType="unstyled"
                [href]="choice.href"
                additionalClasses="sprk-c-Dropdown__link {{
                  choice.active && 'sprk-c-Dropdown__link--active'
                }}"
                role="option"
              >
                <p class="sprk-b-TypeBodyOne">{{ choice.content.title }}</p>
                <p>{{ choice.content.infoLine1 }}</p>
                <p>{{ choice.content.infoLine2 }}</p>
              </sprk-link>
            </ng-template>
          </li>
        </ul>
        <ng-content select="[sprkDropdownFooter]"></ng-content>
      </div>
    </div>
  `
})
export class SprkDropdownComponent {
  @Input()
  dropdownType = 'base';
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalIconClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the dropdown
   * component's trigger link element.
   */
  @Input()
  additionalTriggerClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the dropdown
   * component's trigger text.
   */
  @Input()
  additionalTriggerTextClasses: string;
  /**
   * The value supplied will be assigned
   * to the 'data-id' attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  @Input()
  analyticsString: string;
  @Input()
  isOpen = false;
  @Input()
  title: string;
  @Input()
  selector: string;
  @Input()
  choices: any[];
  @Input()
  triggerIconType: string;
  @Input()
  triggerText: string;
  @Input()
  screenReaderText: string;
  @Output()
  choiceMade: EventEmitter<string> = new EventEmitter();

  constructor(public ref: ElementRef) {}

  toggle(event): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (
      !this.ref.nativeElement.contains(event.target) ||
      event.target.classList.contains('sprk-c-MastheadMask')
    ) {
      this.hideDropdown();
    }
  }

  @HostListener('document:focusin', ['$event'])
  onFocusin(event): void {
    /* istanbul ignore else: angular focus event isnt setting e.target */
    if (
      !this.ref.nativeElement.contains(event.target) ||
      event.target.classList.contains('sprk-c-MastheadMask')
    ) {
      this.hideDropdown();
    }
  }

  choiceClick(event) {
    this.clearActiveChoices();
    const choiceIndex = event.currentTarget.getAttribute(
      'data-sprk-dropdown-choice-index'
    );
    const clickedChoice = this.choices[choiceIndex];
    if (
      this.dropdownType === 'informational' ||
      this.dropdownType === 'mastheadSelector'
    ) {
      this.setActiveChoice(event);
      this.updateTriggerText(event);
    }
    this.hideDropdown();
    this.choiceMade.emit(clickedChoice['value']);
  }

  setActiveChoice(event): void {
    const choiceIndex = event.currentTarget.getAttribute(
      'data-sprk-dropdown-choice-index'
    );
    this.choices[choiceIndex]['active'] = true;
  }

  updateTriggerText(event): void {
    const choiceIndex = event.currentTarget.getAttribute(
      'data-sprk-dropdown-choice-index'
    );
    this.triggerText = this.choices[choiceIndex]['value'];
  }

  clearActiveChoices(): void {
    this.choices.forEach((choice: object) => {
      choice['active'] = false;
    });
  }

  hideDropdown(): void {
    this.isOpen = false;
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Dropdown'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getTriggerClasses(): string {
    const classArray: string[] = [];

    if (this.additionalTriggerClasses) {
      this.additionalTriggerClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getTriggerTextClasses(): string {
    const classArray: string[] = [''];

    if (this.additionalTriggerTextClasses) {
      this.additionalTriggerTextClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
