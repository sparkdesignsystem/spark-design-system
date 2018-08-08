import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkTabbedNavigationComponent } from './sprk-tabbed-navigation.component';

describe('SparkTabbedNavigationComponent', () => {
  let component: SparkTabbedNavigationComponent;
  let fixture: ComponentFixture<SparkTabbedNavigationComponent>;
  let element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkTabbedNavigationComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkTabbedNavigationComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('ul');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
