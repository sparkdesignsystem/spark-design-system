import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkAccordionComponent } from './sprk-accordion.component';

describe('SprkAccordionComponent', () => {
  let component: SprkAccordionComponent;
  let fixture: ComponentFixture<SprkAccordionComponent>;
  let accordionElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkAccordionComponent, SprkIconComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAccordionComponent);
    component = fixture.componentInstance;
    accordionElement = fixture.nativeElement.querySelector('ul');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should do nothing when additionalClasses has no value', () => {
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-Accordion sprk-o-VerticalList',
    );
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(accordionElement.classList.toString()).toEqual(
      'sprk-c-Accordion sprk-o-VerticalList sprk-u-man',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(accordionElement.getAttribute('data-id')).toEqual(testString);
  });
});
