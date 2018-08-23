import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkAwardModule } from '../../spark-extras-angular/components/sprk-award/sprk-award.module';
import { FooterDocsComponent } from './footer-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterDocsComponent', () => {
  let component: FooterDocsComponent;
  let fixture: ComponentFixture<FooterDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SparkCoreAngularModule,
        RouterTestingModule,
        SparkAwardModule
      ],
      declarations: [ FooterDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
