import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  isUpPressed,
  isDownPressed,
  isLeftPressed,
  isRightPressed,
  isEscapePressed,
  isEnterPressed,
  isSpacePressed,
  isTabPressed,
} from './keypress';

@Component({
  selector: 'sprk-test',
  template: ``,
})
class Test1Component {}

describe('keypress', () => {
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

  it('should return true for isEscapePressed with key Escape', () => {
    const event = new KeyboardEvent('keydown', { key: 'Escape' });

    expect(isEscapePressed(event)).toEqual(true);
  });

  it('should return true for isEscapePressed with key Esc', () => {
    const event = new KeyboardEvent('keydown', { key: 'Esc' });

    expect(isEscapePressed(event)).toEqual(true);
  });

  it('should return true for isEscapePressed with keycode 27', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 27 });

    expect(isEscapePressed(event)).toEqual(true);
  });

  it('should return false for isEscapePressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isEscapePressed(event)).toEqual(false);
  });

  it('should return true for isSpacePressed with key Spacebar', () => {
    const event = new KeyboardEvent('keydown', { key: 'Spacebar' });

    expect(isSpacePressed(event)).toEqual(true);
  });

  it('should return true for isSpacePressed with key " "', () => {
    const event = new KeyboardEvent('keydown', { key: ' ' });

    expect(isSpacePressed(event)).toEqual(true);
  });

  it('should return true for isSpacePressed with keycode 32', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 32 });

    expect(isSpacePressed(event)).toEqual(true);
  });

  it('should return false for isSpacePressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isSpacePressed(event)).toEqual(false);
  });

  it('should return true for isEnterPressed with key Enter', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });

    expect(isEnterPressed(event)).toEqual(true);
  });

  it('should return true for isEnterPressed with keycode 13', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 13 });

    expect(isEnterPressed(event)).toEqual(true);
  });

  it('should return false for isEnterPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isEnterPressed(event)).toEqual(false);
  });

  it('should return true for isTabPressed with key Tab', () => {
    const event = new KeyboardEvent('keydown', { key: 'Tab' });

    expect(isTabPressed(event)).toEqual(true);
  });

  it('should return true for isTabPressed with keycode 9', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 9 });

    expect(isTabPressed(event)).toEqual(true);
  });

  it('should return false for isTabPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isTabPressed(event)).toEqual(false);
  });

  it('should return true for isUpPressed with key ArrowUp', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });

    expect(isUpPressed(event)).toEqual(true);
  });

  it('should return true for isUpPressed with keycode 38', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 38 });

    expect(isUpPressed(event)).toEqual(true);
  });

  it('should return false for isUpPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isUpPressed(event)).toEqual(false);
  });

  it('should return true for isDownPressed with key ArrowDown', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });

    expect(isDownPressed(event)).toEqual(true);
  });

  it('should return true for isDownPressed with keycode 40', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 40 });

    expect(isDownPressed(event)).toEqual(true);
  });

  it('should return false for isDownPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isDownPressed(event)).toEqual(false);
  });

  it('should return true for isLeftPressed with key ArrowLeft', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });

    expect(isLeftPressed(event)).toEqual(true);
  });

  it('should return true for isLeftPressed with keycode 37', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 37 });

    expect(isLeftPressed(event)).toEqual(true);
  });

  it('should return false for isLeftPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isLeftPressed(event)).toEqual(false);
  });

  it('should return true for isRightPressed with key ArrowRight', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });

    expect(isRightPressed(event)).toEqual(true);
  });

  it('should return true for isRightPressed with keycode 39', () => {
    // keydown is deprecated so typescript flags it
    // @ts-ignore
    const event = new KeyboardEvent('keydown', { keyCode: 39 });

    expect(isRightPressed(event)).toEqual(true);
  });

  it('should return false for isRightPressed with incorrect key', () => {
    const event = new KeyboardEvent('keydown', { key: 'foo' });

    expect(isRightPressed(event)).toEqual(false);
  });
});
