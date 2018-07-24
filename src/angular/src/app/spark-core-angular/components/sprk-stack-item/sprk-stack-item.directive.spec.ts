import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SparkStackItemDirective } from './sprk-stack-item.directive';

@Component({
  template: `<div sprk-stack-item></div>`
})
class TestSparkItemComponent {
}

describe('SparkStackItemDirective', () => {
  let component: TestSparkItemComponent;
  let fixture: ComponentFixture<TestSparkItemComponent>;
  let element: HTMLLIElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkStackItemDirective,
        TestSparkItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSparkItemComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
