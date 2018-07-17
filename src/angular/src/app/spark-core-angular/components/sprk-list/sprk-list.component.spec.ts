import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkListComponent } from './sprk-list.component';

describe('SparkListComponent', () => {
  let component: SparkListComponent;
  let fixture: ComponentFixture<SparkListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ul');
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
    expect(component.getClasses()).toEqual('sprk-b-List sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString = 'List 1';
    fixture.detectChanges();
    expect(element.hasAttribute('data-analytics')).toEqual(true);
    expect(element.getAttribute('data-analytics')).toEqual('List 1');
  });
});
