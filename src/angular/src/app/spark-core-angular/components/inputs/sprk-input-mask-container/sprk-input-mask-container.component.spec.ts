import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkInputMaskContainerComponent } from './sprk-input-mask-container.component';

describe('SparkInputMaskContainerComponent', () => {
  let component: SparkInputMaskContainerComponent;
  let fixture: ComponentFixture<SparkInputMaskContainerComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkInputMaskContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkInputMaskContainerComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual('sprk-b-InputContainer sprk-u-man');
  })
});
