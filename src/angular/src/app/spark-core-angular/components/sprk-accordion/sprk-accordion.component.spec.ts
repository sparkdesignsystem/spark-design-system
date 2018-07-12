import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAccordionComponent } from './sprk-accordion.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SparkAccordionComponent', () => {
  let component: SparkAccordionComponent;
  let fixture: ComponentFixture<SparkAccordionComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkAccordionComponent,
        SparkIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAccordionComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
