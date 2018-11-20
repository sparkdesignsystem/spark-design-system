import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[sprkButton]'
})
export class SprkButtonDirective implements OnInit {
  constructor(public ref: ElementRef) {}

  getClasses(): string[] {
    const classArray: string[] = [];
    classArray.push('sprk-c-Button');
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach(item => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
