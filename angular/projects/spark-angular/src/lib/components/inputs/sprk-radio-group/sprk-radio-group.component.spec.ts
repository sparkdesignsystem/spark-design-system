import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprkRadioGroupComponent } from './sprk-radio-group.component';

describe('SprkRadioGroupComponent', () => {
  let component: SprkRadioGroupComponent;
  let fixture: ComponentFixture<SprkRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
