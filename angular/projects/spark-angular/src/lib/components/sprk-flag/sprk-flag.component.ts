import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-flag',
  template: `
  <div
    [ngClass]="getClasses()"
    [attr.data-id]="idString"
  >
    <div [ngClass]="getFigureClasses()">
      <ng-content select="[figure-slot]"></ng-content>
    </div>
    <div [ngClass]="getBodyClasses()">
      <ng-content select="[body-slot]"></ng-content>
    </div>
  </div>
  `
})

export class SprkFlagComponent {
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
   * container of the figure-slot.
   */
  @Input()
  additionalFigureClasses: string;

  /**
   * Expects a space separated string
   * of classes to be added to the
   * container of the body-slot.
   */
  @Input()
  additionalBodyClasses: string;

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
   * The Flag component will use this to decide where
   * the figure-slot is rendered in relation to the
   * body-slot. The default is the figure-slot is on
   * the left of the body-slot. isReversed places the
   * figure-slot on the right of the body-slot.
   */
  @Input()
  isReversed = false;

  /**
   * The Flag component will use this to stack
   * the element at the `$sprk-flag-stacked-breakpoint`
   */
  @Input()
  isStacked = false;

  /**
   * Determines how much space between the
   * figure and the body.
   */
  @Input()
  spacing: 'flush' | 'tiny' | 'small' | 'large' | 'huge';

  /**
   * Determines the vertical alignment of content.
   */
  @Input()
  verticalAlignment: 'middle' | 'bottom';

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-o-Flag'];

    if (this.spacing) {
      const spacingClasses = {
        flush: 'sprk-o-Flag--flush',
        tiny: 'sprk-o-Flag--tiny',
        small: 'sprk-o-Flag--small',
        large: 'sprk-o-Flag--large',
        huge: 'sprk-o-Flag--huge',
      };

      classArray.push(spacingClasses[this.spacing]);
    }

    if (this.verticalAlignment) {
      const verticalAlignmentClasses = {
        middle: 'sprk-o-Flag--middle',
        bottom: 'sprk-o-Flag--bottom',
      };

      classArray.push(verticalAlignmentClasses[this.verticalAlignment]);
    }

    if (this.isReversed) {
      classArray.push('sprk-o-Flag--rev');
    }

    if (this.isStacked) {
      classArray.push('sprk-o-Flag--stacked');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getFigureClasses(): string {
    const figureClassArray: string[] = ['sprk-o-Flag__figure'];

    if (this.additionalFigureClasses) {
      this.additionalFigureClasses.split(' ').forEach(className => {
        figureClassArray.push(className);
      });
    }

    return figureClassArray.join(' ');
  }

  getBodyClasses(): string {
    const bodyClassArray: string[] = ['sprk-o-Flag__body'];

    if (this.additionalBodyClasses) {
      this.additionalBodyClasses.split(' ').forEach(className => {
        bodyClassArray.push(className);
      });
    }

    return bodyClassArray.join(' ');
  }
}
