import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkLinkDirective } from './sprk-link.directive';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'sprk-test',
  template: `
    <a href="#nogo" sprkLink analyticsString="test">Link</a>
    <a href="#nogo" sprkLink isDisabled="true" idString="link">Link</a>
    <a sprkLink routerLink="/test">Link</a>
    <a href="#nogo" sprkLink variant="plain">Link</a>
    <a href="#nogo" sprkLink variant="icon">Link</a>
    <a href="#nogo" sprkLink variant="simple">Simple Link</a>
    <a href="#nogo" sprkLink variant="unstyled">Link</a>
    <a href="#nogo" sprkLink variant="light">Link</a>
    <a href="#nogo" sprkLink variant="hasIcon">Link</a>
  `,
})
class TestComponent {}

describe('SprkLink Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let linkEl: HTMLElement;
  let linkElDisabled: HTMLElement;
  let linkRouter: HTMLElement;
  let linkPlain: HTMLElement;
  // TODO: Remove 'icon' in issue #1293
  let linkIcon: HTMLElement;
  let linkSimple: HTMLElement;
  let linkUnstyled: HTMLElement;
  let linkLight: HTMLElement;
  let linkHasIcon: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [SprkLinkDirective, TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    linkEl = fixture.nativeElement.querySelectorAll('a')[0];
    linkElDisabled = fixture.nativeElement.querySelectorAll('a')[1];
    linkRouter = fixture.nativeElement.querySelectorAll('a')[2];
    linkPlain = fixture.nativeElement.querySelectorAll('a')[3];
    // TODO: Remove 'icon' in issue #1293
    linkIcon = fixture.nativeElement.querySelectorAll('a')[4];
    linkSimple = fixture.nativeElement.querySelectorAll('a')[5];
    linkUnstyled = fixture.nativeElement.querySelectorAll('a')[6];
    linkLight = fixture.nativeElement.querySelectorAll('a')[7];
    linkHasIcon = fixture.nativeElement.querySelectorAll('a')[8];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(linkEl.classList.contains('sprk-b-Link')).toBe(true);
  });

  it('should apply correct Spark classes for simple variant', () => {
    expect(linkSimple.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkSimple.classList.contains('sprk-b-Link--simple')).toBe(true);
  });

  // TODO: Remove 'icon' in issue #1293
  it('should apply correct Spark classes for icon variant', () => {
    expect(linkIcon.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkIcon.classList.contains('sprk-b-Link--simple')).toBe(false);
    expect(linkIcon.classList.contains('sprk-b-Link--has-icon')).toBe(true);
  });

  it('should apply correct Spark classes for hasIcon variant', () => {
    expect(linkHasIcon.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkHasIcon.classList.contains('sprk-b-Link--simple')).toBe(false);
    expect(linkHasIcon.classList.contains('sprk-b-Link--has-icon')).toBe(true);
  });

  it('should apply correct Spark classes for unstyled variant', () => {
    expect(linkUnstyled.classList.contains('sprk-b-Link')).toBe(false);
  });

  it('should apply correct Spark classes for plain variant', () => {
    expect(linkPlain.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkPlain.classList.contains('sprk-b-Link--plain')).toBe(true);
  });

  it('should apply correct Spark classes for light variant', () => {
    expect(linkLight.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkLight.classList.contains('sprk-b-Link--light')).toBe(true);
  });

  it('should apply correct Spark classes for disabled links', () => {
    expect(linkElDisabled.classList.contains('sprk-b-Link')).toBe(true);
    expect(linkElDisabled.classList.contains('sprk-b-Link--disabled')).toBe(
      true,
    );
  });

  it('should set the value of analyticsString to data-analytics', () => {
    expect(linkEl.getAttribute('data-analytics') === 'test').toBe(true);
  });

  it('should apply correct idString value to data-id', () => {
    expect(linkElDisabled.getAttribute('data-id') === 'link').toBe(true);
  });

  it('should apply correct classes to angular router link', () => {
    expect(linkRouter.classList.contains('sprk-b-Link')).toBe(true);
  });
});
