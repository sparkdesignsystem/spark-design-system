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
          <div *ngIf="choice.content; then: content; else: link"></div>
          <ng-template #link>
            <a
              [attr.data-sprk-dropdown-value]="choice.value"
              href=""
              [ngClass]="{
                'sprk-c-Dropdown__link': true,
                'sprk-c-Dropdown__link--active': choice.active
              }"
              >{{ choice.text }}
            </a>
          </ng-template>
          <ng-template #content>
            <a
              [attr.data-sprk-dropdown-value]="choice.value"
              href=""
              [ngClass]="{
                'sprk-c-Dropdown__link': true,
                'sprk-c-Dropdown__link--active': choice.active
              }"
            >
              <p class="sprk-b-TypeBodyOne">{{ choice.content.title }}</p>
              <p>{{ choice.content.infoLine1 }}</p>
              <p>{{ choice.content.infoLine2 }}</p>
            </a>
          </ng-template>
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
