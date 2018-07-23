import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkStackComponent } from './sprk-stack.component';

describe('SparkStackComponent', () => {
  let component: SparkStackComponent;
  let fixture: ComponentFixture<SparkStackComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkStackComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkStackComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct class for itemSpacing', () => {
    component.splitAt = 'medium';
    expect(element.classList.contains('sprk-o-Stack--medium')).toEqual(true);
  });


});
