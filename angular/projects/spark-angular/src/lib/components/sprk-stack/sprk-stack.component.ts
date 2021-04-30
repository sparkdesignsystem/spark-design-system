import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-stack',
  template: `
    <div
      [ngClass]="getClasses()"
      [attr.data-id]="idString"
      [attr.data-analytics]="analyticsString"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class SprkStackComponent {
  /**
   * The value supplied can be `tiny`, `small`, `medium`, `large`, or `huge`.
   * This is used as the breakpoint at which the component moves or "splits"
   * to a side by side layout.
   */
  @Input()
  splitAt: string;
  /**
   * This is used as the amount of spacing between the child `sprkStackItem`
   * items. The value supplied can be `tiny`, `small`, `medium`, `large`, or
   * `huge`.
   */
  @Input()
  itemSpacing: string;
  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated tools.
   * This value should be unique per page.
   */
  @Input()
  idString: string;
  /**
   * The value supplied will be assigned to the `data-analytics` attribute on
   * the component. Intended for an outside library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a space separated string of classes to be added to the component.
   */
  @Input()
  additionalClasses: string;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-o-Stack'];

    // Handle the choice of item split breakpoint by adding CSS class
    switch (this.splitAt) {
      case 'extraTiny':
        classArray.push('sprk-o-Stack--split@xxs');
        break;
      case 'tiny':
        classArray.push('sprk-o-Stack--split@xs');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--split@s');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--split@m');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--split@l');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--split@xl');
        break;
      default:
        break;
    }

    // Handle the choice of item spacing by adding CSS class
    switch (this.itemSpacing) {
      case 'tiny':
        classArray.push('sprk-o-Stack--tiny');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--small');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--medium');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--large');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--huge');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
