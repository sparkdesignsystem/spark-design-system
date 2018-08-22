import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkCardModule } from '../../spark-extras-angular/components/sprk-card/sprk-card.module';
import { StackDocsComponent } from './stack-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StackDocsComponent', () => {
  let component: StackDocsComponent;
  let fixture: ComponentFixture<StackDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SparkCoreAngularModule,
        RouterTestingModule,
        SparkCardModule
      ],
      declarations: [ StackDocsComponent ]
    })
    .compileComponents();
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
