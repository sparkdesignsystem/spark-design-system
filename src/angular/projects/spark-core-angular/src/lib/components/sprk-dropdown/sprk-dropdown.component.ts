import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'sprk-dropdown',
  template: `
    <a
      class="sprk-b-Link sprk-b-Link--plain"
      aria-haspopup="true"
      href=""
      (click)="toggle($event)"
      >Trigger Dropdown</a
    >
    <div class="sprk-c-Dropdown" *ngIf="isOpen">
      <div class="sprk-c-Dropdown__header" *ngIf="title">
        <h2 class="sprk-c-Dropdown__title sprk-b-TypeDisplayEight">
          {{ title }}
        </h2>
      </div>
      <ul class="sprk-c-Dropdown__links">
        <li *ngFor="let choice of choices">
          <a
            [attr.data-sprk-dropdown-value]="choice.value"
            href=""
            [ngClass]="{
              'sprk-c-Dropdown__link': true,
              'sprk-c-Dropdown__link--active': choice.active
            }"
            >{{ choice.text }}</a
          >
        </li>
        <li class="sprk-c-Dropdown__item">
          <a class="sprk-c-Dropdown__link" href="#nogo">
            <p class="sprk-b-TypeBodyOne">Choice Title</p>
            <p>Information about this choice</p>
            <p>More information</p>
          </a>
        </li>
        <li class="sprk-c-Dropdown__item">
          <a
            class="sprk-c-Dropdown__link sprk-c-Dropdown__link--active"
            href="#nogo"
          >
            <p class="sprk-b-TypeBodyOne">Choice Title</p>
            <p>Information about this choice</p>
            <p>More information</p>
          </a>
        </li>
      </ul>
      <ng-content select="[sprkDropdownFooter]"></ng-content>
    </div>
  `
})
export class SparkDropdownComponent {
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;
  @Input()
  isOpen = false;
  @Input()
  title: string;
  @Input()
  choices: object;

  constructor(public ref: ElementRef) {}

  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(event): void {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.hideDropdown();
    }
  }

  hideDropdown(): void {
    this.isOpen = false;
  }

  getClasses(): string {
    const classArray: string[] = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
