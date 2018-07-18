import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkWideNavigationComponent } from './sprk-wide-navigation.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkWideNavigationComponent', () => {
  let component: SparkWideNavigationComponent;
  let fixture: ComponentFixture<SparkWideNavigationComponent>;
  let wideNavigationElement: HTMLElement;

  let links = [
    {
      text: 'Item 1',
      href: '/alerts',
      analyticsString: 'Link to Item 1',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'Item 2',
          href: '/alerts'
        }
      ]
    },
    {
      text: 'Item 2',
      href: '/icons',
      active: false
    },
    {
      text: 'Item 3',
      href: '/links',
      active: false
    }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        SparkWideNavigationComponent,
        SparkIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkWideNavigationComponent);
    component = fixture.componentInstance;
    wideNavigationElement = fixture.nativeElement.querySelector('ul');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add any additional classes when additionalClasses has a value', () => {
    component.additionalClasses = "sprk-u-man";
    fixture.detectChanges();
    expect(wideNavigationElement.classList.toString()).toEqual('sprk-c-WideNavigation sprk-u-man');
  });

  it('should map incoming links to nav items', () => {
    component.links = links;
    fixture.detectChanges();
    expect(wideNavigationElement.querySelector('a').textContent.trim()).toEqual('Item 1');
  });

  it('should add aria-haspopup on an item, if theres a subnav', () => {
    component.links = links;
    fixture.detectChanges();
    expect(wideNavigationElement.querySelectorAll('li')[0].getAttribute('aria-haspopup')).toEqual('true');
    expect(wideNavigationElement.querySelectorAll('li')[1].getAttribute('aria-haspopup')).toEqual(null);
  });

  it('should add aria-expanded on an item, if theres a subnav and the item is focused', () => {
    component.links = links;
    fixture.detectChanges();
    wideNavigationElement.querySelector('li').dispatchEvent(new Event('focusin'));
    fixture.detectChanges();
    expect(wideNavigationElement.querySelector('li').getAttribute('aria-expanded')).toEqual('true');
  });

  it('should hide any dropdowns that are open if focusin is triggered outside the nav', () => {
    component.links = links;
    fixture.detectChanges();
    wideNavigationElement.querySelector('li').dispatchEvent(new Event('focusin'));
    fixture.detectChanges();
    document.dispatchEvent(new Event('focusin'));
    fixture.detectChanges();
    expect(wideNavigationElement.querySelector('li').getAttribute('aria-expanded')).toEqual('false');

  });

});
