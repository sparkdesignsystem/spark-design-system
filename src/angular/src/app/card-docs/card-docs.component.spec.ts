import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../spark-core-angular/spark-core-angular.module';
import { CardDocsComponent } from './card-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardDocsComponent', () => {
  let component: CardDocsComponent;
  let fixture: ComponentFixture<CardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule],
      declarations: [ CardDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
