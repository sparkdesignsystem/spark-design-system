import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkSecondaryNavigationItemComponent } from './sprk-secondary-navigation-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkSecondaryNavigationItemComponent', () => {
  let component: SparkSecondaryNavigationItemComponent;
  let fixture: ComponentFixture<SparkSecondaryNavigationItemComponent>;
  let secondaryNavigationItemElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SparkSecondaryNavigationItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkSecondaryNavigationItemComponent);
    component = fixture.componentInstance;
    secondaryNavigationItemElement = fixture.nativeElement.querySelector('li');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.toString()).toEqual('sprk-u-mrm sprk-u-man');
  })

  it('should set the href to the incoming href value', () => {
    component.href = "/alerts";
    fixture.detectChanges();
    let link = secondaryNavigationItemElement.querySelector('a');
    expect(link.getAttribute('href')).toEqual('/alerts');
  });

  it('should set the right class to match the value of spacing (tiny)', () => {
    component.spacing = 'tiny';
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.contains('sprk-u-mrt')).toEqual(true);
  });

  it('should set the right class to match the value of spacing (small)', () => {
    component.spacing = 'small';
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.contains('sprk-u-mrs')).toEqual(true);
  });

  it('should set the right class to match the value of spacing (large)', () => {
    component.spacing = 'large';
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.contains('sprk-u-mrl')).toEqual(true);
  });

  it('should set the right class to match the value of spacing (huge)', () => {
    component.spacing = 'huge';
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.contains('sprk-u-mrh')).toEqual(true);
  });

  it('should set the right class to match the value of spacing (default)', () => {
    fixture.detectChanges();
    expect(secondaryNavigationItemElement.classList.contains('sprk-u-mrm')).toEqual(true);
  });
});
