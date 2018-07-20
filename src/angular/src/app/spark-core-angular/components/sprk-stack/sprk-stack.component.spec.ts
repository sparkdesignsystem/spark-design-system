import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkStackComponent } from './sprk-stack.component';

describe('SparkStackComponent', () => {
  let component: SparkStackComponent;
  let fixture: ComponentFixture<SparkStackComponent>;
  let alertElement: HTMLElement;

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
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
