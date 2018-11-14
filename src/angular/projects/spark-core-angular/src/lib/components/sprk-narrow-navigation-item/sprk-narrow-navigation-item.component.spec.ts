import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkNarrowNavigationItemComponent } from './sprk-narrow-navigation-item.component';

describe('SparkNarrowNavigationItemComponent', () => {
  let component: SparkNarrowNavigationItemComponent;
  let fixture: ComponentFixture<SparkNarrowNavigationItemComponent>;
  let narrowNavigationItemElement: HTMLElement;
  const subNav: object = [
    {
      text: 'Item 1',
      href: '/alerts',
      analyticsString: 'Hi there'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [SparkNarrowNavigationItemComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkNarrowNavigationItemComponent);
    component = fixture.componentInstance;
    narrowNavigationItemElement = fixture.nativeElement.querySelector('li');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.subNav = subNav;
    component.href = '/alerts';
    component.text = 'Alerts';
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(
      narrowNavigationItemElement.classList.contains('sprk-u-man')
    ).toEqual(true);
  });

  it('should show have a routerLink if theres no subNav', () => {
    component.href = '/google.com';
    component.text = 'Google';
    fixture.detectChanges();
    expect(
      narrowNavigationItemElement.querySelector('a').getAttribute('href')
    ).toEqual(component.href);
  });

  it('should have a #nogo on the outer anchor if there is a submenu', () => {
    component.subNav = subNav;
    component.href = '/google.com';
    component.text = 'Google';
    fixture.detectChanges();
    expect(
      narrowNavigationItemElement.querySelector('a').getAttribute('href')
    ).toEqual('#nogo');
  });

  it('clicking should toggle isOpen', () => {
    component.subNav = subNav;
    component.href = '/google.com';
    component.text = 'Google';
    fixture.detectChanges();

    expect(component.isOpen).toEqual(false);
    narrowNavigationItemElement.querySelector('a').click();
    expect(component.isOpen).toEqual(true);
    narrowNavigationItemElement.querySelector('a').click();
    expect(component.isOpen).toEqual(false);
  });

  it('should render open if isOpen is true', () => {
    component.isOpen = true;
    component.href = '/google.com';
    component.text = 'Google';
    fixture.detectChanges();

    expect(
      narrowNavigationItemElement.classList.contains(
        'sprk-c-Accordion__item--open'
      )
    ).toEqual(true);
  });
});
