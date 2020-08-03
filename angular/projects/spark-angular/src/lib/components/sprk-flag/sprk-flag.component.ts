import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-flag',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <div [ngClass]="getMediaClasses()">
        <ng-content select="[media-slot]"></ng-content>
      </div>
      <div [ngClass]="getBodyClasses()">
        <ng-content select="[body-slot]"></ng-content>
      </div>
    </div>
  `,
})
export class SprkFlagComponent {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component container.
   */
  @Input()
  additionalClasses: string;

  /**
   * Expects a space separated string
   * of classes to be added to the
   * container of the media-slot.
   */
  @Input()
  mediaAdditionalClasses: string;

  /**
   * Expects a space separated string
   * of classes to be added to the
   * container of the body-slot.
   */
  @Input()
  bodyAdditionalClasses: string;

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
   * the media-slot is rendered in relation to the
   * body-slot. The default is the media-slot is on
   * the left of the body-slot. isReversed="true" places the
   * media-slot on the right of the body-slot.
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
   * media and the body.
   */
  @Input()
  spacing: 'flush' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' = 'medium';

  /**
   * Determines the vertical alignment of content.
   */
  @Input()
  verticalAlignment: 'top' | 'middle' | 'bottom' = 'top';

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-o-Flag'];

    if (this.spacing !== 'medium') {
      const spacingClasses = {
        flush: 'sprk-o-Flag--flush',
        tiny: 'sprk-o-Flag--tiny',
        small: 'sprk-o-Flag--small',
        large: 'sprk-o-Flag--large',
        huge: 'sprk-o-Flag--huge',
      };

      classArray.push(spacingClasses[this.spacing]);
    }

    if (this.verticalAlignment !== 'top') {
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
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  /**
   * @ignore
   */
  getMediaClasses(): string {
    const mediaClassArray: string[] = ['sprk-o-Flag__figure'];

    if (this.mediaAdditionalClasses) {
      this.mediaAdditionalClasses.split(' ').forEach((className) => {
        mediaClassArray.push(className);
      });
    }

    return mediaClassArray.join(' ');
  }
  /**
   * @ignore
   */
  getBodyClasses(): string {
    const bodyClassArray: string[] = ['sprk-o-Flag__body'];

    if (this.bodyAdditionalClasses) {
      this.bodyAdditionalClasses.split(' ').forEach((className) => {
        bodyClassArray.push(className);
      });
    }

    return bodyClassArray.join(' ');
  }
}
