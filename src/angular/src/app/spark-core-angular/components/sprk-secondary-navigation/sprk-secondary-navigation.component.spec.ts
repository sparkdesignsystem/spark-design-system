import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSecondaryNavigationComponent } from './sprk-secondary-navigation.component';

describe('SparkSecondaryNavigationComponent', () => {
  let component: SparkSecondaryNavigationComponent;
  let fixture: ComponentFixture<SparkSecondaryNavigationComponent>;
  let secondaryNavigationElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkSecondaryNavigationComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSecondaryNavigationComponent);
    component = fixture.componentInstance;
    secondaryNavigationElement = fixture.nativeElement.querySelector('ul');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(secondaryNavigationElement.classList.toString()).toEqual('sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-u-man');
  })
});
