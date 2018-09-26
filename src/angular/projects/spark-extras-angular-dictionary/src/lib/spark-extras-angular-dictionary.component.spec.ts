import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkDictionaryComponent } from './spark-extras-angular-dictionary.component';

describe('SparkExtrasAngularDictionaryComponent', () => {
  let component: SparkDictionaryComponent;
  let fixture: ComponentFixture<SparkDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkDictionaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
