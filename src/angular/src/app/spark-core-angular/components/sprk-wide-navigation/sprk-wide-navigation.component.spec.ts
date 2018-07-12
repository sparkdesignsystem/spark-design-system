import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkWideNavigationComponent } from './sprk-wide-navigation.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkWideNavigationComponent', () => {
  let component: SparkWideNavigationComponent;
  let fixture: ComponentFixture<SparkWideNavigationComponent>;
  let wideNavigationElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
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
    wideNavigationElement = fixture.nativeElement.querySelector('ul');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add any additional classes when additionalClasses has a value', () => {
    component.additionalClasses = "sprk-u-man";
    fixture.detectChanges();
    expect(wideNavigationElement.classList.toString()).toEqual('sprk-c-WideNavigation sprk-u-man');
  });
});
