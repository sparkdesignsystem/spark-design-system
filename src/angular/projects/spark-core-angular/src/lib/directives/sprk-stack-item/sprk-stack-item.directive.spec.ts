import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkStackItemDirective } from './sprk-stack-item.directive';

@Component({
  template: `<div sprkStackItem></div>`
})
class TestSparkItemComponent {}

describe('SprkStackItemDirective', () => {
  let component: TestSparkItemComponent;
  let fixture: ComponentFixture<TestSparkItemComponent>;
  let element: HTMLLIElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkStackItemDirective, TestSparkItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSparkItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
