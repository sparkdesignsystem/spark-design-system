import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkUnorderedListComponent } from './sprk-unordered-list.component';

describe('SprkUnorderedListComponent', () => {
  let component: SprkUnorderedListComponent;
  let fixture: ComponentFixture<SprkUnorderedListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkUnorderedListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkUnorderedListComponent);
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

  it('classes should get set if listType is indented', () => {
    component.listType = 'indented';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--indented')).toEqual(true);
  });

  it('classes should get set if listType is bare', () => {
    component.listType = 'bare';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-b-List--bare')).toEqual(true);
  });

  it('classes should get set if listType is horizontal', () => {
    component.listType = 'horizontal';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-HorizontalList')).toEqual(true);
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.listType = 'bare';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(
      'sprk-b-List sprk-b-List--bare sprk-u-pam sprk-u-man'
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
