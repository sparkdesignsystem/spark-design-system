import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from '../../sprk-icon/sprk-icon.component';
import { SparkMastheadAccordionComponent } from './sprk-masthead-accordion.component';

describe('SparkMastheadAccordionComponent', () => {
  let component: SparkMastheadAccordionComponent;
  let fixture: ComponentFixture<SparkMastheadAccordionComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkMastheadAccordionComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkMastheadAccordionComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should do nothing when additionalClasses has no value', () => {
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare'
    );
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-MastheadAccordion sprk-b-List sprk-b-List--bare sprk-u-man'
    );
  });
});
