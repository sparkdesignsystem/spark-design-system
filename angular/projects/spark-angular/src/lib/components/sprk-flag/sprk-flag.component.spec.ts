import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkFlagComponent } from './sprk-flag.component';

describe('SprkFlagComponent', () => {
  let component: SprkFlagComponent;
  let fixture: ComponentFixture<SprkFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkFlagComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkFlagComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
