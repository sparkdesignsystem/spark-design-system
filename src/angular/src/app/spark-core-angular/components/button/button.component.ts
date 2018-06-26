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

  addSpinner(): void {
    setSpinning(event.target, { });
  }
}
