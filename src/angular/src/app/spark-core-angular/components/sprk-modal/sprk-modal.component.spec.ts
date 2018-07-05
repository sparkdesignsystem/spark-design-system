import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkModalComponent } from './sprk-modal.component';

describe('SparkModalComponent', () => {
  let component: SparkModalComponent;
  let fixture: ComponentFixture<SparkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
