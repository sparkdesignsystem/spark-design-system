import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkCardModule } from '../../spark-extras-angular/components/sprk-card/sprk-card.module';
import { CardDocsComponent } from './card-docs.component';

describe('CardDocsComponent', () => {
  let component: CardDocsComponent;
  let fixture: ComponentFixture<CardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule, SparkCardModule],
      declarations: [CardDocsComponent]
    }).compileComponents();
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
