import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprkRadioItemComponent } from './sprk-radio-item.component';

describe('SprkRadioItemComponent', () => {
  let component: SprkRadioItemComponent;
  let fixture: ComponentFixture<SprkRadioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkRadioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
