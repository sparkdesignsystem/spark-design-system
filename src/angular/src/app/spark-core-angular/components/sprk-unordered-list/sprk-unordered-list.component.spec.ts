import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkUnorderedListComponent } from './sprk-unordered-list.component';

describe('SparkUnorderedListComponent', () => {
  let component: SparkUnorderedListComponent;
  let fixture: ComponentFixture<SparkUnorderedListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkUnorderedListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkUnorderedListComponent);
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
});
