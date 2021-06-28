import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from './sprk-icon.component';

describe('SprkIconComponent', () => {
  let component: SprkIconComponent;
  let fixture: ComponentFixture<SprkIconComponent>;
  let iconElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkIconComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkIconComponent);
    component = fixture.componentInstance;
    iconElement = fixture.nativeElement.querySelector('svg');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(iconElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if iconName is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Icon');
  });

  it('should add the correct icon based on the iconName set', () => {
    component.iconName = 'bell';
    fixture.detectChanges();
    expect(
      iconElement.querySelector('use').hasAttribute('xlink:href'),
    ).toBeTruthy();
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell',
    );
  });

  // TODO: deprecate iconType on next release
  it('should add the correct icon based on the icon type set', () => {
    component.iconType = 'bell';
    fixture.detectChanges();
    expect(
      iconElement.querySelector('use').hasAttribute('xlink:href'),
    ).toBeTruthy();
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell',
    );
  });

  it('should add the default viewBox if not set', () => {
    component.iconName = 'bell';
    fixture.detectChanges();
    expect(iconElement.hasAttribute('viewBox')).toBeTruthy();
    expect(iconElement.getAttribute('viewBox')).toEqual('0 0 64 64');
  });

  it('should add viewBox', () => {
    component.iconName = 'bell';
    component.viewBox = '0 0 26 26';
    fixture.detectChanges();
    expect(iconElement.hasAttribute('viewBox')).toBeTruthy();
    expect(iconElement.getAttribute('viewBox')).toEqual('0 0 26 26');
  });

  it('should add aria-labelledby', () => {
    component.iconName = 'bell';
    component.ariaLabelledby = 'test';
    fixture.detectChanges();
    expect(iconElement.hasAttribute('aria-labelledby')).toBeTruthy();
    expect(iconElement.getAttribute('aria-labelledby')).toEqual('test');
  });

  it('should add aria-hidden', () => {
    component.iconName = 'bell';
    component.ariaHidden = 'true';
    fixture.detectChanges();
    expect(iconElement.hasAttribute('aria-hidden')).toBeTruthy();
    expect(iconElement.getAttribute('aria-hidden')).toEqual('true');
  });

  it('should add focusable=false by default', () => {
    component.iconName = 'bell';
    fixture.detectChanges();
    expect(iconElement.hasAttribute('focusable')).toBeTruthy();
    expect(iconElement.getAttribute('focusable')).toEqual('false');
  });

  it('should add focusableAttr', () => {
    component.iconName = 'bell';
    component.focusableAttr = true;
    fixture.detectChanges();
    expect(iconElement.hasAttribute('focusable')).toBeTruthy();
    expect(iconElement.getAttribute('focusable')).toEqual('true');
  });

  it('should add the correct classes if iconName has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if iconName and additionalClasses have values', () => {
    component.iconName = 'bell';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Icon sprk-u-pam sprk-u-man');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(iconElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(iconElement.getAttribute('data-id')).toBeNull();
  });
});
