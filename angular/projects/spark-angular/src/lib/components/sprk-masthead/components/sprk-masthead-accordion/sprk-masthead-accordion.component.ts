import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-masthead-accordion',
  template: `
    <nav role="navigation" [attr.data-id]="idString">
      <ul [ngClass]="getClasses()">
        <ng-content></ng-content>
      </ul>
    </nav>
  `,
})
export class SprkMastheadAccordionComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
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
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-MastheadAccordion',
      'sprk-b-List',
      'sprk-b-List--bare',
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
