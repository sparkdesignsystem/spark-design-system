import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkInput]'
})
export class SprkInputDirective implements OnInit, OnChanges {
  @Input()
  additionalClasses: string;
  @Input()
  valid = true;

  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = [];

    if (this.ref.nativeElement.nodeName === 'SELECT') {
      classArray.push('sprk-b-Select');
    } else {
      classArray.push('sprk-b-TextInput', 'sprk-u-Width-100');
    }

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

  ngOnChanges(): void {
    this.ref.nativeElement.classList = '';
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
