import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkDictionaryModule } from '../../spark-extras-angular/components/spark-extras-angular-dictionary/spark-extras-angular-dictionary.module';
import { DictionaryDocsComponent } from './dictionary-docs.component';

describe('DictionaryDocsComponent', () => {
  let component: DictionaryDocsComponent;
  let fixture: ComponentFixture<DictionaryDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, SparkDictionaryModule],
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
