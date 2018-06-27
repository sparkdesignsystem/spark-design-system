import { Component, Input, OnInit } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners';

@Component({
  selector: 'sprk-button',
  templateUrl: './sprk-button.component.html',
  styleUrls: ['./sprk-button.component.css'],
})

export class SparkButtonComponent {
  @Input() buttonType: string;
  @Input() isDisabled: boolean;
  @Input() analyticsString: string;
  @Input() spinner: boolean;
  @Input() additionalClasses: string;

  public isSpinning: boolean = false;

  public classString: string;
  public attributesString: string;

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
        classArray.push('sprk-c-Button--tertiary');
        break;
      default:
        break;
    }

    if(this.isDisabled) {
      classArray.push('sprk-c-Button--removal');
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  checkSpinner(): void {
    if (this.spinner && !this.isSpinning) {
      setSpinning(event.target, {});
      this.isSpinning = true;
    }
  }

  ngOnInit() {
    this.classString = this.getClasses();
  }
}
