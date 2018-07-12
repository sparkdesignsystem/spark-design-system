import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkButtonComponent } from './sprk-button.component';

describe('SparkButtonComponent', () => {
  let component: SparkButtonComponent;
  let fixture: ComponentFixture<SparkButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkButtonComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(buttonElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if buttonType is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Button');
  });

  it('should add the correct class if buttonType is secondary', () => {
    component.buttonType = 'secondary';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-c-Button--secondary');
  });

  it('should add the correct class if buttonType is tertiary', () => {
    component.buttonType = 'tertiary';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-c-Button--tertiary');
  });

  it('should add the correct class if buttonType is removal', () => {
    component.buttonType = 'removal';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-c-Button--removal');
  });

  it('should add the correct classes if buttonType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if buttonType and additionalClasses have values', () => {
    component.buttonType = 'secondary';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-c-Button--secondary sprk-u-pam sprk-u-man');
  });

  it('should add the disabled attribute and the disabled class if isDisabled is true', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    expect(buttonElement.hasAttribute('disabled')).toEqual(true);
    expect(component.getClasses()).toEqual('sprk-c-Button sprk-is-Disabled');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString="Product: Action: Button 1";
    fixture.detectChanges();
    expect(buttonElement.hasAttribute('data-analytics')).toEqual(true);
    expect(buttonElement.getAttribute('data-analytics')).toEqual('Product: Action: Button 1');
  });

  it('should add a spinner if spinner is true and button is clicked', () => {
    component.spinner = true;
    fixture.detectChanges();
    buttonElement.click();
    expect(component.isSpinning).toEqual(true);
    expect(buttonElement.children[0].classList.contains('sprk-c-Spinner')).toEqual(true);
  });

  it('should omit a custom event when fireEvent has a value', (done) => {
    component.fireEvent = "customEventName";
    fixture.detectChanges();
    component.customEvent.subscribe((g) => {
      expect(g).toEqual(component.fireEvent);
      done();
    })
    buttonElement.click();
  });
});
