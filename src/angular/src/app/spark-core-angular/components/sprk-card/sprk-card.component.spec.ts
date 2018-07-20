import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCardComponent } from './sprk-card.component';

describe('SparkCardComponent', () => {
  let component: SparkCardComponent;
  let fixture: ComponentFixture<SparkCardComponent>;
  let cardElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCardComponent);
    component = fixture.componentInstance;
    cardElement = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the icon', () => {
    let icon = cardElement.querySelector('div');
    fixture.detectChanges();
    expect(icon.classList.toString()).toEqual(component.getClasses());
  });

  it('getClassescardContainer should match what gets set on the container', () => {
    fixture.detectChanges();
    expect(cardElement.classList.toString()).toEqual(component.getClassescardContainer());
  });

  it('should add the correct class if cardType is not set', () => {
    component.cardType = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon');
  });

  it('should add the correct class if cardType is success', () => {
    component.cardType = 'success';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon sprk-c-card__icon--success');
  });

  it('should add the correct class if cardType is fail', () => {
    component.cardType = 'fail';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon sprk-c-card__icon--fail');
  });

  it('should add the correct class if cardType is info', () => {
    component.cardType = 'info';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon sprk-c-card__icon--info');
  });

  it('should add the correct classes if cardType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if cardType and additionalClasses have values', () => {
    component.cardType = 'info';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-card__icon sprk-c-card__icon--info sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if additionalClasses is set on container', () => {
    component.additionalClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClassescardContainer()).toEqual('sprk-c-card sprk-u-pam');
  });

  it('should add the dismiss button if dismissible is true', () => {
    component.dismissible = true;
    fixture.detectChanges();
    expect(cardElement.querySelector('button')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const cardStr = 'card One';
    component.analyticsString = cardStr;
    fixture.detectChanges();
    expect(cardElement.getAttribute('data-analytics')).toEqual(cardStr);
  });

  it('should hide the card if the dismiss button is clicked', () => {
    component.dismissible = true;
    fixture.detectChanges();
    cardElement.querySelector('button').click()
    fixture.detectChanges();
    expect(cardElement.classList.contains('sprk-u-Display--none')).toBeTruthy();
  });
});
