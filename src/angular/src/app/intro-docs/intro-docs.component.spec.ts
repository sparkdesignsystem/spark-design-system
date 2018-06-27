import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDocsComponent } from './intro-docs.component';

describe('IntroDocsComponent', () => {
  let component: IntroDocsComponent;
  let fixture: ComponentFixture<IntroDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
