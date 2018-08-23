import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAwardComponent } from '../../../spark-extras-angular/components/sprk-award/sprk-award.component';
import { SparkFooterComponent } from './sprk-footer.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SparkToggleComponent } from '../sprk-toggle/sprk-toggle.component';
import { SparkSecondaryNavigationComponent } from '../sprk-secondary-navigation/sprk-secondary-navigation.component';
import { SparkSecondaryNavigationItemComponent } from '../sprk-secondary-navigation-item/sprk-secondary-navigation-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkFooterComponent', () => {
  let component: SparkFooterComponent;
  let fixture: ComponentFixture<SparkFooterComponent>;
  let element: HTMLElement;
  let siteLinkCols: Object = { heading: 'cats', siteLinks: {text: 'Item 1', href: '/alerts', analytics: 'test'}};
  let feedbackLinks: Object = { icon: 'bell', text: 'Item 1', href: '/alerts', analytics: 'test' };
  let socialLinks: Object = { icon: 'bell', href: '/alerts', analytics: 'test' };
  let navLinks: Object = { text: 'Item 1', href: '/alerts', analytics: 'test' };
  let badges: Object = { href: '/alerts', analytics: 'test', alt: 'test', src: 'test' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SparkAwardComponent,
        SparkStackComponent,
        SparkIconComponent,
        SparkToggleComponent,
        SparkSecondaryNavigationComponent,
        SparkSecondaryNavigationItemComponent,
        SparkFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkFooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('footer');
  })

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
    expect(component.getClasses()).toEqual('sprk-o-Box sprk-o-Stack sprk-o-Stack--large sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClassesBadges has a value', () => {
    component.additionalClassesBadges = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesBadges()).toEqual('sprk-o-Stack__item sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClassesBadges does not have a value', () => {
    fixture.detectChanges();
    expect(component.getClassesBadges()).toEqual('sprk-o-Stack__item');
  });
});
