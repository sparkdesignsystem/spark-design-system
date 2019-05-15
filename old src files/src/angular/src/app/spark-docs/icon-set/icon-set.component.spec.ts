import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconSetComponent } from './icon-set.component';

describe('IconSetComponent', () => {
  let component: IconSetComponent;
  let fixture: ComponentFixture<IconSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconSetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
