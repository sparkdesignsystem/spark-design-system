import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { PromoDocsComponent } from './promo-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PromoDocsComponent', () => {
  let component: PromoDocsComponent;
  let fixture: ComponentFixture<PromoDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule],
      declarations: [ PromoDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
