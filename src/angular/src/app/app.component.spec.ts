import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkIconSetComponent } from './spark-core-angular/components/sprk-icon-set/sprk-icon-set.component';
import { SparkAwardComponent } from './spark-extras-angular/components/sprk-award/sprk-award.component';
import { SparkCardComponent } from './spark-extras-angular/components/sprk-card/sprk-card.component';
import { SparkDictionaryComponent } from './spark-extras-angular/components/sprk-dictionary/sprk-dictionary.component';
import { SparkHighlightBoardComponent } from './spark-extras-angular/components/sprk-highlight-board/sprk-highlight-board.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent,
        SparkAwardComponent,
        SparkDictionaryComponent,
        SparkCardComponent,
        SparkHighlightBoardComponent,
        SparkIconSetComponent
      ],
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
