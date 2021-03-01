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
          class="
            sprk-c-Masthead__selector
            sprk-b-Link
            sprk-b-Link--plain
            sprk-o-Stack
            sprk-o-Stack--split@xxs
            sprk-o-Stack--center-column
          "
          (click)="toggle($event)"
          [idString]="idString"
          [analyticsString]="analyticsString"
          aria-haspopup="listbox"
          href="#"
          [attr.aria-label]="
            triggerText ? triggerText : screenReaderText || 'Choose One'
          "
        >
          <span class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">{{
            triggerText
          }}</span>
          <span class="sprk-u-ScreenReaderText">{{ screenReaderText }}</span>
          <sprk-icon
            [iconName]="triggerIconName"
            additionalClasses="sprk-Stack__item sprk-u-mhs"
          ></sprk-icon>
        </a>
      </div>

      <div class="sprk-c-Masthead__selector-dropdown" *ngIf="isOpen">
        <div class="sprk-c-Dropdown__header" *ngIf="heading">
          <a
            sprkLink
            variant="plain"
            class="sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
            (click)="toggle($event)"
            [attr.aria-label]="heading"
            href="#"
          >
            <span
              class="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
              >{{ heading }}</span
            >
            <sprk-icon
              [iconName]="triggerIconName"
              additionalClasses="
                sprk-c-Icon--filled-current-color
                sprk-c-Icon--stroke-current-color
                sprk-u-mhs
                sprk-c-Icon--toggle
                sprk-Stack__item
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
                *ngIf="!choice.routerLink"
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
              <a
                *ngIf="choice.routerLink"
                sprkLink
                variant="unstyled"
                [routerLink]="choice.routerLink"
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
                *ngIf="!choice.routerLink"
                variant="unstyled"
                [attr.href]="choice.href"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.content.title"
              >
                <p sprkText variant="bodyOne">{{ choice.content.title }}</p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine1">
                  {{ choice.content.infoLine1 }}
                </p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine2">
                  {{ choice.content.infoLine2 }}
                </p>
              </a>
              <a
                sprkLink
                *ngIf="choice.routerLink"
                variant="unstyled"
                [routerLink]="choice.routerLink"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.content.title"
              >
                <p sprkText variant="bodyOne">{{ choice.content.title }}</p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine1">
                  {{ choice.content.infoLine1 }}
                </p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine2">
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
   * The value supplied will be visually hidden
   * inside the trigger. Useful
   * for when heading is empty,
   * and only `triggerIconName` is supplied.
   */
  @Input()
  screenReaderText: string;
  /**
   * This value will be assigned to the Masthead Selector
   * placeholder text and the dropdown heading.
   */
  @Input()
  heading: string;
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
   * Expects an array of
   * [ISprkMastheadSelectorChoice](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-masthead/sprk-masthead-selector/sprk-masthead-selector.interfaces.ts)
   *  objects.
   */
  @Input()
  choices: ISprkMastheadSelectorChoice[];
  /**
   * The name of the icon that
   * renders the icon to the right
   * of the trigger text.
   */
  @Input()
  triggerIconName: string;
  /**
   * The text that is initially rendered to the trigger.
   */
  @Input()
  triggerText: string;
  /**
   * The event that is
   * emitted from the Masthead Selector when a choice
   * is clicked. The event contains the value
   * of the choice that was clicked.
   */
  @Output()
  choiceMade: EventEmitter<string> = new EventEmitter();

  /**
   * This event will be emitted
   * when the Masthead Selector is opened.
   */
  @Output()
  openedEvent: EventEmitter<any> = new EventEmitter();
  /**
   * This event will be emitted
   * when the Masthead Selector is closed.
   */
  @Output()
  closedEvent: EventEmitter<any> = new EventEmitter();

  /**
   * @ignore
   */
  isOpen = false;
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
    if (this.isOpen) {
      this.openedEvent.emit();
    } else {
      this.closedEvent.emit();
    }
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
   * Update trigger text with default choice value.
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
   * Lookup choice with specified `isDefault: true` field.
   */
  protected _lookupDefaultChoice(): ISprkMastheadSelectorChoice | null {
    return this.choices.find((choice) => choice.isDefault) || null;
  }
}
