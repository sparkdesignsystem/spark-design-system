import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'sprk-wide-navigation',
  template: `
    <nav role="navigation">
      <ul [ngClass]="getClasses()" data-sprk-navigation="wide">
        <li *ngFor="let link of links" class="sprk-c-WideNavigation__item" [attr.aria-haspopup]="link.subNav ? 'true': null" [attr.aria-expanded]="link.focused ? 'true': 'false'"
          (focusin)="hideAllDropDowns($event); link.focused = true"
          (mouseenter)="hideAllDropDowns($event); link.focused = true"
          (mouseleave)="hideAllDropDowns($event)"
        >
          <a class="sprk-c-WideNavigation__link" [routerLink]="link.href" href="#nogo">{{ link.text }}
          <sprk-icon *ngIf="link.subNav" iconType="chevron-down"></sprk-icon> 
          </a>
          <ul *ngIf="link.subNav" 
            [ngClass]="{ 
              'sprk-c-WideNavigation': true,
              'sprk-c-WideNavigation--sub': true,
              'sprk-u-Display--none': !link.focused }"
          >
            <li *ngFor="let sublink of link.subNav; let last = last" class="sprk-c-WideNavigation__item sprk-c-WideNavigation__item--sub">
              <a class="sprk-c-WideNavigation__link sprk-c-WideNavigation__link--sub" href="#nogo">{{ sublink.text }}</a>
              </li>
          </ul>
        </li>
      </ul>
      <span class="sprk-c-Divider sprk-u-man"></span>
    </nav>`,
  styles: ['']
})


export class SparkWideNavigationComponent {
  @Input() links: Array<Object>;
  @Input() additionalClasses: string;

  @HostListener('document:focusin', ['$event'])
  handleFocusEvent(event: FocusEvent) {
    this.hideAllDropDowns(event);
  }

  hideAllDropDowns(event): void {
    event.stopPropagation();
    this.links.forEach((link: Object) => {
      if(link.hasOwnProperty('focused')) {
        link['focused'] = false;
      }
    })
  }

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-WideNavigation'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
}
