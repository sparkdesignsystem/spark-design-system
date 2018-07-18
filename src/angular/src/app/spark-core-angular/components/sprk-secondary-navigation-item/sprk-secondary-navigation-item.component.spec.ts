import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSecondaryNavigationItemComponent } from './sprk-secondary-navigation-item.component';

describe('SparkSecondaryNavigationItemComponent', () => {
  let component: SparkSecondaryNavigationItemComponent;
  let fixture: ComponentFixture<SparkSecondaryNavigationItemComponent>;
  let secondaryNavigationElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkSecondaryNavigationItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSecondaryNavigationItemComponent);
    component = fixture.componentInstance;
    secondaryNavigationElement = fixture.nativeElement.querySelector('ul');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(secondaryNavigationElement.classList.toString()).toEqual('sprk-c-Accordion sprk-o-VerticalList sprk-u-man');
  })
});
