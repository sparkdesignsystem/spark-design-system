import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkToggleComponent } from './sprk-toggle.component';

describe('SparkToggleComponent', () => {
  let component: SparkToggleComponent;
  let fixture: ComponentFixture<SparkToggleComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkToggleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkToggleComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the div', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('clicking should show body text', () => {
    fixture.detectChanges();

    element.querySelector('a').click();
    expect(element.querySelector('p').style.display).toEqual('block');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const str = 'One';
    component.analyticsString= str;
    fixture.detectChanges();
    expect(element.getAttribute('data-analytics')).toEqual(str);
  });
});
