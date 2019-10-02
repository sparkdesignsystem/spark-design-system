import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../../../icons/angular/sprk-icon.component';
import { SprkLinkComponent } from '../../../../base/links/angular/sprk-link.component';
import { SprkMastheadAccordionComponent } from './sprk-masthead-accordion.component';

describe('SprkMastheadAccordionComponent', () => {
  let component: SprkMastheadAccordionComponent;
  let fixture: ComponentFixture<SprkMastheadAccordionComponent>;
  let accordionElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprkMastheadAccordionComponent,
        SprkIconComponent,
        SprkLinkComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkMastheadAccordionComponent);
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
