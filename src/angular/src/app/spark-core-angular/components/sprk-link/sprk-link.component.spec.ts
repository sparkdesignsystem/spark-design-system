import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkLinkComponent } from './sprk-link.component';

describe('SparkAlertComponent', () => {
  let component: SparkLinkComponent;
  let fixture: ComponentFixture<SparkLinkComponent>;
  let linkElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkLinkComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLinkComponent);
    component = fixture.componentInstance;
    linkElement = fixture.nativeElement.querySelector('button');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(linkElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if linkType is not set', () => {
    expect(component.getClasses()).toEqual('sprk-b-Link');
  });

  it('should add the correct class if linkType is standalone', () => {
    component.linkType = 'standalone';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--standalone');
  });

  it('should add the correct class if linkType is disabled', () => {
    component.linkType = 'disabled';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--disabled');
  });

  it('should add the correct classes if linkType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if linkType and additionalClasses have values', () => {
    component.linkType = 'standalone';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--standalone sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString='Product: Link: Link 1';
    fixture.detectChanges();
    expect(linkElement.hasAttribute('data-analytics')).toEqual(true);
    expect(linkElement.getAttribute('data-analytics')).toEqual('Product: Link: Link 1');
  });
});
