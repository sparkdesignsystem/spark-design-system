import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'sprk-wide-navigation',
  template: `
    <nav role="navigation">
      <ul [ngClass]="getClasses()">
        <li *ngFor="let link of links" 
            class="sprk-c-WideNavigation__item" 
            [attr.aria-haspopup]="link.subNav ? 'true': null" 
            [attr.aria-expanded]="link.subNav && link.focused ? 'true': 'false'"
          (focusin)="hideAllDropDowns($event); link.focused = true"
          (mouseenter)="hideAllDropDowns($event); link.focused = true"
          (mouseleave)="hideAllDropDowns($event)"
        >
          <a class="sprk-c-WideNavigation__link" 
             [routerLink]="link.href" 
             [attr.data-analytics]="link.analyticsString"
             href="#nogo">{{ link.text }}
          <sprk-icon *ngIf="link.subNav" iconType="chevron-down"></sprk-icon> 
          </a>
          <ul *ngIf="link.subNav" 
            [ngClass]="{ 
              'sprk-c-WideNavigation': true,
              'sprk-c-WideNavigation--sub': true,
              'sprk-u-Display--none': !link.focused }"
          >
            <li *ngFor="let sublink of link.subNav; let last = last" 
                class="sprk-c-WideNavigation__item sprk-c-WideNavigation__item--sub">
              <a class="sprk-c-WideNavigation__link sprk-c-WideNavigation__link--sub" 
                 [routerLink]="sublink.href"
                 [attr.data-analytics]="sublink.analyticsString"
                 href="#nogo">
                {{ sublink.text }}
              </a>
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
      if (link.hasOwnProperty('focused')) {
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
