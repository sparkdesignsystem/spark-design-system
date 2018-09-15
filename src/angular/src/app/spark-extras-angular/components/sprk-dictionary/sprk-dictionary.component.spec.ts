import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkDictionaryComponent } from './sprk-dictionary.component';

describe('Spark Dictionary', () => {
  let fixture: ComponentFixture<SparkDictionaryComponent>;
  let component: SparkDictionaryComponent;
  let dictionaryElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkDictionaryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SparkDictionaryComponent);
    component = fixture.componentInstance;
    dictionaryElement = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should mark the dictionary striped if dictionaryType = striped', () => {
    component.dictionaryType = 'striped';
    fixture.detectChanges();
    expect(
      dictionaryElement.classList.contains('sprk-c-Dictionary--striped')
    ).toEqual(true);
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(dictionaryElement.classList.toString()).toEqual(
      'sprk-c-Dictionary sprk-u-man'
    );
  });
});
