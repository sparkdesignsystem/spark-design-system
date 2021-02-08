import {
  Component,
  Input,
  Output,
  ElementRef,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISprkMastheadSelectorChoice } from '../sprk-masthead-selector/sprk-masthead-selector.interfaces';

@Component({
  selector: 'sprk-masthead-selector',
  template: `
    <div [ngClass]="{ 'sprk-c-MastheadMask': isOpen }">
      <div class="sprk-o-Box">
        <a
          sprkLink
          variant="plain"
          [ngClass]="getTriggerClasses()"
          (click)="toggle($event)"
          [idString]="idString"
          [analyticsString]="analyticsString"
          aria-haspopup="listbox"
          href="#"
          [attr.aria-label]="
            triggerText ? triggerText : screenReaderText || 'Choose One'
          "
        >
          <span [ngClass]="getTriggerTextClasses()">{{ triggerText }}</span>
          <span class="sprk-u-ScreenReaderText">{{ screenReaderText }}</span>
          <sprk-icon
            [iconName]="triggerIconName"
            additionalClasses="sprk-Stack__item sprk-u-mhs {{
              iconAdditionalClasses
            }}"
          ></sprk-icon>
        </a>
      </div>

      <div [ngClass]="getClasses()" *ngIf="isOpen">
        <div class="sprk-c-Dropdown__header" *ngIf="heading || selector">
          <h2 class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo" *ngIf="heading">
            {{ heading }}
          </h2>

          <a
            sprkLink
            *ngIf="selector && !heading"
            variant="plain"
            class="sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
            (click)="toggle($event)"
            [attr.aria-label]="selector"
            href="#"
          >
            <span
              class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
              >{{ selector }}</span
            >
            <sprk-icon
              [iconName]="triggerIconName"
              additionalClasses="
                sprk-c-Icon--filled-current-color
                sprk-c-Icon--stroke-current-color
                sprk-u-mhs
                sprk-c-Icon--toggle
                sprk-Stack__item
                {{ iconAdditionalClasses }}
              "
            ></sprk-icon>
          </a>
        </div>

        <ul
          class="sprk-c-Dropdown__links"
          role="listbox"
          [attr.aria-label]="
            heading ? heading : screenReaderText || 'My Choices'
          "
        >
          <li
            class="sprk-c-Dropdown__item"
            *ngFor="let choice of choices; let i = index"
            (click)="choiceClick(i)"
            [attr.aria-selected]="choice.active"
            role="option"
          >
            <div *ngIf="choice.content; then content; else link"></div>
            <ng-template #link>
              <a
                sprkLink
                variant="unstyled"
                [attr.href]="choice.href"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.text"
                >{{ choice.text }}
              </a>
            </ng-template>
            <ng-template #content>
              <a
                sprkLink
                variant="unstyled"
                [attr.href]="choice.href"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.content.title"
              >
                <p class="sprk-b-TypeBodyOne">{{ choice.content.title }}</p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine1">
                  {{ choice.content.infoLine1 }}
                </p>
                <p sprkText variant="bodyFour" *ngIf="choice.content.infoLine2">
                  {{ choice.content.infoLine2 }}
                </p>
              </a>
            </ng-template>
          </li>
        </ul>
        <ng-content select="[sprkMastheadSelectorFooter]"></ng-content>
      </div>
    </div>
  `,
})
export class SprkMastheadSelectorComponent implements OnChanges {
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
   * icon.
   */
  @Input()
  iconAdditionalClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the trigger link element.
   */
  @Input()
  triggerAdditionalClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the trigger text.
   */
  @Input()
  triggerTextAdditionalClasses: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * If `true`, the Masthead Selector will be open when rendered.
   */
  @Input()
  isOpen = false;
  /**
   * The heading text displayed in
   * in the box above the choices.
   */
  @Input()
  heading: string;
  /**
   * This value supplied will be assigned to
   * the title text when its open.
   */
  @Input()
  selector: string;
  // TODO: Decouple with dropdown and make its own masthead selector interface
  /**
   * Expects an array of
   * [ISprkMastheadSelectorChoice](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-masthead/sprk-masthead-selector/sprk-masthead-selector.interfaces.ts)
   *  objects.
   */
  @Input()
  choices: ISprkMastheadSelectorChoice[];
  /**
   * If supplied, will render the icon
   * to the right of the trigger text.
   */
  @Input()
  triggerIconName: string;
  /**
   * The text that is initially rendered to the trigger.
   */
  @Input()
  triggerText: string;
  /**
   * The value supplied will be visually hidden
   * inside the trigger. Useful
   * for when title is empty,
   * and only `triggerIconType` is supplied.
   */
  @Input()
  screenReaderText: string;
  /**
   * The event that is
   * emitted from the Dropdown when a choice
   * is clicked. The event contains the value
   * of the choice that was clicked.
   */
  @Output()
  choiceMade: EventEmitter<string> = new EventEmitter();
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * @ignore
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this.choices && changes.choices) {
      this._updateTriggerTextWithDefaultValue();
    }
  }

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
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
    /* istanbul ignore next: angular focus event isnt setting e.target */
    if (
      !this.ref.nativeElement.contains(event.target) ||
      event.target.classList.contains('sprk-c-MastheadMask')
    ) {
      this.hideDropdown();
    }
  }
  /**
   * @ignore
   */
  choiceClick(i) {
    this.clearActiveChoices();
    const clickedChoice = this.choices[i];

    this.setActiveChoice(i);
    this.updateTriggerText(i);
    this.hideDropdown();
    this.choiceMade.emit(clickedChoice['value']);
  }
  /**
   * @ignore
   */
  setActiveChoice(i): void {
    this.choices[i]['active'] = true;
  }
  /**
   * @ignore
   */
  updateTriggerText(i): void {
    this.triggerText = this.choices[i]['value'];
  }

  /**
   * @ignore
   */
  clearActiveChoices(): void {
    this.choices.forEach((choice: ISprkMastheadSelectorChoice) => {
      choice['active'] = false;
    });
  }

  /**
   * @ignore
   */
  hideDropdown(): void {
    this.isOpen = false;
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Dropdown sprk-c-Masthead__selector-dropdown',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTriggerClasses(): string {
    const classArray: string[] = [
      'sprk-c-Dropdown__trigger sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column',
    ];

    if (this.triggerAdditionalClasses) {
      this.triggerAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTriggerTextClasses(): string {
    const classArray: string[] = [
      'sprk-o-Stack__item sprk-o-Stack__item--flex@xxs',
    ];
    if (this.triggerTextAdditionalClasses) {
      this.triggerTextAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * Update trigger text with default choice value
   */
  protected _updateTriggerTextWithDefaultValue(): void {
    const defaultChoice = this._lookupDefaultChoice();

    if (defaultChoice) {
      // Deactivate previously activated choices
      this.clearActiveChoices();
      // Mark default choice as active
      defaultChoice.active = true;
      // Update trigger text
      this.triggerText = defaultChoice.value;
    }
  }

  /**
   * Lookup choice with specified `isDefault: true` field
   */
  protected _lookupDefaultChoice(): ISprkMastheadSelectorChoice | null {
    return this.choices.find((choice) => choice.isDefault) || null;
  }
}
