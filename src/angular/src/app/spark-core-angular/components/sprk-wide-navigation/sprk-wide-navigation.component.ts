import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-wide-navigation',
  template: `
    <nav role="navigation">
      <ul [ngClass]="getClasses()" data-sprk-navigation="wide">
        <li *ngFor="let link of links" class="sprk-c-WideNavigation__item">
          <a class="sprk-c-WideNavigation__link" [routerLink]="link.href">{{ link.text }}
          <sprk-icon *ngIf="link.subNav" iconType="chevron-down"></sprk-icon> 
          </a>
          <ul *ngIf="link.subNav" class="sprk-c-WideNavigation sprk-c-WideNavigation--sub sprk-u-Display--none">
            <li *ngFor="let sublink of link.subNav" class="sprk-c-WideNavigation__item sprk-c-WideNavigation__item--sub">
              <a class="sprk-c-WideNavigation__link sprk-c-WideNavigation__link--sub">{{ sublink.text }}</a>
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
