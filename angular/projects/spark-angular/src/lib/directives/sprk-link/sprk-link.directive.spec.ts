import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkLinkDirective } from './sprk-link.directive';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'sprk-test',
  template: `
    <a href="#nogo" sprkLink analyticsString="test">Link</a>
    <a href="#nogo" sprkLink isDisabled="true" idString="link">Link</a>
    <a sprkLink routerLink="/test">Link</a>
  `
})
class TestComponent { }

describe('SprkLink Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let linkEl: HTMLElement;
  let linkElDisabled: HTMLElement;
  let linkRouter: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SprkLinkDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    linkEl = fixture.nativeElement.querySelectorAll('a')[0];
    linkElDisabled = fixture.nativeElement.querySelectorAll('a')[1];
    linkRouter = fixture.nativeElement.querySelectorAll('a')[2];
  }));

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    expect(linkEl.classList.contains('sprk-b-Link'));
  });

  it('should apply correct Spark classes for simple variant', () => {
    expect(linkEl.classList.contains('sprk-b-Link--simple'));
  });

  it('should apply correct Spark classes for icon variant', () => {
    expect(linkEl.classList.contains('sprk-b-Link--simple'));
    expect(linkEl.classList.contains('sprk-b-Link--has-icon'));

  });

  it('should apply correct Spark classes for unstyled variant', () => {
    expect(linkEl.classList.contains('sprk-o-Box--small'));
  });

  it('should apply correct Spark classes for plain variant', () => {
    expect(linkEl.classList.contains('sprk-b-Link--plain'));
  });

  it('should apply correct Spark classes for disabled links', () => {
    expect(linkEl.classList.contains('sprk-b-Link--disabled'));
  });

  it('should set the value of analyticsString to data-analytics', () => {
    expect(linkElDisabled.getAttribute('data-analytics') === 'test');
  });

  it('should apply correct idString value to data-id', () => {
    expect(linkElDisabled.getAttribute('data-id') === 'link');
  });

  it('should apply correct classes to angular router link', () => {
    expect(linkRouter.classList.contains('sprk-b-Link'));
  });
});
