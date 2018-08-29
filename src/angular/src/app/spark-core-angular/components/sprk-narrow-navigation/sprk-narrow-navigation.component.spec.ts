import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkNarrowNavigationComponent } from './sprk-narrow-navigation.component';

describe('SparkNarrowNavigationComponent', () => {
  let component: SparkNarrowNavigationComponent;
  let fixture: ComponentFixture<SparkNarrowNavigationComponent>;
  let narrowNavigationElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkNarrowNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkNarrowNavigationComponent);
    component = fixture.componentInstance;
    narrowNavigationElement = fixture.nativeElement.querySelector('ul');
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
});
