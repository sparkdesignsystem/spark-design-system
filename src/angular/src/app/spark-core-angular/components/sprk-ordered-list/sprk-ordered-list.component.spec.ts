import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkOrderedListComponent } from './sprk-ordered-list.component';

describe('SparkOrderedListComponent', () => {
  let component: SparkOrderedListComponent;
  let fixture: ComponentFixture<SparkOrderedListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkOrderedListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkOrderedListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ol');
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
});
