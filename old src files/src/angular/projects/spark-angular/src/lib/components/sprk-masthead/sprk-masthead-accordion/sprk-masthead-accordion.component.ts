import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-masthead-accordion',
  template: `
    <nav role="navigation" [attr.data-id]="idString">
      <ul [ngClass]="getClasses()">
        <ng-content></ng-content>
      </ul>
    </nav>
  `
})
export class SprkMastheadAccordionComponent {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;

  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-MastheadAccordion',
      'sprk-b-List',
      'sprk-b-List--bare'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
