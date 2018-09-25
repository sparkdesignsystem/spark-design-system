import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SparkCoreAngularModule } from './spark-core-angular/spark-core-angular.module';
import { SparkAwardComponent } from './spark-extras-angular/components/spark-extras-angular-award/spark-extras-angular-award.component';
import { SparkCardComponent } from './spark-extras-angular/components/spark-extras-angular-card/spark-extras-angular-card.component';
import { SparkDictionaryComponent } from './spark-extras-angular/components/spark-extras-angular-dictionary/spark-extras-angular-dictionary.component';
import { SparkHighlightBoardComponent } from './spark-extras-angular/components/spark-extras-angular-highlight-board/spark-extras-angular-highlight-board.component';

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
