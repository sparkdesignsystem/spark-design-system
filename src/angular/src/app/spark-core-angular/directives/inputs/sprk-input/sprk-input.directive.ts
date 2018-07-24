import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-input]'
})

export class SprkInputDirective implements OnInit {
  @Input() additionalClasses: string;

  constructor(public ref: ElementRef){};

  getClasses(): Array<String> {
    let classArray: Array<String> = [
      'sprk-b-TextInput',
      'sprk-u-Width-100'
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
