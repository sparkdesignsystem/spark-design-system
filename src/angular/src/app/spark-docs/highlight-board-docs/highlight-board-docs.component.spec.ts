import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { HighlightBoardDocsComponent } from './highlight-board-docs.component';

describe('HighlightBoardDocsComponent', () => {
  let component: HighlightBoardDocsComponent;
  let fixture: ComponentFixture<HighlightBoardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule],
      declarations: [HighlightBoardDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightBoardDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
