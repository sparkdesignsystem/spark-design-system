import { Directive, Input, OnInit, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[sprk-selection-input]'
})

export class SprkSelectionInputDirective implements OnInit, OnChanges {
  @Input() additionalClasses: string;
  @Input() valid: boolean = true;

  constructor(public ref: ElementRef){};

  getClasses(): Array<String> {
    let classArray: Array<String> = [];

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
    this.ref.nativeElement.classList = "";
    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    })
  }
}
