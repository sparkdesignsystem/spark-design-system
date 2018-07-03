import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprkIconSetComponent } from './sprk-icon-set.component';

describe('SprkIconSetComponent', () => {
  let component: SprkIconSetComponent;
  let fixture: ComponentFixture<SprkIconSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprkIconSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkIconSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
