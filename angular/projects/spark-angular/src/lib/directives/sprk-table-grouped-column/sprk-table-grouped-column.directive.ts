import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkTableGroupedColumn]'
})
export class SprkTableGroupedColumnDirective implements OnInit {
 /**
  * Expects a space separated string
  * of classes to be added to the
  * element.
  */
  @Input()
  additionalClasses: string;

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray = ['sprk-b-Table__grouped-column'];
    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(className => {
      this.ref.nativeElement.classList.add(className);
    });
  }
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
}
