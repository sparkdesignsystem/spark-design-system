import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkCardComponent } from './sprk-card.component';

describe('SparkCardComponent', () => {
  let component: SprkCardComponent;
  let fixture: ComponentFixture<SprkCardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SprkLinkDirectiveModule, SprkIconModule, RouterTestingModule],
      declarations: [SprkCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkCardComponent);
    component = fixture.componentInstance;
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClassesCard should match what gets set on the card', () => {
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.toString()).toEqual(component.getClassesCard());
  });

  it('should add additionalClasses if supplied', () => {
    component.additionalClasses = 'sprk-u-mbm';
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.toString()).toEqual(
      'sprk-c-Card sprk-o-Stack sprk-u-mbm',
    );
  });

  it('should add standout style selector if isStandout is true', () => {
    component.isStandout = true;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList).toContain('sprk-c-Card--standout');
  });

  it('should not add standout style selector if isStandout is false', () => {
    component.isStandout = false;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.classList.contains('sprk-c-Card--standout')).toBe(false);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('div');
    expect(element.getAttribute('data-id')).toBeNull();
  });
});
