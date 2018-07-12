import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAccordionItemComponent } from './sprk-accordion-item.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SparkAccordionItemComponent', () => {
  let component: SparkAccordionItemComponent;
  let fixture: ComponentFixture<SparkAccordionItemComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkAccordionItemComponent,
        SparkIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAccordionItemComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
