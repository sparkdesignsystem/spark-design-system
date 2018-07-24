import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkInputContainerComponent } from './sprk-input-container.component';

describe('SparkInputContainerComponent', () => {
  let component: SparkInputContainerComponent;
  let fixture: ComponentFixture<SparkInputContainerComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkInputContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkInputContainerComponent);
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
