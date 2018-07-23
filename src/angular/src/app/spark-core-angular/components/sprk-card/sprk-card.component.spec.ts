import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCardComponent } from './sprk-card.component';

fdescribe('SparkCardComponent', () => {
  let component: SparkCardComponent;
  let fixture: ComponentFixture<SparkCardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkCardComponent);
    component = fixture.componentInstance;
  })

  it('should create itself', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element).toBeTruthy();
  });

  it('getClassesCard should match what gets set on the card', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.toString()).toEqual(component.getClassesCard());
  });

  it('should add the correct class if cardType is not set', () => {
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack');
  });

  it('should add the img if cardType is set as teaser', () => {
    component.cardType = 'teaser';
    component.ctaType = 'button';
    component.ctaText = 'teaser';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.imgAlt = 'Alt!';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('a img');
    expect(el).toBeTruthy();
  });

  it('should add the correct classes if cardType has no value, but additionalClasses does', () => {
    component.cardType = 'teaser';
    component.ctaType = 'button';
    component.ctaText = 'teaser';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.imgAlt = 'Alt!';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if cardType and additionalClasses have values', () => {
    component.cardType = 'teaser';
    component.ctaType = 'button';
    component.ctaText = 'Link text';
    component.body = 'Some body copy.';
    component.title = 'Title!';
    component.imgAlt = 'Alt!';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClassesCard()).toEqual('sprk-c-Card sprk-o-Stack sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the ctaAnalytics Input', () => {
    component.cardType = 'teaserHeading';
    component.ctaText = 'Link text';
    component.ctaAnalytics = 'One';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    let el = element.querySelector('div.sprk-c-Card__content a');
    console.log(el);
    expect(el.getAttribute('data-analytics')).toEqual('One');
  });
});
