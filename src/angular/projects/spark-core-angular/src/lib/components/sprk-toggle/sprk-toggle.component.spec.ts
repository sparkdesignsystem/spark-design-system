import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkToggleComponent } from './sprk-toggle.component';

describe('SparkToggleComponent', () => {
  let component: SparkToggleComponent;
  let fixture: ComponentFixture<SparkToggleComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [SparkToggleComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkToggleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('clicking should show body text', () => {
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(element.querySelector('div.sprk-u-pts.sprk-u-pbs')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString = str;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      str
    );
  });

  it('should add icon classes to icon when toggle is opened', () => {
    component.title = 'placeholder';
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(
      element.querySelector('a .sprk-c-Icon').classList.toString()
    ).toEqual('sprk-c-Icon sprk-u-mrs sprk-c-Icon--toggle sprk-c-Icon--open');
  });

  it('should add icon classes to icon when toggle is opened and then closed', () => {
    component.title = 'placeholder';
    element.querySelector('a').click();
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(
      element.querySelector('a .sprk-c-Icon').classList.toString()
    ).toEqual('sprk-c-Icon sprk-u-mrs sprk-c-Icon--toggle');
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-u-pam sprk-u-man');
  });
});
