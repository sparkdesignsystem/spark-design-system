import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconSetComponent } from './sprk-icon-set.component';

describe('SparkIconSetComponent', () => {
  let component: SparkIconSetComponent;
  let fixture: ComponentFixture<SparkIconSetComponent>;
  let iconSetElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkIconSetComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkIconSetComponent);
    component = fixture.componentInstance;
    iconSetElement = fixture.nativeElement.querySelector('button');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
