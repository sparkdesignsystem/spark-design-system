import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkListItemComponent } from './sprk-list-item.component';

describe('SparkListItemComponent', () => {
  let component: SparkListItemComponent;
  let fixture: ComponentFixture<SparkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
