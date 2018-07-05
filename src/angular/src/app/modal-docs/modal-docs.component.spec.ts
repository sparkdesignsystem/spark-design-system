import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../spark-core-angular/spark-core-angular.module';
import { ModalDocsComponent } from './modal-docs.component';

describe('ModalDocsComponent', () => {
  let component: ModalDocsComponent;
  let fixture: ComponentFixture<ModalDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule],
      declarations: [ ModalDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
