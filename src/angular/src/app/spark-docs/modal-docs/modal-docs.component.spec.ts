import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { ModalDocsComponent } from './modal-docs.component';

describe('ModalDocsComponent', () => {
  let component: ModalDocsComponent;
  let fixture: ComponentFixture<ModalDocsComponent>;
  let choiceButton: HTMLElement;
  let waitButton: HTMLElement;
  let infoButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [ModalDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    choiceButton = fixture.nativeElement.querySelector('.choice-button');
    waitButton = fixture.nativeElement.querySelector('.wait-button');
    infoButton = fixture.nativeElement.querySelector('.info-button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle choiceVisible when clicking the choice modal button', () => {
    expect(component.choiceVisible).toEqual(false);
    choiceButton.click();
    expect(component.choiceVisible).toEqual(true);
    choiceButton.click();
  });

  it('should toggle infoVisible when clicking the info modal button', () => {
    expect(component.infoVisible).toEqual(false);
    infoButton.click();
    expect(component.infoVisible).toEqual(true);
  });

  it('should toggle waitVisible when clicking the wait modal button', () => {
    expect(component.waitVisible).toEqual(false);
    waitButton.click();
    expect(component.waitVisible).toEqual(true);
  });
});
