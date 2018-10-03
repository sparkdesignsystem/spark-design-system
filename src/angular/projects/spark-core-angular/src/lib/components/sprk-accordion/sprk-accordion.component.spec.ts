import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkAccordionComponent } from './sprk-accordion.component';

describe('SparkAccordionComponent', () => {
  let component: SparkAccordionComponent;
  let fixture: ComponentFixture<SparkAccordionComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkAccordionComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAccordionComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if accordionType is "secondary"', () => {
    component.accordionType = 'secondary';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-Accordion sprk-o-VerticalList sprk-c-Accordion--secondary'
    );
  });

  it('should do nothing if accordionType is not recognized', () => {
    component.accordionType = 'not a real value';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-Accordion sprk-o-VerticalList'
    );
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-Accordion sprk-o-VerticalList sprk-u-man'
    );
  });
});
