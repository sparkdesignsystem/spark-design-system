import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkStackComponent } from '../sprk-stack/sprk-stack.component';
import { SprkStackItemDirective } from '../../directives/sprk-stack-item/sprk-stack-item.directive';
import { SprkLinkComponent } from '../sprk-link/sprk-link.component';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';

describe('SprkHighlightBoardComponent', () => {
  let component: SprkHighlightBoardComponent;
  let fixture: ComponentFixture<SprkHighlightBoardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SprkHighlightBoardComponent,
        SprkStackComponent,
        SprkLinkComponent,
        SprkStackItemDirective,
        SprkHighlightBoardComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkHighlightBoardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if type is not set', () => {
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image'
    );
  });

  it('should add the correct class if type is set as noImage', () => {
    component.type = 'noImage';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-HighlightBoard');
  });

  it('should add the correct class if type is set as stacked', () => {
    component.type = 'stacked';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--stacked'
    );
  });

  it('should set the data-analytics attribute given a value in the analyticsStringCta Input', () => {
    const str = 'Cats';
    component.ctaText = str;
    component.analyticsStringCta = str;
    fixture.detectChanges();
    const link = element.querySelectorAll('[data-analytics]');
    expect(link[0].getAttribute('data-analytics')).toEqual(str);
  });

  it('should set the data-analytics attribute given a value in the analyticsStringCta2 Input', () => {
    const cats = 'Cats';
    component.ctaText = cats;
    component.analyticsStringCta = cats;
    const dogs = 'Dogs';
    component.ctaText2 = dogs;
    component.analyticsStringCta2 = dogs;
    fixture.detectChanges();
    const link2 = element.querySelectorAll('[data-analytics]');
    expect(link2[1].getAttribute('data-analytics')).toEqual(dogs);
  });

  it('should add the correct classes if type and additionalClasses have values', () => {
    component.type = 'default';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.getAttribute('data-id')).toBeNull();
  });
});
