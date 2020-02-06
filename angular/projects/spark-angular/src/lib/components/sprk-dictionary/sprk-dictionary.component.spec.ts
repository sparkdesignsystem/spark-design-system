import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkDictionaryComponent } from './sprk-dictionary.component';

describe('SprkAngularDictionaryComponent', () => {
  let component: SprkDictionaryComponent;
  let fixture: ComponentFixture<SprkDictionaryComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkDictionaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkDictionaryComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
