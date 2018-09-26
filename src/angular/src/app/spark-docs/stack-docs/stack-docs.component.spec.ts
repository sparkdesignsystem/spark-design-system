import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkCardModule } from '../../spark-extras-angular/components/spark-extras-angular-card/spark-extras-angular-card.module';
import { StackDocsComponent } from './stack-docs.component';

describe('StackDocsComponent', () => {
  let component: StackDocsComponent;
  let fixture: ComponentFixture<StackDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule, SparkCardModule],
      declarations: [StackDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
