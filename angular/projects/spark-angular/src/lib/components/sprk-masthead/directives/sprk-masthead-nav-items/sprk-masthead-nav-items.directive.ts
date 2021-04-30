import {
  Directive,
  Input,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sprkMastheadNavItems]',
})
export class SprkMastheadNavItemsDirective implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}

  /**
   * The value supplied will be assigned to the `data-id` attribute on the
   * component. This is intended to be used as a selector for automated
   * tools. This value should be unique per page.
   */
  @HostBinding('attr.data-id')
  @Input()
  idString: string;

  @HostBinding('class.sprk-c-Masthead__little-nav') true;

  /**
   * We apply the Stack modifier class this way instead of using
   * HostBinding because we want it to be able to be changed
   * if needed ex. the responsive suffix. Using HostBinding
   * would make it so the class cannot be removed.
   */
  ngOnInit(): void {
    this.renderer.addClass(
      this.ref.nativeElement,
      'sprk-o-Stack__item--center-column@xxs',
    );
  }
}
