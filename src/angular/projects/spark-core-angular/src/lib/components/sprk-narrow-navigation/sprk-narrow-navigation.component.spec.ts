import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkNarrowNavigationComponent } from './sprk-narrow-navigation.component';

describe('SparkNarrowNavigationComponent', () => {
  let component: SparkNarrowNavigationComponent;
  let fixture: ComponentFixture<SparkNarrowNavigationComponent>;
  let narrowNavigationElement: HTMLElement;
  let outerNavElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkNarrowNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkNarrowNavigationComponent);
    component = fixture.componentInstance;
    narrowNavigationElement = fixture.nativeElement.querySelector('ul');
    outerNavElement = fixture.nativeElement.querySelector('nav');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(narrowNavigationElement.classList.contains('sprk-u-man')).toEqual(
      true
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(outerNavElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(outerNavElement.getAttribute('data-id')).toBeNull();
  });
});
