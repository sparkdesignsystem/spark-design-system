import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-list',
  template: `
    <ul
      [ngClass]="getClasses()"
      [attr.data-analytics]="analyticsString">
      <ng-content></ng-content>
    </ul>
  `,
  styles: ['']
})
export class SparkListComponent {
  @Input() listType: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;

  getClasses(): string {
    let classArray: Array<String> = [
    'sprk-b-List'
    ];

    switch (this.listType) {
      case 'ordered':
        classArray.push('sprk-b-Link--standalone');
        break;
      case 'unordered':
        break;
      case 'indented':
        classArray.push('sprk-b-List--indented');
        break;
      case 'bare':
        classArray.push('sprk-b-List--bare');
        break;
      default:
        break;
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
  constructor() { }

  ngOnInit() {
  }

}
