import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

describe('SparkTabbedNavigationComponent', () => {
  let component: SparkTabbedNavigationComponent;
  let fixture: ComponentFixture<SparkTabbedNavigationComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkTabbedNavigationComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkTabbedNavigationComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-c-Tabs sprk-u-man');
  });

  it('should set aria-orientation to the incoming orientation value', () => {
    component.orientation = 'vertical';
    fixture.detectChanges();
    expect(element.getAttribute('aria-orientation')).toEqual('vertical');
  });
});
