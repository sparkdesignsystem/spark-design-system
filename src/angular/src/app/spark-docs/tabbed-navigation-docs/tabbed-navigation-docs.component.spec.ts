import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { TabbedNavigationDocsComponent } from './tabbed-navigation-docs.component';

describe('TabbedNavigationDocsComponent', () => {
  let component: TabbedNavigationDocsComponent;
  let fixture: ComponentFixture<TabbedNavigationDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule],
      declarations: [ TabbedNavigationDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedNavigationDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
