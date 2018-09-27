import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkButton]'
})
export class SprkButtonDirective implements OnInit, OnChanges {
  @Input()
  additionalClasses: string;

  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = [];
    classArray.push('sprk-c-Button');

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
