import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-dictionary',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <dl class="sprk-c-Dictionary__keyvaluepairs">
        <div
          *ngFor="let key of objectKeys(data)"
          class="sprk-c-Dictionary__keyvaluepair"
        >
          <dt
            class="sprk-c-Dictionary__key sprk-b-Label sprk-b-Label--no-input"
          >
            {{ key }}
          </dt>
          <dd class="sprk-c-Dictionary__value">{{ data[key] }}</dd>
        </div>
      </dl>
    </div>
  `
})
export class SprkDictionaryComponent {
  /**
   * The collection of key-value pairs to be rendered
   * into the component.
   */
  @Input()
  data: object = {};
  /**
   * Determines the variant of the dictionary component to render.
   * The only available option is `striped`.
   * Supplying no value will cause the base variant to be used.
   */
  @Input()
  dictionaryType = 'base';
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
   * Used to grab all the keys from
   * objects.
   */
  objectKeys = Object.keys;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Dictionary'];

    if (this.dictionaryType === 'striped') {
      classArray.push('sprk-c-Dictionary--striped');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
