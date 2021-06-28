import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ElementRef, Component, ViewChild } from '@angular/core';
import { isElementVisible } from './isElementVisible';

@Component({
  selector: 'sprk-test',
  template: `
    <div #elDisplayNone style="display: none;"></div>
    <div #elVisibilityHidden style="visibility: hidden;"></div>
    <div #elDisplayBlock></div>
    <div #elVisibilityVisible style="visibility: visible;"></div>
  `,
})
class Test1Component {
  @ViewChild('elDisplayNone', { static: false }) elDisplayNone: ElementRef;
  @ViewChild('elVisibilityHidden', { static: false })
  elVisibilityHidden: ElementRef;
  @ViewChild('elDisplayBlock', { static: false }) elDisplayBlock: ElementRef;
  @ViewChild('elVisibilityVisible', { static: false })
  elVisibilityVisible: ElementRef;
}

describe('isElementVisible', () => {
  let component: Test1Component;
  let componentFixture: ComponentFixture<Test1Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Test1Component],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    componentFixture = TestBed.createComponent(Test1Component);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should return false for element with display: none', () => {
    expect(isElementVisible(component.elDisplayNone)).toEqual(false);
  });

  it('should return false for element with visibility: hidden', () => {
    expect(isElementVisible(component.elVisibilityHidden)).toEqual(false);
  });

  it('should return true for element with display: block', () => {
    expect(isElementVisible(component.elDisplayBlock)).toEqual(true);
  });

  it('should return true for element with visibility: visible', () => {
    expect(isElementVisible(component.elVisibilityVisible)).toEqual(true);
  });
});
