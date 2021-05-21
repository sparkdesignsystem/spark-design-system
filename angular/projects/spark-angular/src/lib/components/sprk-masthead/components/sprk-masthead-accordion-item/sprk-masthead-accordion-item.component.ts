import { Component, Input, OnInit } from '@angular/core';
import { uniqueId } from 'lodash';
import { toggleAnimations } from '../../../sprk-toggle/sprk-toggle-animations';

@Component({
  selector: 'sprk-masthead-accordion-item',
  template: `
    <li [ngClass]="getClasses()">
      <div sprkStackItem class="sprk-u-Position--relative sprk-u-Width-100">
        <button
          [attr.aria-controls]="accordion_controls_id"
          class="sprk-c-MastheadAccordion__summary"
          [attr.data-analytics]="analyticsString"
          [attr.data-id]="idString"
          (click)="toggleAccordion($event)"
          [attr.aria-expanded]="isOpen"
          role="button"
        >
          <span [ngClass]="getHeadingClasses()">
            <sprk-icon
              [iconName]="leadingIcon"
              additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--xl sprk-c-Icon--toggle sprk-u-mrs"
              *ngIf="leadingIcon"
            ></sprk-icon>
            {{ heading }}
          </span>

          <sprk-icon
            additionalClasses="sprk-c-MastheadAccordion__icon sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color sprk-c-Icon--toggle {{
              iconStateClass
            }}"
            [iconName]="currentIconType"
          ></sprk-icon>
        </button>
      </div>

      <div [@toggleContent]="animState">
        <div [id]="accordion_controls_id"><ng-content></ng-content></div>
      </div>
    </li>
  `,
  animations: [toggleAnimations.toggleContent],
})
export class SprkMastheadAccordionItemComponent implements OnInit {
  /**
   * The value supplied will be used
   * as the heading for the item.
   */
  @Input()
  heading: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
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
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * heading.
   */
  @Input()
  additionalHeadingClasses: string;
  /**
   * If `true`, the Masthead accordion item
   * will be open when it is rendered.
   */
  @Input()
  isOpen = false;
  /**
   * If `true`, the Masthead accordion item
   * will be active when it is rendered.
   */
  @Input()
  isActive: boolean;
  /**
   * The name of the icon to use
   * for the clickable close icon.
   */
  @Input()
  iconTypeClosed = 'chevron-down';
  /**
   * The name of the icon to use
   * for the clickable open icon.
   */
  @Input()
  iconTypeOpen = 'chevron-down';
  /**
   * Expects a name of an icon to use
   * as a leading icon for the Masthead accordion item.
   */
  @Input()
  leadingIcon: string;

  /**
   * @ignore
   */
  componentID = uniqueId();
  /**
   * @ignore
   */
  accordion_controls_id = `accordionHeading__${this.componentID}`;
  /**
   * @ignore
   */
  public currentIconType = this.iconTypeClosed;
  /**
   * @ignore
   */
  public iconStateClass = '';
  /**
   * @ignore
   */
  public animState = 'closed';

  /**
   * This applies the correct styles to the item
   * when it is open or closed.
   */
  accordionState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.currentIconType = this.iconTypeClosed)
      : (this.currentIconType = this.iconTypeOpen);

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
  }
  /**
   * Updates the isOpen state when
   * the item is toggled.
   */
  toggleAccordion(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.accordionState();
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-MastheadAccordion__item',
      'sprk-u-Overflow--hidden',
    ];

    if (this.isOpen) {
      classArray.push('sprk-c-MastheadAccordion__item--open');
    }

    if (this.isActive) {
      classArray.push('sprk-c-MastheadAccordion__item--active');
    }

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
  getHeadingClasses(): string {
    const classArray: string[] = ['sprk-c-MastheadAccordion__heading'];

    if (this.additionalHeadingClasses) {
      this.additionalHeadingClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnInit() {
    this.accordionState();
  }
}
