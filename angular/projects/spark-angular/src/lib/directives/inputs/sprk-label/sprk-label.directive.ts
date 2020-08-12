import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[sprkLabel]',
})
export class SprkLabelDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}
  /**
   * If `true`, this will add
   * styles to the label to make it work
   * with an icon.
   */
  @Input()
  hasIcon: boolean;

  /**
   * If `true`, this will add
   * disabled styles to the label.
   */
  @Input()
  isDisabled: boolean;

  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-b-Label'];
    if (this.hasIcon) {
      classArray.push('sprk-b-Label--with-icon');
    }
    if (this.isDisabled) {
      classArray.push('sprk-b-Label--disabled');
    }
    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.ref.nativeElement.classList.add(item);
    });
  }
}
