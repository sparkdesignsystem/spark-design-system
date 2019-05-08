import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { DictionaryDocsComponent } from './dictionary-docs.component';

describe('DictionaryDocsComponent', () => {
  let component: DictionaryDocsComponent;
  let fixture: ComponentFixture<DictionaryDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [DictionaryDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
