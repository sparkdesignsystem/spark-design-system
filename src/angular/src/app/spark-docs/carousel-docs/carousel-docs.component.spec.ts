import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { CarouselDocsComponent } from './carousel-docs.component';

describe('CarouselDocsComponent', () => {
  let component: CarouselDocsComponent;
  let fixture: ComponentFixture<CarouselDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule],
      declarations: [CarouselDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
