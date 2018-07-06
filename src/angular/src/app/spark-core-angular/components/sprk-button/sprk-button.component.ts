import { Component, Input, EventEmitter, Output } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners';

@Component({
  selector: 'sprk-button',
  template: `<button [ngClass]="getClasses()"
                     [disabled]="isDisabled"
                     [attr.data-analytics]="analyticsString"
                     (click)="checkSpinner($event)"
                     (click)="checkEvent($event)">
               <ng-content></ng-content>
             </button>`,
})

export class SparkButtonComponent {
  @Input() buttonType: string;
  @Input() isDisabled: boolean;
  @Input() analyticsString: string;
  @Input() spinner: boolean;
  @Input() additionalClasses: string;
  @Input() triggerModal: string;
  @Input() fireEvent: string;
  @Output() customEvent = new EventEmitter<any>();

  public isSpinning: boolean = false;

  getClasses(): string {
    let classArray: Array<String> = [
    'sprk-c-Button'
    ];

    switch (this.buttonType) {
      case 'secondary':
        classArray.push('sprk-c-Button--secondary');
        break;
      case 'tertiary':
        classArray.push('sprk-c-Button--tertiary');
        break;
      case 'removal':
        classArray.push('sprk-c-Button--removal');
        break;
      default:
        break;
    }

    if(this.isDisabled) {
      classArray.push('sprk-is-Disabled');
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  checkSpinner(event): void {
    if (this.spinner && !this.isSpinning) {
      setSpinning(event.target, {});
      this.isSpinning = true;
    }
  }

  checkEvent(event): void {
    if (this.fireEvent) {
      this.customEvent.emit(this.fireEvent);
    }
  }
}
