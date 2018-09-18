import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkHighlightBoardModule } from '../../spark-extras-angular/components/sprk-highlight-board/sprk-highlight-board.module';
import { HighlightBoardDocsComponent } from './highlight-board-docs.component';

describe('HighlightBoardDocsComponent', () => {
  let component: HighlightBoardDocsComponent;
  let fixture: ComponentFixture<HighlightBoardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SparkCoreAngularModule,
        SparkHighlightBoardModule,
        RouterTestingModule
      ],
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
