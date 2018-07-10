import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkNarrowNavigationComponent } from './sprk-narrow-navigation.component';

describe('SparkNarrowNavigationComponent', () => {
  let component: SparkNarrowNavigationComponent;
  let fixture: ComponentFixture<SparkNarrowNavigationComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkNarrowNavigationComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkNarrowNavigationComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
