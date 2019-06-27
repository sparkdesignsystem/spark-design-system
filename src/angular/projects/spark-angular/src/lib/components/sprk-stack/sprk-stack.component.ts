import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-stack',
  template: `
    <div [ngClass]="getClasses()" [attr.data-analytics]="analyticsString">
      <ng-content></ng-content>
    </div>
  `
})
export class SprkStackComponent {
  @Input()
  splitAt: string;
  @Input()
  itemSpacing: string;
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;

  getClasses(): string {
    const classArray: string[] = ['sprk-o-Stack'];

    // Handle the choice of item split breakpoint by adding CSS class
    switch (this.splitAt) {
      case 'tiny':
        classArray.push('sprk-o-Stack--split@xs');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--split@s');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--split@m');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--split@l');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--split@xl');
        break;
      default:
        break;
    }

    // Handle the choice of item spacing by adding CSS class
    switch (this.itemSpacing) {
      case 'tiny':
        classArray.push('sprk-o-Stack--tiny');
        break;
      case 'small':
        classArray.push('sprk-o-Stack--small');
        break;
      case 'medium':
        classArray.push('sprk-o-Stack--medium');
        break;
      case 'large':
        classArray.push('sprk-o-Stack--large');
        break;
      case 'huge':
        classArray.push('sprk-o-Stack--huge');
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
