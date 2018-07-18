import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkListItemComponent } from './sprk-list-item.component';

describe('SparkListItemComponent', () => {
  let component: SparkListItemComponent;
  let fixture: ComponentFixture<SparkListItemComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkListItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('li');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(' sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString = 'List Item 1';
    fixture.detectChanges();
    expect(element.hasAttribute('data-analytics')).toEqual(true);
    expect(element.getAttribute('data-analytics')).toEqual('List Item 1');
  });
});
