import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDocsComponent } from './link-docs.component';

describe('LinkDocsComponent', () => {
  let component: LinkDocsComponent;
  let fixture: ComponentFixture<LinkDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
