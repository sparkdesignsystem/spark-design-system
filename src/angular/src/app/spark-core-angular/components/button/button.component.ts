import { Component, Input } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners';

@Component({
  selector: 'sprk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class SparkButtonComponent {
  @Input() isSecondary: boolean;
  @Input() isTertiary: boolean;
  @Input() isRemoval: boolean;
  @Input() isDisabled: boolean;
  @Input() analyticsString: string;
  @Input() spinner: boolean;
  @Input() spinnerSize: string;
  @Input() spinnerLightness: string;

  isSpinning: boolean = false;
  options: Object = {
    size: this.spinnerSize,
    lightness: this.spinnerLightness
  };

  checkSpinner(): void {
    if (this.spinner && !this.isSpinning) {
      setSpinning(event.target, this.options);
      this.isSpinning = true;
    }
  }
}
