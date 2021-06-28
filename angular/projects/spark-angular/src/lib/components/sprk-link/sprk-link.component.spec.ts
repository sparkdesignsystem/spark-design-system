import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkLinkComponent } from './sprk-link.component';

describe('SprkLinkComponent', () => {
  let component: SprkLinkComponent;
  let fixture: ComponentFixture<SprkLinkComponent>;
  let linkElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [SprkLinkComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkLinkComponent);
    component = fixture.componentInstance;
    linkElement = fixture.nativeElement.querySelector('a');
  });

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

  it('should add the correct class if linkType is simple', () => {
    component.linkType = 'simple';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--simple');
  });

  it('should add the correct class if linkType is icon', () => {
    component.linkType = 'icon';
    expect(component.getClasses()).toEqual(
      'sprk-b-Link sprk-b-Link--simple sprk-b-Link--has-icon',
    );
  });

  it('should add the correct class if disabled is set to true', () => {
    component.isDisabled = true;
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--disabled');
  });

  it('should add the correct class if linkType is plain', () => {
    component.linkType = 'plain';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-b-Link--plain');
  });

  it('should add the correct classes if linkType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual('sprk-b-Link sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if linkType and additionalClasses have values', () => {
    component.linkType = 'simple';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    expect(component.getClasses()).toEqual(
      'sprk-b-Link sprk-b-Link--simple sprk-u-pam sprk-u-man',
    );
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString = 'Product: Link: Link 1';
    fixture.detectChanges();
    expect(linkElement.hasAttribute('data-analytics')).toEqual(true);
    expect(linkElement.getAttribute('data-analytics')).toEqual(
      'Product: Link: Link 1',
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(linkElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(linkElement.getAttribute('data-id')).toBeNull();
  });

  it('should set the target attr if supplied', () => {
    component.target = '_blank';
    fixture.detectChanges();
    expect(linkElement.getAttribute('target')).toEqual('_blank');
  });

  it('should get the url path before the hash', () => {
    const url = 'https://www.sparkdesignsystem.com/links#testing';
    const hash = 'links#testing';
    fixture.detectChanges();
    expect(component.getPathWithoutHash(hash)).toEqual('links');
    expect(component.getPathWithoutHash(url)).toEqual(
      'https://www.sparkdesignsystem.com/links',
    );
  });

  it('should determine if the value is a jump link', () => {
    const hash = '#testing';
    fixture.detectChanges();
    expect(component.isJumpLink(hash)).toBeTruthy();
  });

  it('should determine if the value is a jump link on a specific page', () => {
    const hash = 'links#testing';
    fixture.detectChanges();
    expect(component.isJumpLinkWithPage(hash)).toBeTruthy();
  });

  it('should determine if the value is an external link', () => {
    const url = 'https://www.sparkdesignsystem.com/';
    const internal = '/buttons';
    fixture.detectChanges();
    expect(component.isExternalLink(url)).toBeTruthy();
    expect(component.isExternalLink(internal)).toBeFalsy();
  });

  it('should add a hash as the href if an undefined value is supplied to href ', () => {
    const test = undefined;
    component.href = test;
    fixture.detectChanges();
    expect(component.href).toEqual('#');
  });
});
