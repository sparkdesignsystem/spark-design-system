import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-label]'
})

export class SprkLabelDirective implements OnInit {
  @Input() additionalClasses: string;

  constructor(public ref: ElementRef){};

  getClasses(): Array<String> {
    let classArray: Array<String> = [
      'sprk-b-Label'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    })
  }
}
