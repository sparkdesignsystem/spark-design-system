import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkHighlightBoardComponent } from './sprk-highlight-board.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SparkHighlightBoardComponent', () => {
  let component: SparkHighlightBoardComponent;
  let fixture: ComponentFixture<SparkHighlightBoardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SparkHighlightBoardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkHighlightBoardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set', () => {
    fixture.detectChanges();
    expect(element.querySelector('div').classList.toString()).toEqual(component.getClasses());
  });


  it('should set the data-analytics attribute given a value in the analyticsStringImgOne Input', () => {
    const str = 'One';
    component.analyticsStringImgOne = str;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(str);
  });
});
