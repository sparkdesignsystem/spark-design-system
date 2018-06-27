import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocsComponent } from './button-docs.component';

describe('ButtonDocsComponent', () => {
  let component: ButtonDocsComponent;
  let fixture: ComponentFixture<ButtonDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
