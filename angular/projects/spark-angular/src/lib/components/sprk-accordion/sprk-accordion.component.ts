import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-accordion',
  template: `
    <ul [ngClass]="getClasses()" [attr.data-id]="idString" role="list">
      <ng-content></ng-content>
    </ul>
  `,
})
export class SprkAccordionComponent {
  /**
   * Expects a space separated string of classes to be added to the component.
   */
  @Input()
  additionalClasses: string;
  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated tools.
   * This value should be unique per page.
   */
  @Input()
  idString: string;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Accordion', 'sprk-o-VerticalList'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
