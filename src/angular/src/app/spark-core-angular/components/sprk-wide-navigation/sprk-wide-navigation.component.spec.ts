import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkWideNavigationComponent } from './sprk-wide-navigation.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SparkWideNavigationComponent', () => {
  let component: SparkWideNavigationComponent;
  let fixture: ComponentFixture<SparkWideNavigationComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkWideNavigationComponent,
        SparkIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkWideNavigationComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
