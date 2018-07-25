import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSelectionItemContainerComponent } from './sprk-selection-item-container.component';

describe('SparkSelectionItemContainerComponent', () => {
  let component: SparkSelectionItemContainerComponent;
  let fixture: ComponentFixture<SparkSelectionItemContainerComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkSelectionItemContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSelectionItemContainerComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual('sprk-c-Accordion sprk-o-VerticalList sprk-u-man');
  })
});
