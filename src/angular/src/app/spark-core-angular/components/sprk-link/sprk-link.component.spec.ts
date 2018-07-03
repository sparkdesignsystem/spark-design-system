import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLinkComponent } from './sprk-link.component';

describe('SparkLinkComponent', () => {
  let component: SparkLinkComponent;
  let fixture: ComponentFixture<SparkLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
