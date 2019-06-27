import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkListItemComponent } from './sprk-list-item.component';

describe('SprkListItemComponent', () => {
  let component: SprkListItemComponent;
  let fixture: ComponentFixture<SprkListItemComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkListItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('li');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString = 'List Item 1';
    fixture.detectChanges();
    expect(element.hasAttribute('data-analytics')).toEqual(true);
    expect(element.getAttribute('data-analytics')).toEqual('List Item 1');
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
