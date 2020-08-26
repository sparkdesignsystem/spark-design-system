import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sprk-dictionary',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <dl class="sprk-c-Dictionary__keyvaluepairs">
        <div
          *ngFor="let key of objectKeys(dataToUse)"
          class="sprk-c-Dictionary__keyvaluepair"
        >
          <dt [ngClass]="getKeysClasses()">{{ key }}</dt>
          <dd [ngClass]="getValuesClasses()">{{ dataToUse[key] }}</dd>
        </div>
      </dl>
    </div>
  `,
})
export class SprkDictionaryComponent implements OnChanges {
  /**
   * Deprecated - Use `keyValuePairs` instead. The collection of key-value
   * pairs to be rendered into the component.
   */
  @Input()
  data: object = {};
  /**
   * The collection of key-value pairs to be rendered into the component.
   */
  @Input()
  keyValuePairs: object = {};
  /**
   * Deprecated - Use `variant` instead.  Determines the variant of the
   * dictionary component to render. The only available option is `striped`.
   * Supplying no value will cause the base variant to be used.
   */
  @Input()
  dictionaryType: string;
  /**
   * Determines the variant of the dictionary component to render. The only
   * available option is `striped`. Supplying no value will cause the base
   * variant to be used.
   */
  @Input()
  variant: string;
  /**
   * Expects a space separated string of classes to be added to the component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to each key
   * element.
   */
  @Input()
  keysAdditionalClasses: string;
  /**
   * Expects a space separated string of classes to be added to each value
   * element.
   */
  @Input()
  valuesAdditionalClasses: string;
  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated tools.
   * This value should be unique per page.
   */
  @Input()
  idString: string;
  /**
   * @ignore
   * Used to grab all the keys from objects.
   */
  objectKeys = Object.keys;
  /**
   * @ignore
   */
  dataToUse: object = {};
  /**
   * @ignore
   */
  variantToUse: string;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Dictionary'];

    if (this.variantToUse === 'striped') {
      classArray.push('sprk-c-Dictionary--striped');
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
  getKeysClasses(): string {
    const classArray: string[] = [
      'sprk-c-Dictionary__key',
      'sprk-b-Label',
      'sprk-b-Label--no-input',
    ];

    if (this.keysAdditionalClasses) {
      this.keysAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getValuesClasses(): string {
    const classArray: string[] = ['sprk-c-Dictionary__value'];

    if (this.valuesAdditionalClasses) {
      this.valuesAdditionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['keyValuePairs'] && changes['data']) {
      const deprecatedInputValue = changes['data'].currentValue;
      console.warn(
        `Spark Design System - conflicting Inputs found in sprk-dictionary. data has been deprecated; please use keyValuePairs instead. Deprecated Input with value "` +
          JSON.stringify(deprecatedInputValue) +
          `" will be ignored.`,
      );
    }

    if (changes['variant'] && changes['dictionaryType']) {
      const deprecatedInputValue = changes['dictionaryType'].currentValue;
      console.warn(
        `Spark Design System - conflicting Inputs found in sprk-dictionary. dictionaryType has been deprecated; please use variant instead. Deprecated Input with value "` +
          deprecatedInputValue +
          `" will be ignored.`,
      );
    }

    if (changes['keyValuePairs']) {
      this.dataToUse = changes['keyValuePairs'].currentValue;
    } else if (changes['data']) {
      this.dataToUse = changes['data'].currentValue;
    }

    if (changes['variant']) {
      this.variantToUse = changes['variant'].currentValue;
    } else if (changes['dictionaryType']) {
      this.variantToUse = changes['dictionaryType'].currentValue;
    }
  }
}
