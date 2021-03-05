import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'sprk-autocomplete',
  template: `
    <div class="inputContainer">
      <ng-content select="[aria-live-slot]"></ng-content>
      <ng-content select="[label-slot]"></ng-content>
      <ng-content select="[input-icon-container-slot]"></ng-content>
      <ng-content *ngIf="isOpen" select="[list-slot]"></ng-content>
    </div>
  `,
})
// TODO - what if they don't want an icon? What happens with the slot? input-icon-container-slot
export class SprkAutocompleteComponent {
  /**
   * If `true`, the TODO
   */
  @Input()
  isOpen = false;

  /**
   * @ignore
   */
  @HostListener('document:keydown', ['$event'])
  onKeydown($event) {
    if (this.isOpen) {
      if (
        $event.key === 'Escape' ||
        $event.key === 'Esc' ||
        $event.keyCode === 27
      ) {
        this.isOpen = false;
        // this.closedEvent.emit();
      }
    }
  }

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
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string; // TODO where does this go and do we need more?
}
