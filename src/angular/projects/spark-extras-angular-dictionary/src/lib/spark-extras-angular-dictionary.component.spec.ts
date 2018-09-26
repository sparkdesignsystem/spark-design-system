import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkExtrasAngularDictionaryComponent } from './spark-extras-angular-dictionary.component';

describe('SparkExtrasAngularDictionaryComponent', () => {
  let component: SparkExtrasAngularDictionaryComponent;
  let fixture: ComponentFixture<SparkExtrasAngularDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkExtrasAngularDictionaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkExtrasAngularDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
