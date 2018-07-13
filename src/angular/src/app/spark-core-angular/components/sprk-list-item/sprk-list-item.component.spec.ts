import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkListComponent } from './sprk-list.component';

describe('SparkListComponent', () => {
  let component: SparkListComponent;
  let fixture: ComponentFixture<SparkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
