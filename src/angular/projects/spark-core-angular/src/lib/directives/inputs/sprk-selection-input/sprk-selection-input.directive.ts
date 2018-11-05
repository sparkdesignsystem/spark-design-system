import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkSelectionInput]'
})
export class SprkSelectionInputDirective implements OnInit {
  @Input()
  idString: string;

  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-SelectionInput'];
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });

    if (this.idString) {
      this.ref.nativeElement.setAttribute('data-id', this.idString);
    }
  }
}
