import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkListItemComponent } from './sprk-list-item.component';

describe('SprkListItemComponent', () => {
  let component: SprkListItemComponent;
  let fixture: ComponentFixture<SprkListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkListItemComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // To see tests on list-item, see ordered/unorder lists
});
