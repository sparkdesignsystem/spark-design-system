import { Directive, Input, OnInit, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-input]'
})

export class SprkInputDirective implements OnInit, OnChanges {
  @Input() additionalClasses: string;
  @Input() valid: boolean = true;

  constructor(public ref: ElementRef){};

  getClasses(): Array<String> {
    let classArray: Array<String> = [];

    if (this.ref.nativeElement.nodeName === 'SELECT') {
      classArray.push('sprk-b-Select');
    } else {
      classArray.push('sprk-b-TextInput', 'sprk-u-Width-100');
    }

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

  ngOnChanges(): void {
    this.ref.nativeElement.classList = '';
    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    })
  }
}
