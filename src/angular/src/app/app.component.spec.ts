import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';
import { SparkAwardComponent } from './spark-extras-angular/components/sprk-award/sprk-award.component';
import { SparkCardComponent } from './spark-extras-angular/components/sprk-card/sprk-card.component';
import { SparkDictionaryComponent } from './spark-extras-angular/components/sprk-dictionary/sprk-dictionary.component';
import { SparkHighlightBoardComponent } from './spark-extras-angular/components/sprk-highlight-board/sprk-highlight-board.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SparkCoreAngularModule],
      declarations: [
        AppComponent,
        SparkAwardComponent,
        SparkDictionaryComponent,
        SparkCardComponent,
        SparkHighlightBoardComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Spark-Angular');
  }));
});
