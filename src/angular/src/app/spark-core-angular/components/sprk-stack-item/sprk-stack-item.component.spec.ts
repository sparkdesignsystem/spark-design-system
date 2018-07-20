import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkStackItemComponent } from './sprk-stack-item.component';

describe('SparkStackItemComponent', () => {
  let component: SparkStackItemComponent;
  let fixture: ComponentFixture<SparkStackItemComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkStackItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkStackItemComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
