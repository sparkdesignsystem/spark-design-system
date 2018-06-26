import { Component, Input } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners';

@Component({
  selector: 'sprk-button',
  templateUrl: './sprk-button.component.html',
  styleUrls: ['./sprk-button.component.css'],
})

export class SparkButtonComponent {
  @Input() isSecondary: boolean;
  @Input() isTertiary: boolean;
  @Input() isRemoval: boolean;
  @Input() isDisabled: boolean;
  @Input() analyticsString: string;
  @Input() spinner: boolean;

  public isSpinning: boolean = false;

  checkSpinner(): void {
    if (this.spinner && !this.isSpinning) {
      setSpinning(event.target, {});
      this.isSpinning = true;
    }
  }
}
