import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkTabDuplicateComponent } from './sprk-tab-duplicate.component';

describe('SprkTabDuplicateComponent', () => {
  let component: SprkTabDuplicateComponent;
  let fixture: ComponentFixture<SprkTabDuplicateComponent>;
  let linkElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SprkTabDuplicateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkTabDuplicateComponent);
    component = fixture.componentInstance;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
