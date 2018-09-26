import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkAwardModule } from '@sparkdesignsystem/spark-extras-angular-award';
import { SparkCardModule } from '@sparkdesignsystem/spark-extras-angular-card';
import { SparkDictionaryModule } from '@sparkdesignsystem/spark-extras-angular-dictionary';
import { SparkHighlightBoardModule } from '@sparkdesignsystem/spark-extras-angular-highlight-board';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SparkCoreAngularModule,
        SparkAwardModule,
        SparkCardModule,
        SparkDictionaryModule,
        SparkHighlightBoardModule
      ],
      declarations: [AppComponent]
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
