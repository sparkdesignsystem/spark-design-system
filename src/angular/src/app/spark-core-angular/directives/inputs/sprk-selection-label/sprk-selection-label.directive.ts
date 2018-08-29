import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkSelectionLabel]'
})
export class SprkSelectionLabelDirective implements OnInit {
  @Input()
  additionalClasses: string;

  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = [
      'sprk-b-Label',
      'sprk-b-Label--inline',
      'sprk-u-mls'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
