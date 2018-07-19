import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'sprk-masthead',
  template: `
    <header [ngClass]="getClasses()" role="banner">
      <div class="sprk-c-Masthead__content">
        <div class="sprk-c-Masthead__top-row">
          <div class="sprk-c-Masthead__hamburger">
            <button class="sprk-c-Hamburger" type="button" [attr.aria-expanded]="isNarrowNavOpen ? true : false"
            (click)="toggleNarrowNav()"
            >
              <span class="sprk-u-ScreenReaderText">Toggle Navigation</span>
              <svg [ngClass]="
                { 'sprk-c-Icon': true,
                  'sprk-c-Icon--l': true,
                  'sprk-c-Hamburger__icon': true,
                  'sprk-c-Hamburger__icon--open': isNarrowNavOpen
                }" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
                <g>
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--one" d="M5 13h90v14H5z" />
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--two" d="M5 43h90v14H5z" />
                  <path class="sprk-c-Hamburger__line sprk-c-Hamburger__line--three" d="M5 73h90v14H5z" />
                </g>
              </svg>
            </button>
          </div>
          <div class="sprk-c-Masthead__logo">
            <a href="#nogo">
              <div class="drizzle-c-Logo-placeholder"></div>
              <span class="sprk-u-ScreenReaderText">Go to the home page</span>
            </a>
          </div>
          <div class="sprk-c-Masthead__secondary-nav">
            <sprk-secondary-navigation>
             <sprk-secondary-navigation-item 
                *ngFor="let link of secondaryNavLinks" 
                [href]="link.href" 
                [spacing]="secondaryNavSpacing"
                [text]="link.text">
              </sprk-secondary-navigation-item> 
            </sprk-secondary-navigation>

          </div>
          <div class="sprk-c-Masthead__search">
            <div class="sprk-b-InputContainer sprk-u-mbn  ">
              <label for="inline-search" class="sprk-u-ScreenReaderText">Search</label>
              <input placeholder="Search" class="sprk-b-TextInput  sprk-u-Width-100" id="inline-search" type="search" role="search" aria-describedby="inline-search--error-container">
              <div class="sprk-b-ErrorText" id="inline-search--error-container">
              </div>
            </div>

          </div>
        </div>
        <div class="sprk-c-Masthead__secondary">
          <p *ngIf="clientName" class="sprk-u-mbn sprk-b-TypeBodyTwo">Hello, {{ clientName }}</p>
          <p *ngIf="loanNumber" class="sprk-b-TypeBodyTwo">Loan #{{ loanNumber }}</p>
        </div>
      </div>
      <div class="sprk-c-Masthead__navigation">
        <div class="sprk-c-Masthead__wide-navigation-container">
          <sprk-wide-navigation [links]="wideNavLinks"></sprk-wide-navigation>
        </div>
        <div *ngIf="isNarrowNavOpen" class="sprk-c-Masthead__narrow-navigation-container">
          <sprk-narrow-navigation>
            <sprk-narrow-navigation-item 
              *ngFor="let link of narrowNavLinks" 
              [subNav]="link.subNav" 
              [href]="link.href" 
              [text]="link.text">
            </sprk-narrow-navigation-item>
          </sprk-narrow-navigation>
        </div>
      </div>
    </header>`,
  styles: ['']
})

export class SparkMastheadComponent {
  @Input() additionalClasses: string;
  @Input() clientName: string;
  @Input() loanNumber: number;
  @Input() wideNavLinks: Array<Object>;
  @Input() narrowNavLinks: Array<Object>;
  @Input() secondaryNavLinks: Array<Object>;
  @Input() secondaryNavSpacing: string = 'medium';
  @Input() isNarrowNavOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  handleResizeEvent() {
    this.closeNarrowNav();
  }

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Masthead'
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  toggleNarrowNav(): void {
    this.isNarrowNavOpen = !this.isNarrowNavOpen;
  }

  closeNarrowNav(): void {
    this.isNarrowNavOpen = false;
  }

}
