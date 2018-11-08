import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'sprk-wide-navigation',
  template: `
    <nav role="navigation" [attr.data-id]="idString">
      <ul [ngClass]="getClasses()">
        <li
          *ngFor="let link of links"
          [ngClass]="{
            'sprk-c-WideNavigation__item': true,
            'sprk-c-WideNavigation__item--open': link.focused && link.subNav
          }"
          routerLinkActive="sprk-c-WideNavigation__item--active"
          [attr.aria-haspopup]="link.subNav ? 'true' : null"
          [attr.aria-expanded]="link.subNav && link.focused ? 'true' : 'false'"
          (focusin)="hideAllDropDowns($event); link.focused = true"
          (mouseenter)="hideAllDropDowns($event); link.focused = true"
          (mouseleave)="hideAllDropDowns($event)"
        >
          <a
            class="sprk-c-WideNavigation__link"
            [routerLink]="link.href"
            [attr.data-analytics]="link.analyticsString"
            href="#nogo"
            >{{ link.text }}
          </a>
          <div
            *ngIf="link.subNav"
            class="sprk-c-WideNavigation__sub-menu-container"
          >
            <ul
              [ngClass]="{
                'sprk-c-WideNavigation': true,
                'sprk-c-WideNavigation--sub': true,
                'sprk-u-Display--none': !link.focused
              }"
            >
              <li
                *ngFor="let sublink of link.subNav; let last = last"
                class="sprk-c-WideNavigation__item sprk-c-WideNavigation__item--sub"
              >
                <a
                  class="sprk-c-WideNavigation__link sprk-c-WideNavigation__link--sub"
                  [routerLink]="sublink.href"
                  [attr.data-analytics]="sublink.analyticsString"
                  href="#nogo"
                >
                  {{ sublink.text }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <span class="sprk-c-Divider sprk-u-man"></span>
    </nav>
  `
})
export class SparkWideNavigationComponent {
  @Input()
  links: object[];
  @Input()
  additionalClasses: string;
  @Input()
  idString: string;

  @HostListener('document:focusin', ['$event'])
  handleFocusEvent(event: FocusEvent) {
    this.hideAllDropDowns(event);
  }

  hideAllDropDowns(event): void {
    event.stopPropagation();
    this.links.forEach((link: object) => {
      if (link.hasOwnProperty('focused')) {
        link['focused'] = false;
      }
    });
  }

  getClasses(): string {
    const classArray: string[] = ['sprk-c-WideNavigation'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
