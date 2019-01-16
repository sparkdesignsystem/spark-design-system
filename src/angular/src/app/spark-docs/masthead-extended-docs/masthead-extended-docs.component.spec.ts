import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { MastheadExtendedDocsComponent } from './masthead-extended-docs.component';

describe('MastheadExtendedDocsComponent', () => {
  let component: MastheadExtendedDocsComponent;
  let fixture: ComponentFixture<MastheadExtendedDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule],
      declarations: [MastheadExtendedDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastheadExtendedDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
