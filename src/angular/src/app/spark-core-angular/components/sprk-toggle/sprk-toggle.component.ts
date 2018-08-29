import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div [ngClass]="getClasses()">
      <a
        class="sprk-b-TypeBodyThree sprk-b-Link sprk-b-Link--standalone"
        href="#"
        (click)="toggle($event)"
        [attr.aria-expanded]="isOpen ? 'true' : 'false'"
        [attr.data-analytics]="analyticsString">
        <sprk-icon iconType="chevron-down" additionalClasses="{{ iconClasses }}"></sprk-icon>
          {{ title }}
      </a>

      <p class="sprk-b-TypeBodyFour sprk-u-pts" *ngIf="isOpen">
        {{ body }}
      </p>
    </div>
  `,
  styles: ['']
})
export class SparkToggleComponent {
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;
  @Input()
  title: string;
  @Input()
  body: string;

  private isOpen = false;
  private iconClasses = 'sprk-u-mrs';

  getClasses(): string {
    const classArray: string[] = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;

    this.isOpen
      ? (this.iconClasses = 'sprk-u-mrs sprk-c-Icon--open')
      : (this.iconClasses = 'sprk-u-mrs');
  }
}
