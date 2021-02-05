import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[sprkTabsButton]',
})
export class SprkTabsButtonDirective implements OnInit {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * element.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `true`, the Tab will have
   * active styles and aria attributes on render.
   */
  @Input()
  isDefaultActive: boolean;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * The tab button will emit this event when the button is clicked.
   */
  @Output()
  tabClick = new EventEmitter<any>();
  /**
   * @ignore
   */
  @HostListener('click', ['$event'])
  onClick(event) {
    this.tabClick.emit(event);
  }
  /**
   * @ignore
   */
  getClasses(): string[] {
    const classArray: string[] = ['sprk-c-Tabs__button'];

    if (this.isDefaultActive) {
      classArray.push('sprk-c-Tabs__button--active');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray;
  }

  ngOnInit(): void {
    this.getClasses().forEach((item) => {
      this.renderer.addClass(this.ref.nativeElement, item);
    });

    this.renderer.setAttribute(this.ref.nativeElement, 'role', 'tab');
    this.renderer.setAttribute(
      this.ref.nativeElement,
      'aria-selected',
      this.isDefaultActive ? 'true' : 'false',
    );

    if (this.analyticsString) {
      this.renderer.setAttribute(
        this.ref.nativeElement,
        'data-analytics',
        this.analyticsString,
      );
    }

    if (this.idString) {
      this.renderer.setAttribute(
        this.ref.nativeElement,
        'data-id',
        this.idString,
      );
    }
  }
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
}
