import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprkRadioComponent } from './sprk-radio.component';

describe('SprkRadioComponent', () => {
  let component: SprkRadioComponent;
  let fixture: ComponentFixture<SprkRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkRadioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
