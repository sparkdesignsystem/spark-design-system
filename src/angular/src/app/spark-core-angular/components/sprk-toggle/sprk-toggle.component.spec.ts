import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkToggleComponent } from './sprk-toggle.component';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';

describe('SparkToggleComponent', () => {
  let component: SparkToggleComponent;
  let fixture: ComponentFixture<SparkToggleComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkToggleComponent,
        SparkIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkToggleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the div', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('clicking should show body text', () => {
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(element.querySelector('p')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString= str;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(str);
  });

  it('should add icon classes to icon when toggle is opened', () => {
    component.title= 'placeholder';
    component.body= 'placeholder';
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(element.querySelector('a .sprk-c-Icon').classList.toString()).toEqual('sprk-c-Icon sprk-u-mrs sprk-c-Icon--open');
  });

  it('should add icon classes to icon when toggle is opened and then closed', () => {
    component.title= 'placeholder';
    component.body= 'placeholder';
    element.querySelector('a').click();
    element.querySelector('a').click();
    fixture.detectChanges();
    expect(element.querySelector('a .sprk-c-Icon').classList.toString()).toEqual('sprk-c-Icon sprk-u-mrs');
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(' sprk-u-pam sprk-u-man');
  });
});
