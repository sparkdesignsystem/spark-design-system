import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkFooterComponent } from './sprk-footer.component';
import { SprkToggleComponent } from '../sprk-toggle/sprk-toggle.component';

describe('SprkFooterComponent', () => {
  let component: SprkFooterComponent;
  let fixture: ComponentFixture<SprkFooterComponent>;
  let element: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [
          SprkIconComponent,
          SprkToggleComponent,
          SprkFooterComponent,
          SprkLinkDirective,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkFooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('footer');
  });

  it('should create itself', () => {
    fixture.detectChanges();
    expect(element).toBeTruthy();
  });

  it('getClasses should match what gets set on the footer', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--misc-b sprk-c-Footer sprk-u-pam sprk-u-man',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });

  it('should set the href link of the localLinks', () => {
    component.localLinks = [
      { heading: 'Site Links', links: [{ text: 'Item 1', href: '/alert' }] },
    ];
    fixture.detectChanges();
    const localLink = fixture.nativeElement.querySelector(
      '.sprk-c-Footer__link',
    );
    expect(localLink.getAttribute('href')).toEqual('/alert');
  });

  it('should set the href link of the localLinks when using routerLink', () => {
    component.localLinks = [
      {
        heading: 'Site Links',
        links: [{ text: 'Item 1', routerLink: '/alert-router' }],
      },
    ];
    fixture.detectChanges();
    const localLink = fixture.nativeElement.querySelector(
      '.sprk-c-Footer__link',
    );
    expect(localLink.getAttribute('href')).toEqual('/alert-router');
  });

  it('should set the href link of the globalLinks', () => {
    component.globalLinks = [
      {
        text: 'Test Text',
        href: '/alert',
        imgSrc: 'https://spark-assets.netlify.app/rocket-by-ql-white.svg',
        imgAlt: 'Rocket Mortgage by Quicken Loans Logo',
      },
    ];
    fixture.detectChanges();
    const globalLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(globalLink.getAttribute('href')).toEqual('/alert');
  });

  it('should set the href link of the globalLinks when using routerLink', () => {
    component.globalLinks = [
      {
        text: 'Test Text',
        routerLink: '/alert-router',
        imgSrc: 'https://spark-assets.netlify.app/rocket-by-ql-white.svg',
        imgAlt: 'Rocket Mortgage by Quicken Loans Logo',
      },
    ];
    fixture.detectChanges();
    const globalLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(globalLink.getAttribute('href')).toEqual('/alert-router');
  });

  it('should set the href link of the socialLinks', () => {
    component.socialLinks = [{ href: '/alert', icon: 'facebook' }];
    fixture.detectChanges();
    const socialLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(socialLink.getAttribute('href')).toEqual('/alert');
  });

  it('should set the href link of the socialLinks when using routerLink', () => {
    component.socialLinks = [{ routerLink: '/alert-router', icon: 'facebook' }];
    fixture.detectChanges();
    const socialLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(socialLink.getAttribute('href')).toEqual('/alert-router');
  });

  it('should set the href link of the badgeLinks', () => {
    component.badgeLinks = [{ href: '/alert', icon: 'townhouse' }];
    fixture.detectChanges();
    const badgeLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(badgeLink.getAttribute('href')).toEqual('/alert');
  });

  it('should set the href link of the badgeLinks when using routerLink', () => {
    component.badgeLinks = [{ routerLink: '/alert-router', icon: 'townhouse' }];
    fixture.detectChanges();
    const badgeLink = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(badgeLink.getAttribute('href')).toEqual('/alert-router');
  });

  it('should set the href link of the awards', () => {
    component.awards = [
      {
        href: '/alert',
        imgSrc: 'https://spark-assets.netlify.app/spark-logo-mark.svg',
        imgAlt: 'placeholder',
      },
    ];
    fixture.detectChanges();
    const award = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(award.getAttribute('href')).toEqual('/alert');
  });

  it('should set the href link of the awards when using routerLink', () => {
    component.awards = [
      {
        routerLink: '/alert-router',
        imgSrc: 'https://spark-assets.netlify.app/spark-logo-mark.svg',
        imgAlt: 'placeholder',
      },
    ];
    fixture.detectChanges();
    const award = fixture.nativeElement.querySelector('.sprk-b-Link');
    expect(award.getAttribute('href')).toEqual('/alert-router');
  });
});
