import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkModalComponent } from './sprk-modal.component';

describe('SparkModalComponent', () => {
  let component: SparkModalComponent;
  let fixture: ComponentFixture<SparkModalComponent>;
  let modalElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkModalComponent);
    component = fixture.componentInstance;
    component.isVisible = true;
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
  });

  afterEach(() => {
    component.isVisible = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the modal when isVisible is true', () => {
    expect(modalElement.classList.contains('sprk-c-Modal')).toEqual(true);
  });

  it('should not show the modal when isVisible is false', () => {
    component.isVisible = false;
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
    expect(modalElement).toEqual(null);
  });

  it('should not show the modal when isVisible is not set', () => {
    component.isVisible = null;
    fixture.detectChanges();
    modalElement = fixture.nativeElement.querySelector('.sprk-c-Modal');
    expect(modalElement).toEqual(null);
  });

  it('should set the title to the value of the title input', () => {
    component.title = "This is my title";
    fixture.detectChanges();
    console.log(modalElement);
    expect(modalElement.querySelector('.sprk-c-Modal__heading').textContent).toEqual('This is my title');
  });
});
