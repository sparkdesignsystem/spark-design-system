import { Component, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { toggleAnimations } from './sprk-toggle-animations';
import { uniqueId } from 'lodash';
import 'focus-visible';

@Component({
  selector: 'sprk-toggle',
  template: `
    <div
      class="sprk-c-Toggle {{ additionalClasses }}"
      [attr.data-id]="idString"
    >
      <button
        variant="icon"
        [ngClass]="getClasses()"
        (click)="toggle($event)"
        [attr.aria-expanded]="isOpen ? 'true' : 'false'"
        [attr.data-analytics]="analyticsString"
        #toggleTrigger
      >
        <sprk-icon
          iconType="chevron-down-circle-two-color"
          additionalClasses="{{
            iconClass
          }} sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--toggle {{ iconStateClass }}"
        ></sprk-icon>
        {{ title }}
      </button>

      <div
        [@toggleContent]="animState"
        #toggleContent
      >
        <div class="sprk-u-pts sprk-u-pbs sprk-c-Toggle__content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  animations: [toggleAnimations.toggleContent]
})
export class SprkToggleComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @ViewChild('toggleTrigger', { static: true }) toggleTrigger: ElementRef;
  @ViewChild('toggleContent', { static: true }) toggleContent: ElementRef;

  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * The value supplied will be
   * rendered as the main Toggle link text.
   */
  @Input()
  title: string;
  /**
   * The value supplied will be assigned as a
   * CSS class on the icon used in the Toggle.
   * This is intended for overrides.
   */
  @Input()
  iconClass: string;
  /**
   * The value supplied will be assigned as a CSS class
   * on the clickable title text used in the Toggle.
   * This is intended for overrides.
   */
  @Input()
  titleFontClass: 'sprk-b-TypeBodyThree';
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
   * @ignore
   */
  public isOpen = false;
  /**
   * @ignore
   */
  public iconStateClass = '';
  /**
   * @ignore
   */
  public animState = 'closed';

  /**
   * @ignore
   */
  toggleState(): void {
    this.isOpen === false
      ? (this.animState = 'closed')
      : (this.animState = 'open');

    this.isOpen === false
      ? (this.iconStateClass = '')
      : (this.iconStateClass = 'sprk-c-Icon--open');
  }

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    this.toggleState();
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [
      'sprk-c-Toggle__trigger sprk-u-TextCrop--none',
      this.titleFontClass,
    ];
    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  generateAriaControls(): void {
    const triggerElement = this.toggleTrigger.nativeElement;
    const contentElement = this.toggleContent.nativeElement;
    const triggerAriaControls = triggerElement.getAttribute('aria-controls');
    let contentId = contentElement.getAttribute('id');

    // Warn if aria-controls exists but the id does not
    if (triggerAriaControls && !contentId) {
      console.warn(`Spark Design System Warning - The component with aria-controls="${triggerAriaControls}" expects a matching id on the content element.`);
      return;
    }

    // Warn if aria-controls and id both exist but don't match
    if (contentId && triggerAriaControls && contentId !== triggerAriaControls) {
      console.warn(`Spark Design System Warning - The value of aria-controls ("${triggerAriaControls}") should match the id of the content element ("${contentId}").`);
      return;
    }

    // If we don't have a valid id, generate one with lodash
    if (!contentId) {
      contentId = uniqueId(`sprk_toggle_content_`);
      this.renderer.setAttribute(contentElement, 'id', contentId);
    }

    // set the value of aria-controls
    this.renderer.setAttribute(triggerElement, 'aria-controls', contentId);
  }

  ngAfterViewInit() {
    this.toggleState();
    this.generateAriaControls();
  }
}
