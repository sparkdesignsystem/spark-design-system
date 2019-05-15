import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { InputDocsComponent } from './input-docs.component';

describe('InputDocsComponent', () => {
  let component: InputDocsComponent;
  let fixture: ComponentFixture<InputDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, FormsModule],
      declarations: [InputDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle passwordType when togglePasswordType is called', () => {
    component.passwordType = 'password';
    component.togglePasswordType();
    expect(component.passwordType).toEqual('text');
    component.togglePasswordType();
    expect(component.passwordType).toEqual('password');
  });

  it('should toggle ssnType when toggleSSNType is called', () => {
    component.ssnType = 'password';
    component.toggleSSNType();
    expect(component.ssnType).toEqual('text');
    component.toggleSSNType();
    expect(component.ssnType).toEqual('password');
  });

  it('should set form_submitted when onSubmit is called', () => {
    component.form_submitted = false;
    component.onSubmit(event);
    expect(component.form_submitted).toEqual(true);
  });
});
